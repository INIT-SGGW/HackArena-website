'use client';

import { Button } from '@repo/ui';
import { useState } from 'react';
import { fetcherHack } from '../../../api/fetcher';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { GetTeamFileInfoResponse } from '../../../types/responses';

const toDateString = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    return new Date(date).toLocaleString('pl-PL', options);
};

export function SendSolution() {
    const { id } = useParams();

    const {
        data,
        error: fileInfoError,
        isLoading,
        mutate,
    } = useSWR<GetTeamFileInfoResponse, Error>(
        `/teams/${id}/bot/info`,
        (url: string) =>
            fetcherHack<null, GetTeamFileInfoResponse>(url, {
                method: 'GET',
            }),
    );

    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>('Nie wybrano pliku');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const file = formData.get('file') as File;

        if (!file || file.size === 0) {
            setError('Nie wybrano pliku');
            return;
        }

        try {
            await fetcherHack<FormData, null>(`/teams/${id}/bot`, {
                method: 'POST',
                body: formData,
            });

            setMessage('Plik został przesłany pomyślnie');
            setError(null);
            form.reset();

            await mutate();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Wystąpił nieznany błąd');
            }
            return;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileName = file.name;
            const fileSize = file.size;
            const fileExtension = fileName.split('.').pop();

            if (fileSize > 10 * 1024 * 1024) {
                // 10 MB limit
                setError('Plik jest za duży. Maksymalny rozmiar to 10 MB.');
                return;
            }

            if (fileExtension !== 'zip') {
                e.target.files = null;
                setMessage('Nie wybrano pliku');
                setError('Nieprawidłowy format pliku. Oczekiwano pliku .zip');
                return;
            }

            setMessage(fileName);
            setError(null);
        } else {
            setMessage('Nie wybrano pliku');
            setError(null);
        }
    };

    return (
        <>
            <div>
                <h4>Ostatnie przesłane rozwiązanie</h4>
                {fileInfoError && (
                    <p className="text-primary text-xl font-bold">
                        Nie przesłano jeszcze żadnego rozwiązania
                    </p>
                )}
                {!fileInfoError && !data && isLoading && (
                    <p className="text-primary text-xl font-bold">
                        Ładowanie...
                    </p>
                )}
                {!fileInfoError && data && (
                    <p className="text-primary text-xl font-bold">
                        {toDateString(new Date(data.dateCreated))} -{' '}
                        {(data.fileSize / 1024 / 1024).toFixed(2)} MB
                    </p>
                )}
            </div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="file_input" className="flex flex-col gap-1">
                        <div
                            className={`flex flex-row gap-4 items-center bg-primary font-bold text-start p-4 w-full both-corners-clip cursor-pointer`}
                        >
                            <span className="text-center text-primary bg-background px-10 py-2 both-corners-clip">
                                Wybierz plik
                            </span>
                            <span className="text-background text-bold text-xl">
                                {message}
                            </span>
                        </div>
                    </label>
                    {error && (
                        <span className="text-sm text-error text-center">
                            {error}
                        </span>
                    )}
                </div>
                <input
                    onChange={handleChange}
                    id="file_input"
                    type="file"
                    accept=".zip"
                    name="file"
                    className={`hidden`}
                ></input>
                <Button type="submit" fullWidth>
                    Prześlij
                </Button>
            </form>
        </>
    );
}
