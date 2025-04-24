'use client';

export function useGetUserId() {
    if (typeof window !== 'undefined') {
        const userId = localStorage.getItem('userId');

        if (!userId) {
            window.location.href = '/login';
            return null;
        }

        return userId;
    }

    return null;
}
