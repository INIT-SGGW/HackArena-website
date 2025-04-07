"use client"
import Image from "next/image";
import { ArrowLink, Page } from "@repo/ui";
import { EventData, mockData } from "../../utils/mockData";
import Link from "next/link";

type HighlightedEventProps = {
  event: EventData;
};

export default function Events() {
  const sortedEvents = mockData.wydarzenia.sort((a, b) => b.timeDate.start.getTime() - a.timeDate.start.getTime());
  const incomingEvents = sortedEvents.filter((event) => event.timeDate.start >= new Date());
  let pastEvents = sortedEvents.filter((event) => event.timeDate.start < new Date());
  let [highlightedEvent, ...restIncomingEvents] = incomingEvents.sort((a, b) => a.timeDate.start.getTime() - b.timeDate.start.getTime());
  if (!highlightedEvent) {
    highlightedEvent = pastEvents[0];
    pastEvents = pastEvents.slice(1);
  }

  return (
    <Page className={"page-width flex flex-col gap-12 mx-auto"}>
      <h1 className={"text-5xl text-primary russo-one pl-8"}>Wydarzenia</h1>
      <div className={"flex flex-col md:gap-8 gap-10"}>
        {highlightedEvent && <HighlightedEvent event={highlightedEvent} />}
        <div className={`flex flex-col md:flex-row p-4 md:p-10 gap-10 md:gap-20 ${restIncomingEvents.length > 1 ? "!flex-col !gap-10" : ""}`}>
          {restIncomingEvents.length > 0 && (
            <>
              <NoDescriptionEvents title="Nadchodzące" events={restIncomingEvents} />
              <div className={`w-[2px] bg-secondary-200 my-[70px] hidden md:block ${restIncomingEvents.length > 1 ? "!hidden" : ""}`} />
            </>
          )}
          {pastEvents.length > 0 && <NoDescriptionEvents grow title="Zakończone" events={pastEvents} />}
        </div>
      </div>
    </Page>
  );
}

const HighlightedEvent = ({ event }: HighlightedEventProps) => {
  const now = new Date();
  let title;
  if (event.timeDate.start > now) {
    title = "Już wkrótce!";
  } else if (event.timeDate.end > now) {
    title = "W trakcie!";
  } else {
    title = "Ostatnia HackArena!";
  }

  return (
    <div className={"flex flex-col gap-4 text-background both-corners-clip bg-primary w-full p-6"} style={{ "--clip-size": "25px" } as React.CSSProperties}>
      <div className="flex items-center justify-between">
        <h2 className="russo-one text-4xl font-bold">{title}</h2>
        <Image src={"bolt.svg"} alt={"bolt"} width={22} height={22} />
      </div>
      <div
        key={event.name.text}
        className="grid grid-rows-auto sm:grid-cols-[.5fr_1fr] gap-8"
      >
        <Link
          href={`/wydarzenia/${event.name.url}`}
          className="bg-background both-corners-clip p-2 min-w-[270px] relative aspect-[1.63]"
          style={{ '--clip-size': '15px' } as React.CSSProperties}
        >
          <Image
            src={event.thumbnail}
            width={500}
            height={500}
            loading="lazy"
            alt={event.name.text}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ '--clip-size': '33px' } as React.CSSProperties}
            className="w-full h-full object-cover both-corners-clip"
          />
          <div className="absolute inset-0 flex flex-col w-full justify-center items-center bg-background mix-blend-color" />
        </Link>
        <div className="flex flex-col justify-between gap-4 md:gap-0">
          <h4 className="text-3xl font-bold">
            <Link href={`/wydarzenia/${event.name.url}`}>
              {event.name.text}
            </Link>
          </h4>
          <p className="text-xl line-clamp-3">
            {event.description}
          </p>
          <ArrowLink text={"Dowiedz się więcej"} href={`/wydarzenia/${event.name.url}`} />
        </div>
      </div>
    </div>
  )
}

type NoDescriptionEventProps = {
  events: EventData[];
  title: string;
  grow?: boolean;
};

const NoDescriptionEvents = ({ grow, title, events }: NoDescriptionEventProps) => {
  return (
    <div className={`flex flex-col gap-4 items-start overflow-hidden ${grow && "flex-1"}`}>
      <h2 className="text-3xl font-bold text-primary russo-one">{title}</h2>
      <div className="flex items-center gap-8 w-full overflow-x-auto pb-2">
        {
          events.map((event) => (
            <Link className="flex flex-col gap-4 w-max" key={event.name.text} href={`/wydarzenia/${event.name.url}`}>
              <div style={{ "--ribbon-color": event.color || "var(--color-primary)" } as React.CSSProperties} className="p-2 ribbon relative w-max">
                <Image
                  src={event.thumbnail}
                  className="ribbon-photo-clip object-cover w-max max-w-[300px] aspect-[1.63]"
                  width={400}
                  height={200}
                  alt={event.name.text}
                />
                <div className="absolute inset-0 flex flex-col w-full justify-center items-center bg-background mix-blend-color" />
              </div>
              <ArrowLink text={event.name.text} color="white" href={`/wydarzenia/${event.name.url}`} as="div" />
            </Link>
          ))
        }
      </div>
    </div>
  )
}
