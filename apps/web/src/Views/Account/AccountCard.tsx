"use client";

import { Button } from "@repo/ui";
import { fetcherAuth } from "../../api/fetcher";

export function AccountCard() {
    const logout = async () => {
        try {
            await fetcherAuth('/register/logout', {
                method: 'POST',
            });

            localStorage.removeItem('userId');
            window.location.href = '/login';
        } catch (error) {
            if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
                console.error('Logout error:', error);
            }
        }
    }

    return (
        <Button onClick={logout} >Wyloguj się</Button>
    )
}