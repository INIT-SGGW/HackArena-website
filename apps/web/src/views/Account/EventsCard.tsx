'use client';

import { CrossedTitle } from '@repo/ui';
import { NoDescriptionEvents } from '../Wydarzenia/NoDescriptionEvents';
import { useGetUserId } from '../../utils/useGetUserId';
import useSWR from 'swr';
import { GetEventsResponse } from '../../types/responses';
import { fetcherHack } from '../../api/fetcher';

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
    const userId = useGetUserId();

    const { data, error, isLoading, mutate } = useSWR<GetEventsResponse, Error>(
        `/users/${userId}/events`,
        (url: string) => fetcherHack<null, GetEventsResponse>(url, {
            method: "GET",
        }))


    return (
        <div className="flex flex-col page-width gap-5">
            <CrossedTitle title="Twoje wydarzenia" />
            <div className="sm:p-4">
                {[...mockEvents.current, ...mockEvents.past].length > 0 ? (
                    <div
                        className={`flex flex-col md:flex-row gap-5 md:gap-10 ${data && data?.incoming.length > 1 ? '!flex-col !gap-10' : ''}`}
                    >
                        {
                            isLoading && !error && (
                                <p className='w-full text-center'>Ładowanie...</p>
                            )
                        }
                        {
                            error && (
                                <p className="w-full text-error text-center">Wystąpił błąd podczas ładowania wydarzeń</p>
                            )
                        }
                        {
                            data?.incoming && data.incoming.length !== 0 && (
                                <NoDescriptionEvents
                                    title="Nadchodzące"
                                    events={data.incoming}
                                    compact
                                />
                            )
                        }
                        {
                            data?.ended && data.ended.length !== 0 && (
                                <>
                                    <div
                                        className={`w-[2px] bg-secondary-200 my-[70px] hidden md:block ${mockEvents.current.length > 1 ? '!hidden' : ''}`}
                                    />
                                    <NoDescriptionEvents
                                        grow
                                        title="Zakończone"
                                        events={data.ended}
                                        compact
                                    />
                                </>)
                        }
                        {
                            !data || (data?.ended.length === 0 && data?.incoming.length === 0) && (
                                <p className='w-full text-center'>Nie brałeś jeszcze udziału w żadnym wydarzeniu</p>
                            )
                        }
                        {/* {mockEvents.current.length > 0 && (
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
                        )} */}
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
