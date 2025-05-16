"use client";

import { useParams } from "next/navigation";
import { fetcherHack } from "../../../api/fetcher";
import useSWR from "swr";
import { GetTeamCredentialsResponse } from "../../../types/responses";
import { useState } from "react";

export function Credentials() {
    const { id } = useParams();

    const [showPassword, setShowPassword] = useState(false);

    const { data, error, isLoading } = useSWR<GetTeamCredentialsResponse, Error>(
        `/teams/${id}/credentials`,
        (url: string) =>
            fetcherHack<null, GetTeamCredentialsResponse>(url, {
                method: 'GET',
            }),
    );

    if (error) {
        return (
            <p className="w-full text-center text-error">Wystąpił problem podczas pobierania danych logowania</p>

        )
    }

    return (
        <div className="flex flex-col items-center gap-5">
            <p className="text-primary text-lg font-bold">
                adres: game.hackarena.pl
            </p>
            <p className="text-primary text-lg font-bold">
                login: {isLoading ? 'Ładowanie...' : data?.login}
            </p>
            <p className="text-primary text-lg font-bold">
                hasło: {isLoading ? 'Ładowanie...' : showPassword ? data?.password : '********'}
                <button onClick={() => setShowPassword(!showPassword)} className="text-text text-sm ml-2 cursor-pointer">
                    ({showPassword ? 'ukryj' : 'pokaż'})
                </button>
            </p>
        </div>
    );
}