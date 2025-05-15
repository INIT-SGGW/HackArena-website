'use client';

import { CrossedTitle, InfoBox, Page } from '@repo/ui';
import { NoDescriptionEvents } from '../../../../views/Wydarzenia/NoDescriptionEvents';
import { MembersCard } from '../../../../views/Account/Team/MembersCard';
import { LeaveTeamCard } from '../../../../views/Account/Team/LeaveTeamCard';
import { useGetUserId } from '../../../../utils/useGetUserId';
import { useParams } from 'next/navigation';
import { fetcherHack } from '../../../../api/fetcher';
import useSWR from 'swr';
import {
    GetEventsResponse,
    GetSingleTeamResponse,
} from '../../../../types/responses';

export default function TeamPage() {
    const userId = useGetUserId();
    const teamId = useParams().id;

    const { data, error, isLoading, mutate } = useSWR<
        GetSingleTeamResponse,
        Error
    >(`/users/${userId}/teams/${teamId}`, (url: string) =>
        fetcherHack<null, GetSingleTeamResponse>(url, {
            method: 'GET',
        }),
    );

    const { data: eventsData } = useSWR<GetEventsResponse, Error>(
        `/users/${userId}/events`,
        (url: string) =>
            fetcherHack<null, GetEventsResponse>(url, {
                method: 'GET',
            }),
    );

    const taskEvent = eventsData?.incoming.find((event) => event.isTaskActive);
    const eventLive = eventsData?.incoming.find((event) => event.isLive);

    return (
        <Page>
            <div className="flex flex-col gap-15 page-width mx-auto">
                <h1 className="title text-left">{data?.name || 'Drużyna'}</h1>
                {taskEvent && (
                    <InfoBox
                        title="Zadanie kwalifikacyjne"
                        text="Zadanie kwalifikacyjne jest dostępne i będzie otwarte do 11.05.2025 23:59. Ilość prób nie jest ograniczona, ale pamiętajcie, macie tylko jedną szansę na godzinę, potem dostaniecie cooldown. Więcej informacji po wejściu w zadanie."
                        buttonText="Rozpocznij"
                        href={`/konto/druzyna/${teamId}/zadanie/${taskEvent.taskId}/${taskEvent._id}`}
                    />)}
                {eventLive && (
                    <InfoBox
                        title="Wydarzenie live"
                        text="HackArena 2.5 jest live! Kliknij poniżej, aby przejść do wydarzenia."
                        buttonText="Otwórz"
                        href={`/konto/druzyna/${teamId}/wydarzenie/${eventLive._id}`}
                    />
                )}
                <div className="flex flex-col gap-10">
                    <CrossedTitle title="Członkowie drużyny" />
                    <MembersCard
                        data={data?.members}
                        error={error}
                        isLoading={isLoading}
                        mutate={mutate}
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <CrossedTitle title="Wydarzenia" />

                    <div className="py-5">
                        {isLoading && !error && (
                            <p className="text-center">Ładowanie...</p>
                        )}
                        {error && (
                            <p className="text-error text-center">
                                Wystąpił błąd podczas pobierania danych
                            </p>
                        )}
                        {data && data.events.length !== 0 && (
                            <div
                                className={`flex flex-col md:flex-row gap-5 md:gap-10 ${data.events.length > 1 ? '!flex-col !gap-10' : ''}`}
                            >
                                {data.events.length > 0 && (
                                    <NoDescriptionEvents
                                        events={data.events}
                                        compact
                                    />
                                )}
                            </div>
                        )}
                        {!data ||
                            (data?.events.length === 0 && (
                                <p className="text-center">
                                    Nie brałeś jeszcze udziału w żadnych
                                    wydarzeniach.
                                </p>
                            ))}
                    </div>
                </div>
                <LeaveTeamCard />
            </div>
        </Page>
    );
}
