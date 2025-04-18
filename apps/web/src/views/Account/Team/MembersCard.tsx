"use client";

import { useParams } from "next/navigation";
import { getUserId } from "../../../utils/getUserId";
import { LinkButton } from "@repo/ui";

const mockData = [
    {
        id: "680203caf6a04ff8c8d34b9f",
        name: 'Jan Kowalski',
        email: 'jan.kowalski@sadf.asdf',
        verified: true,
        captain: true,
    },
    {
        name: 'Karolina Nowak',
        email: 'karolina.nowak@asdf.asdf',
        verified: true,
    },
    {
        email: 'karolina.nowak@asdf.asdf',
        verified: false,
    },
]

export function MembersCard() {
    const { _id } = useParams();

    const userId = getUserId();
    const captain = mockData.find((member) => member.id === userId);

    return (
        <div className="flex flex-col gap-10">
            <ol className="w-full mx-auto">
                {mockData.map((member, index) => (
                    <li
                        key={index}
                        className="flex flex-col gap-2 mb-5 last:mb-0"
                    >
                        <div className="flex gap-5 justify-between">
                            <div className="flex flex-col gap-1">
                                <span className={`text-lg font-semibold ${member.captain ? "text-blue-500" : ""}`}>
                                    {member.name}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {member.email}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                {member.verified ? (
                                    <span className="text-green-500">
                                        Zweryfikowany
                                    </span>
                                ) : (
                                    <span className="text-error">
                                        Niezweryfikowany
                                    </span>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
            {captain?.id === userId && <LinkButton href={window.location.href + "/dodaj"} fullWidth>Dodaj członka</LinkButton>}
        </div>
    )
}