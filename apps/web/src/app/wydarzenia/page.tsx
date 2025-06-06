import Image from 'next/image';
import { ArrowLink, Page } from '@repo/ui';
import { EventData, mockData } from '../../utils/mockData';
import Link from 'next/link';
import { NoDescriptionEvents } from '../../views/Wydarzenia/NoDescriptionEvents';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wydarzenia | HackArena',
    description: `Zobacz listę nadchodzących oraz zakończonych hackathonów Hackarena. Przeglądaj wydarzenia i nie przegap żadnego z nich!`,
};

type HighlightedEventProps = {
    event: EventData;
};

export default function Events() {
    const sortedEvents = mockData.wydarzenia.sort(
        (a, b) => b.timeDate.start.getTime() - a.timeDate.start.getTime(),
    );
    const incomingEvents = sortedEvents.filter(
        (event) => event.timeDate.start >= new Date(),
    );
    let pastEvents = sortedEvents.filter(
        (event) => event.timeDate.start < new Date(),
    );
    const sortedIncomingEvents = incomingEvents.sort(
        (a, b) => a.timeDate.start.getTime() - b.timeDate.start.getTime(),
    );
    let highlightedEvent = sortedIncomingEvents[0];
    const restIncomingEvents = sortedIncomingEvents.slice(1);

    if (!highlightedEvent) {
        highlightedEvent = pastEvents[0];
        pastEvents = pastEvents.slice(1);
    }

    return (
        <Page
            className={'page-width flex flex-col gap-12 !px-0 sm:!px-4 mx-auto'}
        >
            <h1 className={'title text-4xl sm:text-5xl pl-8'}>Wydarzenia</h1>
            <div className={'flex flex-col md:gap-8 gap-10'}>
                {highlightedEvent && (
                    <HighlightedEvent event={highlightedEvent} />
                )}
                <div
                    className={`flex flex-col md:flex-row px-0 sm:px-4 p-4 md:p-10 gap-10 md:gap-20 ${restIncomingEvents.length > 1 ? '!flex-col !gap-10' : ''}`}
                >
                    {restIncomingEvents.length > 0 && (
                        <>
                            <NoDescriptionEvents
                                title="Nadchodzące"
                                events={restIncomingEvents}
                            />
                            <div
                                className={`w-[2px] bg-secondary-200 my-[70px] hidden md:block ${restIncomingEvents.length > 1 ? '!hidden' : ''}`}
                            />
                        </>
                    )}
                    {pastEvents.length > 0 && (
                        <NoDescriptionEvents
                            grow
                            title="Zakończone"
                            events={pastEvents}
                        />
                    )}
                </div>
            </div>
        </Page>
    );
}

const HighlightedEvent = ({ event }: HighlightedEventProps) => {
    const now = new Date();
    let title;
    if (event.timeDate.start > now) {
        title = 'Już wkrótce!';
    } else if (event.timeDate.end > now) {
        title = 'W trakcie!';
    } else {
        title = 'Ostatnia HackArena!';
    }

    return (
        <div className="px-4 sm:px-0">
            <div
                className={
                    'flex flex-col gap-4 text-background both-corners-clip bg-primary w-full p-6'
                }
                style={{ '--clip-size': '25px' } as React.CSSProperties}
            >
                <div className="flex items-center justify-between">
                    <h2 className="subtitle text-background">{title}</h2>
                    <Image
                        src={'bolt.svg'}
                        alt={'bolt'}
                        width={22}
                        height={22}
                    />
                </div>
                <div
                    key={event.name.text}
                    className="grid grid-rows-auto sm:grid-cols-[.5fr_1fr] gap-8"
                >
                    <Link
                        href={`/wydarzenia/${event.name.url}`}
                        className="bg-background both-corners-clip p-2 relative aspect-[1.63]"
                        style={{ '--clip-size': '15px' } as React.CSSProperties}
                    >
                        <Image
                            src={event.thumbnail}
                            width={500}
                            height={500}
                            loading="lazy"
                            alt={event.name.text}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={
                                { '--clip-size': '33px' } as React.CSSProperties
                            }
                            className="w-full h-full object-cover both-corners-clip"
                        />
                        <div className="absolute inset-0 flex flex-col w-full justify-center items-center bg-background mix-blend-color" />
                    </Link>
                    <div className="flex flex-col justify-between gap-4 md:gap-0">
                        <h4 className="subsubtitle jet-brains text-background font-bold">
                            <Link href={`/wydarzenia/${event.name.url}`}>
                                {event.name.text}
                            </Link>
                        </h4>
                        <p className="text-xl line-clamp-3">
                            {event.description}
                        </p>
                        <ArrowLink
                            text={'Dowiedz się więcej'}
                            href={`/wydarzenia/${event.name.url}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
