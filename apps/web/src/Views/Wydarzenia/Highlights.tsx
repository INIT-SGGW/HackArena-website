import { PageSection } from '@repo/ui';
import { HighlightsType as HighlightsType } from '../../utils/mockData';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: HighlightsType;
};

export function Highlights({ data }: Props) {
  return (
    <PageSection>
      <div className="page-width flex flex-col gap-8">
        <div
          className="flex flex-col gap-2 lg:gap-6 bg-primary p-4 lg:p-8 both-corners-clip"
          style={{ '--clip-size': '35px' } as React.CSSProperties}
        >
          <div className="flex items-center justify-between pr-4 lg:pr-8">
            <h2 className="subtitle text-background">
              Najlepsze momenty
            </h2>
            <Image
              src="/bolt.svg"
              alt=""
              width={25}
              height={25}
              className="inline-block"
            />
          </div>
          <div
            className="bg-background p-2 both-corners-clip"
            style={{ '--clip-size': '20px' } as React.CSSProperties}
          >
            <video
              src={data.video}
              className="w-full h-auto aspect-video both-corners-clip"
              style={{ '--clip-size': '45px' } as React.CSSProperties}
              controls={false}
              autoPlay
              muted
              loop
              preload="none"
              poster={data.placeholder}
            />
          </div>
        </div>
        {data.link && (
          <Link
            href={data.link.href}
            className="flex items-center w-full justify-center gap-4"
            target="__blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/double-arrows-yellow.svg"
              alt="> >"
              width={35}
              height={35}
            />
            <p className="text-xl text-primary font-bold">{data.link.text}</p>
          </Link>
        )}
      </div>
    </PageSection>
  );
}
