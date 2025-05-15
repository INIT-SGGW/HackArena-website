'use client';

import { InfoBox } from '@repo/ui';
import useSWR from 'swr';
import { GetEventsResponse } from '../../types/responses';
import { fetcherHack } from '../../api/fetcher';
import { useGetUserId } from '../../utils/useGetUserId';

export function EventLiveCard() {
    const userId = useGetUserId();

    const { data } = useSWR<GetEventsResponse, Error>(
        `/users/${userId}/events`,
        (url: string) =>
            fetcherHack<null, GetEventsResponse>(url, {
                method: 'GET',
            }),
    );

    const liveEvent = data?.incoming.find((event) => event.isLive);
    if (liveEvent) {
        return (
            <InfoBox
                title={'Wydarzenie live'}
                text={`${liveEvent.name.text} jest live! Wejdź na stronę swojego zespołu po więcej informacji.`}
            />
        );
    }

    const taskEvent = data?.incoming.find((event) => event.isTaskActive);
    if (taskEvent) {
        return (
            <InfoBox
                title={'Zadanie otwarte'}
                text={`Zadanie kwalifikacyjne do wydarzenia ${taskEvent.name.text} jest otwarte! Wejdź na stronę swojego zespołu po więcej informacji.`}
            />
        );
    }

    return null;
}
