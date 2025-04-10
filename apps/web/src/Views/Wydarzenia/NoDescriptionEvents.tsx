"use client";

import { ArrowLink } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, MouseEvent as ReactMouseEvent } from "react";
import { EventData } from "../../utils/mockData";

type NoDescriptionEventProps = {
    events: EventData[];
    title: string;
    grow?: boolean;
};

export function NoDescriptionEvents({ grow, title, events }: NoDescriptionEventProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const container = carouselRef.current;
        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        if (!container) return;

        const handleMouseDown = (e: MouseEvent) => {
            if (window.innerWidth < 640) return;
            setIsDragging(true);
            isDown = true;
            container.classList.add('active');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        };

        const handleMouseUp = (e: MouseEvent) => {
            if (window.innerWidth < 640) return;

            if (Math.abs(startX - e.pageX + container.offsetLeft) < 5) {
                setIsDragging(false)
            };
            isDown = false;
            container.classList.remove('active');
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (window.innerWidth < 640) return;

            if (!isDown) return;
            e.preventDefault();

            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1; // scroll speed multiplier
            container.scrollLeft = scrollLeft - walk;
        };

        // Attach event listeners
        container.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up
        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [carouselRef]);

    const handleClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
        if (isDragging) {
            e.preventDefault();
            setIsDragging(false);
        }
    }

    return (
        <div className={`flex flex-col gap-4 items-start overflow-hidden ${grow && "flex-1"}`}>
            <h2 className="text-3xl font-bold ml-4 sm:ml-0 text-primary russo-one">{title}</h2>
            <div ref={carouselRef} className="flex items-center gap-4 sm:gap-8 w-full overflow-x-auto pb-2 select-none no-scrollbar snap-x sm:snap-none snap-mandatory px-[10%] sm:px-0 scroll-px-[10%] sm:scroll-px-0">
                {
                    events.map((event) => (
                        <Link className="flex flex-col gap-4 snap-center sm:snap-none sm:max-w-none flex-[1_0_auto] sm:flex-auto w-full sm:w-max sm:active:cursor-grabbing" draggable={false} key={event.name.text} onClick={handleClick} href={`/wydarzenia/${event.name.url}`}>
                            <div style={{ "--ribbon-color": event.color || "var(--color-primary)" } as React.CSSProperties} className="p-2 ribbon relative w-full sm:w-max ">
                                <Image
                                    src={event.thumbnail}
                                    className="ribbon-photo-clip object-cover w-full flex-1 sm:max-w-[300px] aspect-[1.63]"
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