import Image from 'next/image';
import { SponsorsType as SponsorsType } from '../../utils/mockData';
import Link from 'next/link';

type Props = {
  data: SponsorsType;
};

export function Sponsors({ data }: Props) {
  const allSponsors = [
    ...data.sponsors,
    ...data.partners,
    ...data.patronage,
    ...data.mediaPatronage,
  ].length;

  return (
    <div className="flex flex-col gap-8 overflow-hidden">
      <h3 className="w-full text-center text-2xl px-4">{data.text}</h3>
      <div
        className="w-max flex gap-8 p-4 pb-6 bg-secondary-300 animate-scroll"
        style={{ animationDuration: `${allSponsors * 2.5}s` }}
      >
        {data.sponsors.length > 0 && (
          <SponsorsSegment title="Sponsorzy" data={data.sponsors} />
        )}
        {data.partners.length > 0 && (
          <SponsorsSegment title="Partnerzy" data={data.partners} />
        )}
        {data.patronage.length > 0 && (
          <SponsorsSegment title="Patronat" data={data.patronage} />
        )}
        {data.mediaPatronage.length > 0 && (
          <SponsorsSegment
            title="Patronat medialny"
            data={data.mediaPatronage}
          />
        )}
        {data.sponsors.length > 0 && (
          <SponsorsSegment title="Sponsorzy" data={data.sponsors} />
        )}
        {data.partners.length > 0 && (
          <SponsorsSegment title="Partnerzy" data={data.partners} />
        )}
        {data.patronage.length > 0 && (
          <SponsorsSegment title="Patronat" data={data.patronage} />
        )}
        {data.mediaPatronage.length > 0 && (
          <SponsorsSegment
            title="Patronat medialny"
            data={data.mediaPatronage}
          />
        )}
      </div>
    </div>
  );
}

type SponsorsSegmentProps = {
  title: string;
  data: SponsorsType['sponsors'];
};

function SponsorsSegment({ title, data }: SponsorsSegmentProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-xl">{title}</h2>
      <div className="w-full flex gap-4 items-center">
        {data.map((sponsor, index) => (
          <Link
            href={sponsor.href}
            key={index}
            className="w-[140px] h-[70px] p-4 bg-text button-clip"
            style={{ '--cut-size': '10px' } as React.CSSProperties}
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
