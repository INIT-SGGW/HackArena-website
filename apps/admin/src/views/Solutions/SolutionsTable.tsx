'use client';

import { fetcherHack } from '../../api/fetcher';
import useSWR from 'swr';
import { GetTeamFileInfoResponse } from '../../types/responses';
import { Button } from '@repo/ui';

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

export function SolutionsTable() {
    const {
        data,
        error: fileInfoError,
        isLoading,
    } = useSWR<GetTeamFileInfoResponse[], Error>(`/teams/bots`, (url: string) =>
        fetcherHack<null, GetTeamFileInfoResponse[]>(url, {
            method: 'GET',
        }),
    );

    const downloadFile = async (teamName: string, teamId: string) => {
        const blob = await fetcherHack<null, Blob>(
            `/teams/${teamId}/bot/file`,
            {
                method: 'GET',
                responseType: 'blob',
            },
        );

        if (!blob) {
            return;
        }

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${teamName}.zip`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="flex flex-col gap-5 w-full items-center">
            <h4 className="title">Przesłane rozwiązania</h4>
            {fileInfoError && (
                <p className="text-xl font-bold">
                    Nie przesłano jeszcze żadnego rozwiązania
                </p>
            )}
            {!fileInfoError && !data && isLoading && (
                <p className="text-primary text-xl font-bold">Ładowanie...</p>
            )}
            {!fileInfoError && data && (
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Nazwa zespołu</th>
                            <th className="text-left">Data przesłania</th>
                            <th className="text-left">Rozmiar pliku</th>
                            <th className="text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((file) => (
                            <tr key={file.teamId}>
                                <td>{file.teamName}</td>
                                <td>
                                    {toDateString(new Date(file.dateCreated))}
                                </td>
                                <td>
                                    {(file.fileSize / 1024 / 1024).toFixed(2)}{' '}
                                    MB
                                </td>
                                <td>
                                    <Button
                                        type="button"
                                        className="py-0"
                                        onClick={() =>
                                            downloadFile(
                                                file.teamName,
                                                file.teamId,
                                            )
                                        }
                                    >
                                        Pobierz
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
