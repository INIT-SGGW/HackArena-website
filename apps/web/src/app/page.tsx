import { TitleWithIcon, LinkButton, PageSection, ArrowLink } from '@repo/ui';
import Image from 'next/image';
import { mockData } from '../utils/mockData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Hackarena',
    description:
        'Weź udział w wydarzeniu, które łączy programistów w maratonie kodowania. Wykorzystaj swoją kreatywność i zdobywaj nagrody!',
};

export default function Home() {
    const wydarzenia = mockData.wydarzenia
        .filter((event) => event.timeDate.start.getTime() < Date.now())
        .sort((a, b) => {
            return b.timeDate.start.getTime() - a.timeDate.start.getTime();
        })
        .slice(0, 2);

    return (
        <div className="w-full flex flex-col">
            <PageSection className="relative py-40 pt-80 md:pt-70 overflow-x-clip">
                <Image
                    src="/home-bg.svg"
                    width={100}
                    height={100}
                    className="absolute top-0 right-[50%] translate-x-1/2 translate-y-[-10%] w-[100%] max-h-[450px] min-w-[400px]
        md:right-0 md:top-[50%] md:translate-x-0 md:translate-y-[-50%] md:w-[70%] 
        lg:right-0 lg:top-0 lg:translate-y-0 lg:max-h-[700px] 
        pointer-events-none"
                    alt="Tło"
                />
                <div className="w-full flex flex-col gap-15 sm:gap-22 items-start page-width z-2">
                    <div className="flex flex-col gap-2">
                        <TitleWithIcon
                            title="Hack{{ icon }}Arena"
                            icon="/lightning.svg"
                        />
                        <p className="text-2xl">
                            Zbierz zespół i zdobywaj nagrody!
                        </p>
                    </div>
                    <div className="flex flex-row gap-6 lex-wrap">
                        <LinkButton href="/wydarzenia">Wydarzenia</LinkButton>
                        <LinkButton href="#o-nas" secondary icon>
                            O nas
                        </LinkButton>
                    </div>
                </div>
            </PageSection>
            <PageSection
                className="py-0 md:py-40 relative overflow-x-clip"
                id="o-nas"
            >
                <Image
                    src="/arrows-right-bg.svg"
                    width={100}
                    height={100}
                    className="absolute top-[10%] md:top-[40%] -left-[30%] md:left-0 -translate-y-1/2 w-[90%] md:w-[40%] min-w-[450px] md:min-w-[600px] max-h-[250px] pointer-events-none"
                    alt="Tło"
                />
                <div className="w-full flex flex-col items-start page-width z-2 gap-4">
                    <h2 className="title">O nas</h2>
                    <p className="text-secondary-100 text-xl max-w-[900px]">
                        HackArena to hackathon organizowany przez{' '}
                        <strong className="text-white">
                            Koło Naukowe init z SGGW w Warszawie.
                        </strong>{' '}
                        Podczas wydarzenia zespoły programistów tworzą boty do
                        gry komputerowej, które następnie walczą przeciwko sobie
                        w <strong className="text-white">turnieju</strong> w
                        celu uzyskania tytułu{' '}
                        <strong className="text-white">
                            mistrza HackAreny.
                        </strong>
                    </p>
                </div>
            </PageSection>
            <PageSection className="py-40 relative overflow-x-clip">
                <Image
                    src="/arrows-left-bg.svg"
                    width={100}
                    height={100}
                    className="absolute top-0 md:-translate-y-1/2 translate-y-1/2 translate-x-1/2 md:translate-x-0 right-0 w-full md:w-[50%] min-w-[700px] max-h-[250px] pointer-events-none"
                    alt="Tło"
                />
                <div className="w-full flex flex-col items-start page-width z-2 gap-8">
                    <h2 className="title">Ostatnie</h2>
                    <div className="flex flex-col gap-8 md:gap-6">
                        {wydarzenia.map((event) => (
                            <div
                                key={event.name.text}
                                className="grid grid-rows-auto sm:grid-cols-[.4fr_1fr] gap-4 md:gap-6"
                            >
                                <div className="p-2 ribbon relative min-w-[250px]">
                                    <Link
                                        href={`/wydarzenia/${event.name.url}`}
                                    >
                                        <Image
                                            src={event.thumbnail}
                                            className="ribbon-photo-clip w-full"
                                            width={400}
                                            height={200}
                                            alt="HackArena 2"
                                        />
                                    </Link>
                                    <div className="absolute inset-0 flex flex-col w-full justify-center items-center bg-background mix-blend-color pointer-events-none" />
                                </div>
                                <div className="flex flex-col justify-around gap-4 md:gap-0">
                                    <h4 className="subsubtitle jet-brains">
                                        {event.name.text}
                                    </h4>
                                    <p className="text-secondary-100 text-xl line-clamp-3">
                                        {event.description}
                                    </p>
                                    <ArrowLink
                                        href={`/wydarzenia/${event.name.url}`}
                                        text="Dowiedz się więcej"
                                        color="white"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PageSection>
        </div>
    );
}
