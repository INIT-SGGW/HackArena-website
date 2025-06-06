'use client';

import { Button } from '@repo/ui';
import { fetcherAuth } from '../../api/fetcher';

export function AccountCard() {
    const logout = async () => {
        try {
            await fetcherAuth<null, null>('/register/logout', {
                method: 'POST',
            });

            localStorage.removeItem('userId');
            window.location.href = '/login';
        } catch (error) {
            if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
                console.error('Logout error:', error);
            }
        }
    };

    return (
        <div className="w-full">
            {/* <LinkButton
                href="/konto/ustawienia"
                secondary
                className="mb-4"
                fullWidth
            >
                Ustawienia konta
            </LinkButton> */}
            <Button onClick={logout} fullWidth>
                Wyloguj się
            </Button>
        </div>
    );
}
