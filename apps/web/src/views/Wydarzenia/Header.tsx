'use client';

import { TitleWithIcon, PageSection } from '@repo/ui';
import { HeaderType } from '../../utils/mockData';
import Image from 'next/image';
import { Timer, TimerProps } from './Timer';

type Props = TimerProps & {
  data: HeaderType;
};

const eventDate = ({ start, end }: { start: Date; end: Date }) => {
  if (start.getDay() === end.getDay()) {
    return `${start.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
  } else {
    return `${start.getDate()}-${end.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
  }
};

export function Header({ data, startDate, registration }: Props) {
  return (
    <PageSection className="pt-60 md:pt-70 pb-10 relative gap-40">
      <div>
        <div className="absolute top-0 left-0 w-full h-[140%] -z-1 overflow-hidden pointer-events-none">
          <Image
            src={data.thumbnail}
            alt={data.title.split('{{ icon }}').join(' ')}
            width={1920}
            height={1080}
            className="w-full h-auto min-h-full object-cover absolute top-[50%] -translate-y-[50%]"
          />
          <div className="absolute inset-0 bg-background mix-blend-color " />
          <div className="absolute inset-0  bg-background opacity-80 " />
          <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
        </div>
        <div className="flex flex-col items-start w-full page-width">
          <TitleWithIcon title={data.title} icon={data.icon} className="mb-5" />
          <p className="text-2xl mb-10 font-light">{data.description}</p>
          <div className="w-full h-[1px] bg-text my-2" />
          <div className="flex items-center gap-6 text-xl">
            <span>{eventDate(data.timeDate)}</span>
            <Image src={'/star.svg'} width={15} height={15} alt="*" />
            <span>{data.location}</span>
          </div>
        </div>
      </div>
      {startDate.getTime() > Date.now() && (
        <Timer startDate={startDate} registration={registration} />
      )}
    </PageSection>
  );
}
