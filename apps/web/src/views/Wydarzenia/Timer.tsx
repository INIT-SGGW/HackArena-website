import { useEffect, useState } from 'react';
import { EventData } from '../../utils/mockData';
import { LinkButton } from '@repo/ui';

export type TimerProps = {
    startDate: Date;
    registration: EventData['registration'];
};

export function Timer({ startDate, registration }: TimerProps) {
    const [timeLeft, setTimeLeft] = useState<number>(
        startDate.getTime() - Date.now(),
    );
    const isRegisterOpen =
        registration.date.start.getTime() <= Date.now() &&
        registration.date.end.getTime() >= Date.now();

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(startDate.getTime() - Date.now());
            if (timeLeft && timeLeft <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [startDate]);

    return (
        <div className="w-full flex flex-col items-center gap-4">
            <h2 className="subtitle">Początek już za</h2>
            <p className="text-text font-bold text-5xl sm:text-6xl ">
                {timeToString(timeLeft)}
            </p>
            {isRegisterOpen && (
                <LinkButton
                    href={registration.url || '/rejestracja/druzyna'}
                    className="mt-8"
                >
                    Zapisz się!
                </LinkButton>
            )}
        </div>
    );
}

const timeToString = (time: number) => {
    const twoDigitFormat = (num: number) => {
        return num < 10 ? `0${num}` : num;
    };

    const days = twoDigitFormat(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = twoDigitFormat(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const minutes = twoDigitFormat(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const seconds = twoDigitFormat(Math.floor((time % (1000 * 60)) / 1000));

    return `${days}:${hours}:${minutes}:${seconds}`;
};
