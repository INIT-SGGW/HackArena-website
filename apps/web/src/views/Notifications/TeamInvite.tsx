import { Button } from '@repo/ui';
import { Notification, TeamInviteNotification } from '../../types/dtos';
import { fetcherAuth, fetcherHack } from '../../api/fetcher';
import { useGetUserId } from '../../utils/useGetUserId';
import { useState } from 'react';
import { ChangeNotificationStatusRequest } from '../../types/requests';
import {
    ChangeNotificationStatusResponse,
    GetNotificationsResponse,
} from '../../types/responses';

type Props = {
    notification: Notification<TeamInviteNotification>;
    mutate: () => Promise<void | GetNotificationsResponse<unknown> | undefined>;
};

export function TeamInvite({ notification, mutate }: Props) {
    const userId = useGetUserId();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleJoin = async () => {
        try {
            setLoading(true);
            setError(null);
            await fetcherHack<null, null>(
                `/teams/${notification.args.teamId}/members/${userId}/accept-invite`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    authRedirect: true,
                },
            );

            await fetcherAuth<
                ChangeNotificationStatusRequest,
                ChangeNotificationStatusResponse
            >(
                `/register/user/${userId}/notifications/${notification._id}/status`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: {
                        status: 'read',
                    },
                    authRedirect: true,
                },
            );

            await mutate();
        } catch (e: unknown) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError('Wystąpił błąd podczas dołączania do zespołu');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDecline = async () => {
        try {
            setLoading(true);
            setError(null);
            await fetcherHack<null, null>(
                `/teams/${notification.args.teamId}/members/${userId}/decline-invite`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    authRedirect: true,
                },
            );

            await fetcherAuth<
                ChangeNotificationStatusRequest,
                ChangeNotificationStatusResponse
            >(
                `/register/user/${userId}/notifications/${notification._id}/status`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: {
                        status: 'read',
                    },
                    authRedirect: true,
                },
            );

            await mutate();
        } catch (e: unknown) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError('Wystąpił błąd podczas dołączania do zespołu');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <li className="flex flex-col gap-3 last:mb-0">
            <div className="flex flex-col gap-1">
                <span className="text-md">Nowe zaproszenie</span>
                <span className="text-sm text-secondary-100">
                    Dostałeś zaproszenie do zespołu {notification.args.teamName}
                    . Dołączenie jest równoznaczna z akcektacją regulaminu
                    wydarzenia
                </span>
            </div>
            <div className="flex flex-col w-full gap-1">
                <span className="text-sm text-error">{error}</span>
                <div className="flex  w-full gap-2">
                    <Button
                        fullWidth
                        disabled={loading}
                        onClick={() => handleJoin()}
                    >
                        Dołącz
                    </Button>
                    <Button
                        secondary
                        disabled={loading}
                        fullWidth
                        onClick={() => handleDecline()}
                    >
                        Odrzuć
                    </Button>
                </div>
            </div>
        </li>
    );
}
