import { PageSection } from '@repo/ui';
import { PrizesType } from '../../utils/mockData';
import Image from 'next/image';

type Props = {
  data: PrizesType;
};

export function Prizes({ data }: Props) {
  const sortedPrizes = data.prizes.sort((a, b) => {
    return a.position - b.position;
  });

  if (sortedPrizes.length === 3 && sortedPrizes[0] && sortedPrizes[1]) {
    [sortedPrizes[0], sortedPrizes[1]] = [sortedPrizes[1], sortedPrizes[0]];
  }

  return (
    <PageSection>
      <div className="page-width flex flex-col items-center gap-4">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-5xl text-primary font-bold russo-one">Nagrody</h2>
          <p>{data.text}</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="w-full grid [grid-template-columns:repeat(auto-fit, 1fr)] auto-rows-auto items-stretch justify-center gap-x-4">
            {sortedPrizes.map((prize, index) => (
              <div key={index}>
                {prize.position === 1 && (
                  <Image
                    src="/crown.svg"
                    width={100}
                    height={100}
                    alt="Crown"
                    style={{ gridColumnStart: index + 1 }}
                    className="w-[40%] h-auto m-auto max-w-[400px]"
                  />
                )}
              </div>
            ))}
            {sortedPrizes.map((prize, index) => (
              <div
                key={index}
                style={{ marginTop: `${(prize.position - 1) * 10}%` }}
                className="flex flex-col row-start-2 items-center w-full max-w-[400px]"
              >
                <div className="bg-text w-full p-2 text-background text-center text-2xl text-bold">
                  {prize.position}
                </div>
                <ul
                  className={`w-full text-lg flex flex-col gap-1 h-full items-center justify-end p-4 border-2 border-text border-y-0`}
                >
                  {prize.prizeList.map((prizeItem, index) => (
                    <li
                      key={`prize-item-${index}`}
                      className="text-center text-secondary-100"
                    >
                      {prizeItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
