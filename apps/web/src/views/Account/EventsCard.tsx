'use client';

import { NoDescriptionEvents } from '../Wydarzenia/NoDescriptionEvents';

const mockEvents: {
    current: {
        name: { text: string; url: string };
        thumbnail: string;
        color?: string;
    }[];
    past: {
        name: { text: string; url: string };
        thumbnail: string;
        color?: string;
    }[];
} = {
    current: [
        {
            name: {
                url: 'hackarena_2_5',
                text: 'HackArena 2.5',
            },
            thumbnail: '/photos/hackarena_2_5/thumbnail.jpg',
        },
    ],
    past: [
        {
            name: {
                url: 'hackarena_2_0',
                text: 'HackArena 2.0',
            },
            thumbnail: '/photos/hackarena_2/thumbnail.jpg',
        },
        {
            name: {
                url: 'hackarena_1_0',
                text: 'HackArena 1.0',
            },
            thumbnail: '/photos/hackarena_1/thumbnail.jpg',
        },
    ],
};

export function EventsCard() {
    return (
        <div className="flex flex-col page-width gap-5">
            <div className="relative w-full">
                <h2 className="title z-2 bg-background m-auto text-4xl sm:text-5xl sm:w-fit sm:px-10 sm:text-left">
                    Twoje wydarzenia
                </h2>
                <div className="absolute w-full h-[4px] bg-primary top-[50%] -translate-y-[50%] left-0 -z-1 hidden sm:block" />
            </div>
            <div className="sm:p-4">
                {[...mockEvents.current, ...mockEvents.past].length > 0 ? (
                    <div
                        className={`flex flex-col md:flex-row gap-5 md:gap-10 ${mockEvents.current.length > 1 ? '!flex-col !gap-10' : ''}`}
                    >
                        {mockEvents.current.length > 0 && (
                            <>
                                <NoDescriptionEvents
                                    title="Nadchodzące"
                                    events={mockEvents.current}
                                    compact
                                />
                                <div
                                    className={`w-[2px] bg-secondary-200 my-[70px] hidden md:block ${mockEvents.current.length > 1 ? '!hidden' : ''}`}
                                />
                            </>
                        )}
                        {mockEvents.past.length > 0 && (
                            <NoDescriptionEvents
                                grow
                                title="Zakończone"
                                events={mockEvents.past}
                                compact
                            />
                        )}
                    </div>
                ) : (
                    <p className="text-center">
                        Nie brałeś jeszcze udziału w żadnych wydarzeniach.
                    </p>
                )}
            </div>
        </div>
    );
}
