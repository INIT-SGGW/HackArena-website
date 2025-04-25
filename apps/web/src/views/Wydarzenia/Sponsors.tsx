import Image from 'next/image';
import { SponsorsType as SponsorsType } from '../../utils/mockData';
import Link from 'next/link';

type Props = {
    data: SponsorsType;
};

export function Sponsors({ data }: Props) {
    const allSponsors = [
        ...(data.sponsors || []),
        ...(data.partners || []),
        ...(data.patronage || []),
        ...(data.mediaPatronage || []),
    ].length;
    const segments = [
        data.sponsors,
        data.partners,
        data.patronage,
        data.mediaPatronage,
    ].filter((segment) => segment && segment.length > 0).length;

    const scroll = allSponsors > 6;

    return (
        <div
            className={`flex flex-col ${scroll ? 'gap-8' : 'gap-4'} overflow-hidden`}
        >
            <h3 className="w-full text-center text-2xl px-4">{data.text}</h3>
            <div
                className={`${scroll ? 'w-max animate-sponsor-scroll bg-secondary-300' : 'w-full justify-center flex-wrap text-center'} flex gap-8 p-4 ${segments > 1 ? 'pb-6' : ' '} `}
                style={{ animationDuration: `${allSponsors * 2.5}s` }}
            >
                {data.sponsors && data.sponsors.length > 0 && (
                    <SponsorsSegment
                        title={segments > 1 ? 'Sponsorzy' : undefined}
                        data={data.sponsors}
                    />
                )}
                {data.partners && data.partners.length > 0 && (
                    <SponsorsSegment
                        title={segments > 1 ? 'Partnerzy' : undefined}
                        data={data.partners}
                    />
                )}
                {data.patronage && data.patronage.length > 0 && (
                    <SponsorsSegment
                        title={segments > 1 ? 'Patronat' : undefined}
                        data={data.patronage}
                    />
                )}
                {data.mediaPatronage && data.mediaPatronage.length > 0 && (
                    <SponsorsSegment
                        title={segments > 1 ? 'Patronat medialny' : undefined}
                        data={data.mediaPatronage}
                    />
                )}
                {scroll && data.sponsors && data.sponsors.length > 0 && (
                    <SponsorsSegment
                        title={segments > 1 ? 'Sponsorzy' : undefined}
                        data={data.sponsors}
                    />
                )}
                {scroll && data.partners && data.partners.length > 0 && (
                    <SponsorsSegment
                        title={segments > 1 ? 'Partnerzy' : undefined}
                        data={data.partners}
                    />
                )}
                {scroll && data.patronage && data.patronage.length > 0 && (
                    <SponsorsSegment
                        title={segments > 1 ? 'Patronat' : undefined}
                        data={data.patronage}
                    />
                )}
                {scroll &&
                    data.mediaPatronage &&
                    data.mediaPatronage.length > 0 && (
                        <SponsorsSegment
                            title={
                                segments > 1 ? 'Patronat medialny' : undefined
                            }
                            data={data.mediaPatronage}
                        />
                    )}
            </div>
        </div>
    );
}

type SponsorsSegmentProps = {
    title?: string;
    data: SponsorsType['sponsors'];
};

function SponsorsSegment({ title, data }: SponsorsSegmentProps) {
    return (
        <div className="flex flex-col gap-2">
            {title && <h4 className="text-xl">{title}</h4>}
            <div className="flex gap-4 items-center justify-center flex-wrap">
                {data?.map((sponsor, index) => (
                    <Link
                        href={sponsor.href}
                        key={index}
                        className="w-[140px] h-[70px] p-4 bg-text both-corners-clip"
                        style={{ '--clip-size': '10px' } as React.CSSProperties}
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            width={100}
                            height={50}
                            title={sponsor.name}
                            className="w-auto h-full m-auto object-contain"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
