"use client";

import { NoDescriptionEvents } from "../Wydarzenia/NoDescriptionEvents";

const mockEvents = {
    current: [
        {
            name: {
                url: 'hackarena_2_5',
                text: 'HackArena 2.5',
            },
            thumbnail: "/photos/hackarena_2_5/thumbnail.jpg",
        }
    ],
    past: [
        {
            name: {
                url: 'hackarena_2_0',
                text: 'HackArena 2.0',
            },
            thumbnail: "/photos/hackarena_2/thumbnail.jpg",
        },
        {
            name: {
                url: 'hackarena_1_0',
                text: 'HackArena 1.0',
            },
            thumbnail: "/photos/hackarena_1/thumbnail.jpg",
        }
    ]
}

export function EventsCard() {
    return (
        <div className="flex flex-col page-width">
            <h2 className="text-3xl text-primary russo-one text-bold">Twoje wydarzenia</h2>
            <div className={`flex flex-col pl-4 md:flex-row gap-10 md:gap-20 ${mockEvents.current.length > 1 ? "!flex-col !gap-10" : ""}`}>
                {mockEvents.current.length > 0 && (
                    <>
                        <NoDescriptionEvents title="Nadchodzące" events={mockEvents.current} />
                        <div className={`w-[2px] bg-secondary-200 my-[70px] hidden md:block ${mockEvents.current.length > 1 ? "!hidden" : ""}`} />
                    </>
                )}
                {mockEvents.past.length > 0 && <NoDescriptionEvents grow title="Zakończone" events={mockEvents.past} />}
            </div>
        </div>
    )
}