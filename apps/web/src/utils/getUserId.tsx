"use client";

export function getUserId() {
    const userId = window.localStorage.getItem("userId")

    if (!userId) {
        window.location.href = "/login"
    }

    return userId;
}