"use client";

import { ArrowLink } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, MouseEvent as ReactMouseEvent } from "react";
import { LinkButton } from "@repo/ui";

const mockTeams: {
    name: string,
    memberCount: number;
    id: string;
}[] = [
        {
            name: 'HackArena Team 1 asdf asdf asd f',
            memberCount: 3,
            id: '1',
        },
        {
            name: 'HackArena Team 2',
            memberCount: 2,
            id: '2',
        },
        {
            name: 'HackArena Team 3',
            memberCount: 4,
            id: '3',
        },
        {
            name: 'HackArena Team 1',
            memberCount: 3,
            id: '4',
        },
        {
            name: 'HackArena Team 2',
            memberCount: 2,
            id: '5',
        },

    ]

export function TeamsCard() {
    return (
        <div className="flex flex-col page-width gap-10">
            <div className="relative w-full">
                <h2 className="title z-2 bg-background m-auto text-4xl sm:text-5xl sm:w-fit sm:px-10 sm:text-left">
                    Twoje drużyny
                </h2>
                <div className="absolute w-full h-[4px] bg-primary top-[50%] -translate-y-[50%] left-0 -z-1 hidden sm:block" />
            </div>
            <div className="flex flex-col gap-10 sm:p-4">
                {mockTeams.length > 0 ? (
                    <TeamsCarousel teams={mockTeams} />
                ) : (
                    <p className="text-center">Nie jesteś jeszcze członkiem żadnej drużyny</p>
                )}
                <LinkButton href="/rejestracja/druzyna" fullWidth >Stwórz drużynę</LinkButton>
            </div>
        </div>
    )
}

type NoDescriptionEventProps = {
    teams: {
        name: string;
        memberCount: number;
        id: string;
    }[];
};

export function TeamsCarousel({ teams }: NoDescriptionEventProps) {
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
        <div className={`flex flex-col gap-4 items-start overflow-hidden`}>
            <div ref={carouselRef} className="flex items-center gap-4 w-full overflow-x-auto select-none no-scrollbar snap-x sm:snap-none snap-mandatory sm:scroll-px-0">
                {
                    teams.map((team) => (
                        <Link className={`bg-primary both-corners-clip mx-auto py-4 px-6 flex flex-col items-center min-w-[250px] max-w-[600px] gap-1 snap-center sm:snap-none w-full sm:active:cursor-grabbing`} draggable={false} key={team.id} onClick={handleClick} href={`/konto/wydarzenie/${team.id}`}>
                            <p className="text-background w-full font-bold overflow-hidden text-ellipsis text-center text-nowrap">{team.name}</p>
                            <div className="flex items-center gap-1">
                                {new Array(team.memberCount).fill(0).map((_, index) => (
                                    <Image key={index} src={`/member.svg`} alt="member" width={20} height={20} />
                                ))}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}