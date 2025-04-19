"use client";

import { useEffect, useState } from "react";

export function useGetUserId() {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUserId = window.localStorage.getItem("userId");
            setUserId(storedUserId);

            if (!storedUserId) {
                window.location.href = "/login";
            }
        }
    }, []);

    return userId;
}