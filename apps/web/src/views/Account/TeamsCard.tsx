'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    useEffect,
    useRef,
    useState,
    MouseEvent as ReactMouseEvent,
} from 'react';
import { CrossedTitle, LinkButton } from '@repo/ui';
import { fetcherHack } from '../../api/fetcher';
import useSWR from 'swr';
import { GetTeamsResponse } from '../../types/responses';
import { useGetUserId } from '../../utils/useGetUserId';

export function TeamsCard() {
    const userId = useGetUserId();

    const { data, error, isLoading } = useSWR<GetTeamsResponse, Error>(
        `/users/${userId}/teams`,
        (url: string) => fetcherHack<null, GetTeamsResponse>(url, {
            method: "GET",
        }))

    return (
        <div className="flex flex-col page-width gap-10">
            <CrossedTitle title="Twoje drużyny" />
            <div className="flex flex-col gap-10 sm:p-4">
                {
                    isLoading && !error && (
                        <p className='text-center'>Ładowanie...</p>
                    )
                }
                {
                    error && (
                        <p className="text-error text-center">Wystąpił błąd podczas ładowania drużyn</p>
                    )
                }
                {
                    data && data.length !== 0 && (<TeamsCarousel teams={data} />)
                }
                {
                    !data || data?.length === 0 && (
                        <p className='text-center'>Nie należysz jeszcze do żadnej drużyny</p>
                    )
                }
                <LinkButton href="/rejestracja/druzyna" fullWidth>
                    Stwórz drużynę
                </LinkButton>
            </div>
        </div>
    );
}

type NoDescriptionEventProps = {
    teams: GetTeamsResponse;
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
                setIsDragging(false);
            }
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
    };

    return (
        <div className={`flex flex-col gap-4 items-start overflow-hidden`}>
            <div
                ref={carouselRef}
                className="flex items-center gap-4 w-full overflow-x-auto select-none no-scrollbar snap-x sm:snap-none snap-mandatory sm:scroll-px-0"
            >
                {teams.map((team) => (
                    <Link
                        className={`bg-primary both-corners-clip mx-auto py-4 px-6 flex flex-col items-center min-w-[250px] max-w-[600px] gap-1 snap-center sm:snap-none w-full sm:active:cursor-grabbing`}
                        draggable={false}
                        key={team._id}
                        onClick={handleClick}
                        href={`/konto/druzyna/${team._id}`}
                    >
                        <p className="text-background w-full font-bold overflow-hidden text-ellipsis text-center text-nowrap">
                            {team.name}
                        </p>
                        <div className="flex items-center gap-1">
                            {new Array(team.membersCount)
                                .fill(0)
                                .map((_, index) => (
                                    <Image
                                        key={index}
                                        src={`/member.svg`}
                                        alt="member"
                                        width={20}
                                        height={20}
                                    />
                                ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
