"use client";

import { useParams } from "next/navigation";
import { useGetUserId } from "../../../utils/useGetUserId";
import { LinkButton } from "@repo/ui";
import Image from "next/image";
import { ComponentProps } from "react";
import { GetSingleTeamResponse } from "../../../types/responses";
import { fetcherHack } from "../../../api/fetcher";
import { MemberStatus } from "../../../types/types";

type Props = {
    data: GetSingleTeamResponse["members"] | undefined;
    isLoading: boolean;
    error: Error | undefined;
    mutate: () => Promise<void | GetSingleTeamResponse | undefined>;
}

export function MembersCard({ data, isLoading, error, mutate }: Props) {
    const userId = useGetUserId();
    const captain = data?.find((member) => member.isLeader);
    const teamId = useParams().id;

    const handleChangeLeader = async (userLeaderId: string) => {
        try {
            await fetcherHack<null, null>(`/teams/${teamId}/members/${userLeaderId}/change-leader`, {
                method: 'PATCH',
            });
        } catch (error) {
            if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
                console.error('Logout error:', error);
            }
        }

        await mutate();
    }

    const handleDeleteMember = async (userDeleteId: string) => {
        try {
            await fetcherHack<null, null>(`/teams/${teamId}/members/${userDeleteId}/remove-user`, {
                method: 'PATCH',
            });
        } catch (error) {
            if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
                console.error('Logout error:', error);
            }
        }

        await mutate();
    }

    const sortedData = data?.sort((a, b) => {
        if (a.isLeader && !b.isLeader) return -1;
        if (!a.isLeader && b.isLeader) return 1;
        if (a.isVerified && !b.isVerified) return -1;
        if (!a.isVerified && b.isVerified) return 1;
        return 0;
    });

    return (
        <div className="flex flex-col gap-10">
            {
                isLoading && !error && (
                    <p className='text-center'>Ładowanie...</p>
                )
            }
            {
                error && (
                    <p className="text-error text-center">Wystąpił błąd podczas pobierania danych</p>
                )
            }
            {
                sortedData && sortedData.length !== 0 && (
                    <ol className="w-full flex flex-col gap-5 mx-auto">

                        {sortedData.map((member, index) => (
                            <li
                                key={index}
                                className="flex flex-col sm:flex-row gap-2 justify-between"
                            >
                                <div className="flex flex-col gap-1">
                                    {
                                        member.isVerified && member.status === MemberStatus.ACCEPTED && (
                                            <span className={`text-lg font-semibold ${member.isLeader ? "text-blue-500" : ""}`}>
                                                {member.firstName} {member.lastName}
                                            </span>
                                        )
                                    }
                                    {
                                        member.isVerified && member.status === MemberStatus.INVITED && (
                                            <span className="text-lg font-semibold text-orange-500">
                                                Zaproszony/a
                                            </span>

                                        )
                                    }
                                    {
                                        !member.isVerified && (
                                            <span className="text-lg font-semibold text-error">
                                                Niezweryfikowany/a
                                            </span>
                                        )
                                    }
                                    <span className="text-sm text-gray-500">
                                        {member.email}
                                    </span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    {
                                        captain?._id === userId && !member.isLeader && (
                                            <>
                                                {
                                                    member.isVerified && (
                                                        <OptionsButtons
                                                            title="Zmień na lidera"
                                                            src="/crown-black.svg"
                                                            className="bg-primary"
                                                            onClick={() => handleChangeLeader(member._id)}
                                                        />
                                                    )
                                                }
                                                <OptionsButtons
                                                    title="Usuń członka"
                                                    src="/leave.svg"
                                                    className="bg-error"
                                                    onClick={() => handleDeleteMember(member._id)}
                                                />
                                            </>
                                        )
                                    }
                                </div>
                            </li>
                        ))}
                    </ol>
                )
            }
            {
                !data || data?.length === 0 && (
                    <p className='text-center'>Brak członków drużyny</p>
                )
            }

            {captain?._id === userId && data && data.length < 3 && <LinkButton href={window.location.href + "/dodaj"} fullWidth>Dodaj członka</LinkButton>}
        </div>
    )
}

type OptionsButtonsProps = ComponentProps<"button"> & {
    title: string;
    src: string;
    onClick: () => void;
}

const OptionsButtons = ({ title, src, onClick, ...props }: OptionsButtonsProps) => {
    return (
        <button {...props} onClick={onClick} className={`flex flex-1 sm:flex-auto items-center justify-center w-12 sm:w-10 h-10 rounded-md cursor-pointer ${props.className}`} title={title}>
            <Image title={title} alt={title} src={src} width={24} height={24} className="w-7" />
        </button>
    )
}