import { AnswerSection } from '../../../../../../../views/Account/Task/AnswerSection';
import { Content } from '../../../../../../../views/Account/Task/Content';
import type { Metadata } from 'next/types';
import { use } from 'react';
import { Page } from '@repo/ui';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ id: string; taskId: string; eventId: string }>;
};

export const metadata: Metadata = {
    title: `Zadanie | ICC`,
    description: '',
};

export default function TaskPage({ params }: Props): React.JSX.Element {
    notFound();
    const { id, taskId, eventId } = use(params);

    return (
        <Page>
            <div className="w-full m-auto max-w-[1150px] md:py-8 text-white gap-8">
                <div className="flex flex-col items-center justify-center gap-4 w-full">
                    <div className="flex flex-col lg:!flex-row gap-10 w-full items-center lg:!items-start">
                        <Content eventId={eventId} />
                        <div className="sticky top-30 lg:min-w-[350px] max-w-[400px] w-full h-full">
                            <AnswerSection id={id} taskId={taskId} />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}
