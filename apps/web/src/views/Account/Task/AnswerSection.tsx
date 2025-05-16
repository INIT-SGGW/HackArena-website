'use client';

import {
    type Dispatch,
    type SetStateAction,
    useEffect,
    useState,
} from 'react';
import { Button, Input } from '@repo/ui';
import { fetcherHack, FetcherOptions } from '../../../api/fetcher';
import useSWRMutation from 'swr/mutation';
import useSWR, { Key } from 'swr';

type Props = {
    id: string;
    taskId: string;
};

type GetTaskAnswersResponse = {
    _id: string;
    teamId: string;
    taskId: string;
    submissionDate: string;
    answer: string;
    score: number;
    isValid: boolean;
    message: string;
};

type SendAnswerTaskResponse = {
    score: number;
    message: string;
    isValid: boolean;
};

type SendAnswerTaskRequest = {
    answer: string;
};

// const formatUTCDate = (date: Date): string => {
//     return date.toLocaleString('en-US', {
//         timeZone: 'UTC',
//         year: 'numeric',
//         month: 'numeric',
//         day: 'numeric',
//         hour: 'numeric',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: false,
//     });
// };

function Timer({
    cooldown,
    setCooldown,
}: {
    cooldown: Date;
    setCooldown: Dispatch<SetStateAction<Date | null>>;
}): React.JSX.Element {
    const [time, setTime] = useState<number>(cooldown.getTime() - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(cooldown.getTime() - Date.now());
            if (cooldown.getTime() < Date.now() + 1000) {
                setCooldown(null);
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [cooldown, setCooldown]);

    return (
        <p
            className={`text-primary text-4xl border-2 border-primary w-full text-center`}
        >
            {new Date(time).toISOString().match(/\d{2}:\d{2}:\d{2}/g)?.[0]}
        </p>
    );
}

// function AnswerItem({ data }: { data: GetTaskAnswersResponse }) {
//     const pRef = useRef<HTMLParagraphElement | null>(null);
//     const [isOverflowing, setIsOverflowing] = useState(false);

//     useEffect(() => {
//         const checkOverflow = () => {
//             if (pRef.current) {
//                 setIsOverflowing(
//                     pRef.current.scrollWidth > pRef.current.clientWidth,
//                 );
//             }
//         };

//         checkOverflow();

//         window.addEventListener('resize', checkOverflow);

//         return () => {
//             window.removeEventListener('resize', checkOverflow);
//         };
//     }, [data.answer, pRef.current]);

//     return (
//         <div className="flex flex-row items-center justify-start gap-4 w-full pr-3">
//             <p
//                 ref={pRef}
//                 title={data.answer}
//                 className={`text-sm ${data.isValid ? 'text-cred' : 'text-white'} text-nowrap text-ellipsis overflow-hidden`}
//             >
//                 {data.answer}
//             </p>
//             {isOverflowing ? (
//                 <button
//                     className="w-min self-end cursor-pointer"
//                     type="button"
//                     title="Skopiuj input"
//                     onClick={() => {
//                         void navigator.clipboard.writeText(data.answer);
//                     }}
//                 >
//                     <img
//                         src="/copy.svg"
//                         alt="copy"
//                         height="10px"
//                         width="10px"
//                         className="min-w-[20px] h-[20px]"
//                     />
//                 </button>
//             ) : null}
//         </div>
//     );
// }

export function AnswerSection({ id, taskId }: Props): React.JSX.Element {
    const { data, error, isLoading, mutate } = useSWR<
        GetTaskAnswersResponse,
        Error
    >(`/tasks/${taskId}/teams/${id}`, (url: string) =>
        fetcherHack<null, GetTaskAnswersResponse>(url, {
            method: 'GET',
        }),
    );
    const {
        trigger,
        data: sendData,
        error: answerError,
    } = useSWRMutation<
        SendAnswerTaskResponse,
        Error,
        Key,
        FetcherOptions<SendAnswerTaskRequest>
    >(`/taskSubmissions/${taskId}/teams/${id}`, () =>
        fetcherHack<SendAnswerTaskRequest, SendAnswerTaskResponse>(
            `/taskSubmissions/${taskId}/teams/${id}`,
            {
                method: 'POST',
                body: { answer },
            },
        ),
    );
    // const [loggedIn, setLoggedIn] = useState<boolean>(true);
    const [answer, setAnswer] = useState<string>('');
    const [cooldown, setCooldown] = useState<Date | null>(null);
    const [submitError, setSubmitError] = useState<string | null>(null);

    useEffect(() => {
        if (
            data?.submissionDate &&
            new Date(data.submissionDate).getTime() > Date.now()
        ) {
            setCooldown(new Date(data.submissionDate));
        }
    }, [data?.submissionDate]);

    // useEffect(() => {
    //     setLoggedIn(localStorage.getItem("userId") !== null);
    // }, [])

    // const handleDownloadInput = (): void => {
    //     if (data) {
    //         const blob = new Blob([data.input], { type: "text/plain" });
    //         const url = URL.createObjectURL(blob);

    //         const a = document.createElement("a");
    //         a.href = url;
    //         a.download = "input.txt";
    //         document.body.appendChild(a);
    //         a.click();

    //         document.body.removeChild(a);
    //         URL.revokeObjectURL(url);
    //     }
    // }

    const handleSubmit = async (): Promise<void> => {
        setSubmitError(null);
        if (!answer) {
            setSubmitError('Nie możesz wysłać pustej odpowiedzi');
            return;
        }

        try {
            await trigger({ body: { answer } });
            await mutate();
        } catch (_: unknown) { } //eslint-disable-line no-empty -- errors are handled by SWR
    };

    // if (!loggedIn) {
    //     return (
    //         <div className="flex flex-col items-center justify-center gap-6 mt-16">
    //             <Image src="/lock.svg" alt="lock" width={75} height={75} />
    //             <p className="text-primary text-lg text-center">
    //                 Aby móc odpowiadać, musisz się{' '}
    //                 <Link href="/login" className="text-primary underline">
    //                     zalogować
    //                 </Link>
    //             </p>
    //         </div>
    //     );
    // }

    if (isLoading) <div> </div>;

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            {!data || error ? (
                <>
                    <h1 className="text-primary text-3xl">Ups...</h1>
                    <p className="text-center">
                        {error
                            ? error.message
                            : 'Wystąpił błąd podczas pobierania danych'}
                    </p>
                </>
            ) : (
                <>
                    <h1 className="text-primary text-3xl font-bold">
                        Odpowiedź!
                    </h1>
                    <p className="text-white text-md text-center">
                        {cooldown
                            ? 'Otrzymałeś/aś cooldown. Możesz wysłać maksymalnie jedną odpowiedź na godzinę'
                            : 'Prześlij swoją odpowiedź poniżej'}
                    </p>
                    <p className="text-error text-sm text-center">
                        {submitError || answerError?.message}
                    </p>
                    {cooldown ? (
                        <Timer cooldown={cooldown} setCooldown={setCooldown} />
                    ) : (
                        <form
                            className="w-full flex-col"
                            noValidate
                            onSubmit={(e) => {
                                e.preventDefault();
                                void handleSubmit();
                            }}
                        >
                            <Input
                                placeholder="Odpowiedź"
                                value={answer}
                                onChange={(e) => {
                                    setAnswer(e.target.value);
                                }}
                            />
                            <Button type="submit" fullWidth className="mt-3">
                                Wyślij
                            </Button>
                        </form>
                    )}
                    {sendData && !sendData.isValid && (
                        <p className="text-error text-sm text-center">
                            {sendData.message}
                        </p>
                    )}

                    <div className="flex flex-col items-center justify-center gap-4 p-4 w-full ">
                        {/* <p className="text-lg text-center text-primary">Twoja najlepsza odpowiedź:</p> */}
                        {data.isValid ? (
                            <div className="flex flex-col items-center justify-center w-full text-center">
                                <p className="text-white text-lg text-center">
                                    Otrzymaliście
                                </p>
                                <p className="text-primary text-3xl font-bold">
                                    {data.score}
                                </p>
                                <p className="text-white text-lg">
                                    punktów za swoją najelpszą odpowiedź
                                </p>
                                <Button
                                    className="mt-7"
                                    fullWidth
                                    secondary
                                    onClick={() => {
                                        void navigator.clipboard.writeText(
                                            data.answer,
                                        );
                                    }}
                                >
                                    Skopiuj odpowiedź
                                </Button>
                            </div>
                        ) : (
                            <p className="text-center text-sm text-white">
                                Nie masz jeszcze poprawnej odpowiedzi.
                            </p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
