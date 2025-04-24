'use client';

import { notFound, useParams } from 'next/navigation';
import {
    EventComponents,
    EventData,
    FAQType,
    HeaderTextSectionType,
    HeaderType,
    HighlightsType,
    mockData,
    PhotosType,
    PrizesType,
    ResultsType,
    SponsorsType,
} from '../../utils/mockData';
import { Header } from './Header';
import { useEffect, useState } from 'react';
import { HeaderTextSection } from './HeaderTextSection';
import { Results } from './Results';
import { PhotoGallery } from './PhotoGallery';
import { Highlights } from './Highlights';
import { Sponsors } from './Sponsors';
import { Prizes } from './Prizes';
import { FAQ } from './FAQ';

export function Builder() {
    const { event } = useParams<{ event: string }>();
    const [eventData, setEventData] = useState<EventData | null>(null);

    useEffect(() => {
        if (!event) {
            notFound();
        }

        const eventData = mockData.wydarzenia.find(
            (item) => item.name.url === event,
        );

        if (!eventData) {
            notFound();
        }

        setEventData(eventData);
    }, []);

    useEffect(() => {
        const primaryColorChangeEvent = new Event('primary-color-change', {
            bubbles: true,
            cancelable: true,
            composed: true,
        });

        const currentColor = getComputedStyle(
            document.documentElement,
        ).getPropertyValue('--color-primary');
        document.documentElement.style.setProperty(
            '--color-primary',
            eventData?.color || currentColor,
        );

        document.dispatchEvent(primaryColorChangeEvent);

        return () => {
            document.documentElement.style.setProperty(
                '--color-primary',
                currentColor,
            );
            document.dispatchEvent(primaryColorChangeEvent);
        };
    }, [eventData]);

    useEffect(() => {
        const currentLogo = document.querySelector<HTMLImageElement>('#logo');

        if (!currentLogo) return;

        const currentLogoSrc = currentLogo.src;

        if (eventData?.eventLogo) {
            const logo = document.querySelectorAll<HTMLImageElement>('#logo');
            logo.forEach((elem) => {
                elem.src = eventData.eventLogo || currentLogoSrc;
            });
        }

        return () => {
            const logo = document.querySelectorAll<HTMLImageElement>('#logo');
            logo.forEach((elem) => {
                elem.src = currentLogoSrc;
            });
        };
    }, [eventData]);

    return (
        <div className="w-full flex flex-col gap-30">
            {eventData &&
                eventData.blocks.map((item, index) => {
                    switch (item.type) {
                        case EventComponents.HEADER:
                            return (
                                <Header
                                    key={index}
                                    data={item.data as HeaderType}
                                    startDate={eventData.timeDate.start}
                                    registration={eventData.registration}
                                />
                            );
                        case EventComponents.PRIZES:
                            return (
                                <Prizes
                                    key={index}
                                    data={item.data as PrizesType}
                                />
                            );
                        case EventComponents.HIGHLIGHTS:
                            return (
                                <Highlights
                                    key={index}
                                    data={item.data as HighlightsType}
                                />
                            );
                        case EventComponents.HEADER_TEXT_SECTION:
                            return (
                                <HeaderTextSection
                                    key={index}
                                    color={eventData.color}
                                    data={item.data as HeaderTextSectionType}
                                />
                            );
                        case EventComponents.FAQ:
                            return (
                                <FAQ key={index} data={item.data as FAQType} />
                            );
                        case EventComponents.RESULTS:
                            return (
                                <Results
                                    key={index}
                                    data={item.data as ResultsType}
                                />
                            );
                        case EventComponents.SPONSORS:
                            return (
                                <Sponsors
                                    key={index}
                                    data={item.data as SponsorsType}
                                />
                            );
                        case EventComponents.PHOTOS:
                            return (
                                <PhotoGallery
                                    key={index}
                                    data={item.data as PhotosType}
                                />
                            );
                        default:
                            return null;
                    }
                })}
        </div>
    );
}
