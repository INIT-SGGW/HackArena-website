"use client";

import { useParams } from "next/navigation";
import { useGetUserId } from "../../../utils/useGetUserId";
import { LinkButton } from "@repo/ui";
import Image from "next/image";
import { ComponentProps } from "react";

const mockData = [
    {
        id: "6802ba98bbb26f540ad4121b",
        name: 'Jan Kowalski',
        email: 'jan.kowalski@sadf.asdf',
        verified: true,
        captain: true,
    },
    {
        id: "680203caf6a04ff8c8d34b9",

        name: 'Karolina Nowak',
        email: 'karolina.nowak@asdf.asdf',
        verified: true,
    },
    {
        id: "680203caf6a04ff8c8d34b",

        email: 'karolina.nowak@asdf.asdf',
        verified: false,
    },
]

export function MembersCard() {
    const { _id } = useParams();

    const userId = useGetUserId();
    const captain = mockData.find((member) => member.id === userId);

    const handleChangeLeader = (id: string) => {
        console.log(`Change leader to ${id}`);
    }

    const handleDeleteMember = (id: string) => {
        console.log(`Delete member with id ${id}`);
    }

    return (
        <div className="flex flex-col gap-10">
            <ol className="w-full flex flex-col gap-5 mx-auto">
                {mockData.map((member, index) => (
                    <li
                        key={index}
                        className="flex flex-col sm:flex-row gap-2 justify-between"
                    >
                        <div className="flex flex-col gap-1">
                            {
                                member.verified ? (
                                    <span className={`text-lg font-semibold ${member.captain ? "text-blue-500" : ""}`}>
                                        {member.name}
                                    </span>
                                ) : (
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
                                captain?.id === userId && !member.captain && (
                                    <>
                                        {
                                            member.verified && (
                                                <OptionsButtons
                                                    title="Zmień na lidera"
                                                    src="/crown-black.svg"
                                                    className="bg-primary"
                                                    onClick={() => handleChangeLeader(member.id)}
                                                />
                                            )
                                        }
                                        <OptionsButtons
                                            title="Usuń członka"
                                            src="/leave.svg"
                                            className="bg-error"
                                            onClick={() => handleDeleteMember(member.id)}
                                        />
                                    </>
                                )
                            }
                        </div>
                    </li>
                ))}
            </ol>
            {captain?.id === userId && <LinkButton href={window.location.href + "/dodaj"} fullWidth>Dodaj członka</LinkButton>}
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