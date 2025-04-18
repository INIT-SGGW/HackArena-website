"use client";

import { Button } from "@repo/ui";
import Image from "next/image"
import { useState } from "react";

export function AccountTitle() {
    return (
        <div className="flex flex-row justify-between items-center">
            <h1 className="title text-left w-full max-w-[80%] text-ellipsis overflow-hidden">Hej, Jan!</h1>
            <Notifications />
        </div>
    )
}

const notifications = [
    {
        service: "ha",
        type: "ha_25_event",
        status: "",
        args: {
            team_name: "Zespół 1",
            team_id: "123456",
        }
    },
    {
        service: "ha",
        type: "ha_25_team",
        status: "",
        args: {
            team_name: "Zespół 1",
            team_id: "123456",
        }
    },
    {
        service: "ha",
        type: "ha_25_event",
        status: "",
        args: {
            team_name: "Zespół 1",
            team_id: "123456",
        }
    }
]

function Notifications() {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <div className="relative">
            <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-red-500 rounded-full" />
            <Image title="Powiadomienia" width={45} height={45} onClick={() => setShowNotifications(!showNotifications)} className="cursor-pointer" src="/notification.svg" alt="Notifications" />
            {
                showNotifications && (
                    <div
                        className="absolute top-[calc(100%+10px)] right-0  w-[calc(100vw-var(--spacing)*4*2)] max-w-[500px] bg-primary p-[3px] both-corners-clip z-20"
                        style={{ "--clip-size": "30px" } as React.CSSProperties}
                    >
                        <div
                            className="flex flex-col gap-5 bg-background both-corners-clip p-4"
                            style={{ "--clip-size": "30px" } as React.CSSProperties}
                        >
                            <h2 className="subsubtitle">Powiadomienia</h2>
                            <ul className="flex flex-col gap-6 max-h-[50vh] overflow-y-auto">
                                {
                                    notifications.map((notification, index) => {
                                        switch (notification.type) {
                                            case "ha_25_event": {
                                                const handleJoin = () => {
                                                    console.log("Dołącz do wydarzenia", notification.args.team_id);
                                                }

                                                const handleDecline = () => {
                                                    console.log("Odrzuć zaproszenie", notification.args.team_id);
                                                }

                                                return (
                                                    <li key={index} className="flex flex-col gap-3 last:mb-0">
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-md">Nowe zaproszenie</span>
                                                            <span className="text-sm text-secondary-100">Dostałeś zaproszenie do zespołu {notification.args.team_name}. Dołączenie jest równoznaczna z akcektacją regulaminu wydarzenia</span>
                                                        </div>

                                                        <div className="flex gap-2">
                                                            <Button fullWidth onClick={() => handleJoin()}>Dołącz</Button>
                                                            <Button secondary fullWidth onClick={() => handleDecline()}>Odrzuć</Button>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        }
                                    })}
                                {
                                    notifications.length === 0 && (
                                        <li className="">Brak nowych powiadomień</li>
                                    )
                                }
                            </ul>
                            <Button fullWidth className="mt-3" onClick={() => setShowNotifications(false)}>Zamknij</Button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}