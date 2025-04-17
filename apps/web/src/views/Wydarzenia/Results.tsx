import { PageSection } from '@repo/ui';
import { ResultsType as ResultsType } from '../../utils/mockData';
import Image from 'next/image';

type Props = {
  data: ResultsType;
};

export function Results({ data }: Props) {
  return (
    <PageSection className="overflow-x-clip">
      <div className="page-width !max-w-[700px] flex flex-col gap-8 items-center relative">
        <div className="absolute top-0 left-[50%] -translate-x-[50%] w-[90%] lg:w-[120%] h-full -z-1 pointer-events-none ">
          <Image
            src="/trophy.svg"
            width={300}
            height={300}
            alt="Trophy"
            className="h-full absolute top-[60%] left-0 -translate-y-[50%] -translate-x-[50%]"
          />
          <Image
            src="/swords.svg"
            width={300}
            height={300}
            alt="swords"
            className="h-full absolute top-[60%] right-0 -translate-y-[50%] translate-x-[50%]"
          />
        </div>
        <h2 className="title">Wyniki</h2>
        <p className="text-2xl text-center">{data.text}</p>
        <ol className="flex flex-col gap-4 w-full list-[upper-roman] list-inside">
          {data.teams.map((team, index) => (
            <li
              key={index}
              className="text-xl font-bold bg-primary text-background text-center p-2 both-corners-clip"
            >
              {team}
            </li>
          ))}
        </ol>
      </div>
    </PageSection>
  );
}
