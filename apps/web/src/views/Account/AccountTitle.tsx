'use client';

import { Button } from '@repo/ui';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TeamInvite } from '../Notifications/TeamInvite';
import useSWR from 'swr';
import { fetcherAuth } from '../../api/fetcher';
import { Notification, TeamInviteNotification } from '../../types/dtos';
import {
    GetNotificationsResponse,
    GetUserByIdResponse,
} from '../../types/responses';
import { useGetUserId } from '../../utils/useGetUserId';

export function AccountTitle() {
    const userId = useGetUserId();
    const { data, isLoading, error } = useSWR<GetUserByIdResponse, Error>(
        `/register/user/id/${userId}`,
        (url: string) =>
            fetcherAuth<null, GetUserByIdResponse>(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                authRedirect: true,
            }),
    );

    return (
        <div className="flex flex-row justify-between items-center">
            <h1 className="title text-left w-full max-w-[80%] text-ellipsis overflow-hidden">
                {!isLoading && !error && data
                    ? `Hej, ${data.firstName}`
                    : 'Konto'}
            </h1>
            <Notifications />
        </div>
    );
}

function Notifications() {
    const [showNotifications, setShowNotifications] = useState(false);
    const userId =
        typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
    const { data, error, isLoading, mutate } = useSWR<
        GetNotificationsResponse<unknown>,
        Error
    >(`/register/user/${userId}/notifications?service=ha`, (url: string) =>
        fetcherAuth<null, GetNotificationsResponse<unknown>>(url, {
            method: 'GET',
        }),
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                !target.closest('#notifications') &&
                !target.closest('#notifications-icon')
            ) {
                setShowNotifications(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <div
                className={`${!data || data?.notifications.length === 0 ? 'hidden' : 'block'} pointer-events-none`}
            >
                <div
                    className={`absolute top-0 right-0 w-[15px] h-[15px] bg-red-500 rounded-full z-2 animate-ping`}
                />
                <div
                    className={`absolute top-0 right-0 w-[15px] h-[15px] bg-red-500 rounded-full z-3`}
                />
            </div>

            <Image
                id="notifications-icon"
                title="Powiadomienia"
                width={45}
                height={45}
                onClick={() => setShowNotifications(!showNotifications)}
                className={`cursor-pointer`}
                src="/notification.svg"
                alt="Notifications"
            />
            {showNotifications && (
                <div
                    className="absolute top-[calc(100%+10px)] right-0  w-[calc(100vw-var(--spacing)*4*2)] max-w-[500px] bg-primary p-[3px] both-corners-clip z-20"
                    style={{ '--clip-size': '30px' } as React.CSSProperties}
                    id="notifications"
                >
                    <div
                        className="flex flex-col gap-5 bg-background both-corners-clip p-4"
                        style={{ '--clip-size': '30px' } as React.CSSProperties}
                    >
                        <h2 className="subsubtitle">Powiadomienia</h2>
                        <ul className="flex flex-col gap-6 max-h-[50vh] overflow-y-auto">
                            {isLoading && !error && <li>Ładowanie...</li>}
                            {error && (
                                <li className="text-error">{error.message}</li>
                            )}
                            {data?.notifications.map((notification) => {
                                switch (notification.type) {
                                    case 'ha_team_invite':
                                        return (
                                            <TeamInvite
                                                key={notification._id}
                                                notification={
                                                    notification as Notification<TeamInviteNotification>
                                                }
                                                mutate={mutate}
                                            />
                                        );
                                    default:
                                        return null;
                                }
                            })}
                            {data?.notifications.length === 0 && (
                                <li className="">Brak nowych powiadomień</li>
                            )}
                        </ul>
                        <Button
                            fullWidth
                            className="mt-3"
                            onClick={() => setShowNotifications(false)}
                        >
                            Zamknij
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
