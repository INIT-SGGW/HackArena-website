'use client';

import useSWR from 'swr';
import { fetcherHack } from '../../../api/fetcher';
import { MarkdownRenderer } from './markdownRenderer';
import { useState } from 'react';
import { Button } from '@repo/ui';

type Props = {
    eventId: string;
};

type GetTaskResponse = {
    _id: string;
    taskName: string;
    taskContent: string;
    taskRules: string;
};

export function Content({ eventId }: Props): React.JSX.Element {
    const [isTaskVisible, setIsTaskVisible] = useState<boolean>(false);
    const { data, error, isLoading } = useSWR(
        `/events/${eventId}/tasks`,
        (url: string) =>
            fetcherHack<null, GetTaskResponse>(url, {
                method: 'GET',
            }),
    );

    return (
        <div className="p-4 pt-0 w-full h-min lg:max-w-[70%]">
            {isLoading && !error ? <div>Ładowanie...</div> : null}
            {error ? (
                <div className="text-center text-xl">
                    Wystąpił problem podczas pobierania treści zadania.
                </div>
            ) : null}
            {data && !error ? (
                <div className="flex flex-col gap-4">
                    <h1 className="subtitle">
                        Zadanie Konkursowe: Optymalna Trasa Dostaw SGGW
                    </h1>
                    <div className="flex flex-row gap-4 justify-center">
                        <Button
                            fullWidth
                            secondary={isTaskVisible}
                            onClick={() => setIsTaskVisible(false)}
                        >
                            Zasady
                        </Button>
                        <Button
                            fullWidth
                            secondary={!isTaskVisible}
                            onClick={() => setIsTaskVisible(true)}
                        >
                            Zadanie
                        </Button>
                    </div>
                    <div className="prose prose-invert max-w-none">
                        {isTaskVisible ? (
                            <MarkdownRenderer markdown={data.taskContent} />
                        ) : (
                            <MarkdownRenderer markdown={data.taskRules} />
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
