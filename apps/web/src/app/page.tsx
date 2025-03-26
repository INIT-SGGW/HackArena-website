import { LinkButton } from '@repo/ui';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';

<<<<<<< HEAD
const Section = ({ children, ...props }: ComponentProps<"section">) => (
  <section className={`w-full flex flex-col items-center px-4 ${props.className}`}>{children}</section>
=======
const Section = ({ children, ...props }: ComponentProps<'section'>) => (
  <section
    className={`w-full flex flex-col items-center px-4  ${props.className}`}
  >
    {children}
  </section>
>>>>>>> aa75d3d (made events page for mobile)
);

export default function Home() {
  return (
    <div className="w-full flex flex-col">
<<<<<<< HEAD
      <Section className="relative py-40 pt-80 md:pt-70 overflow-x-clip">
        <Image src="/home-bg.svg" width={100} height={100} className="absolute 
=======
      <Section className="relative py-40 pt-80 md:pt-70">
        <Image
          src="/home-bg.svg"
          width={100}
          height={100}
          className="absolute 
>>>>>>> aa75d3d (made events page for mobile)
        top-0 right-[50%] translate-x-1/2 translate-y-[-10%] w-[100%] max-h-[450px] min-w-[400px]
        md:right-0 md:top-[50%] md:translate-x-0 md:translate-y-[-50%] md:w-[70%] 
        lg:right-0 lg:top-0 lg:translate-y-0 lg:max-h-[700px] 
        pointer-events-none"
          alt="Tło"
        />
        <div className="w-full flex flex-col items-start page-width z-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl russo-one">
              Hack
              <Image
                src="lightning.svg"
                className="inline"
                width={30}
                height={30}
                alt="⚡"
              />
              Arena
            </h1>
            <p className="text-2xl">Zbierz zespół i zdobywaj nagrody!</p>
          </div>
          <div className="flex flex-row gap-6 mt-22 flex-wrap">
            <LinkButton href="/wydarzenia">Wydarzenia</LinkButton>
            <LinkButton href="/o-nas" secondary icon>
              O nas
            </LinkButton>
          </div>
        </div>
      </Section>
<<<<<<< HEAD
      <Section className="py-0 md:py-40 relative overflow-x-clip">
        <Image src="/arrows-right-bg.svg" width={100} height={100} className="absolute top-[10%] md:top-[40%] -left-[30%] md:left-0 -translate-y-1/2 w-[90%] md:w-[40%] min-w-[450px] md:min-w-[600px] max-h-[250px] pointer-events-none" alt="Tło" />
        <div className="w-full flex flex-col items-start page-width z-2 gap-4">
          <h2 className="text-5xl text-primary russo-one">
            O nas
          </h2>
          <p className="text-secondary-100 text-xl max-w-[900px]">HackArena to hackathon organizowany przez <strong className="text-white">Koło Naukowe init z SGGW w Warszawie.</strong> Podczas wydarzenia zespoły programistów tworzą boty do gry komputerowej, które następnie walczą przeciwko sobie w <strong className="text-white">turnieju</strong> w celu uzyskania tytułu <strong className="text-white">mistrza HackAreny.</strong></p>
        </div>
      </Section>
      <Section className="py-40 relative overflow-x-clip">
        <Image src="/arrows-left-bg.svg" width={100} height={100} className="absolute top-0 md:-translate-y-1/2 translate-y-1/2 translate-x-1/2 md:translate-x-0 right-0 w-full md:w-[50%] min-w-[700px] max-h-[250px] pointer-events-none" alt="Tło" />
=======
      <Section className="py-0 md:py-40 relative">
        <Image
          src="/arrows-right-bg.svg"
          width={100}
          height={100}
          className="absolute top-[10%] md:top-[40%] -left-[30%] md:left-0 -translate-y-1/2 w-[90%] md:w-[40%] min-w-[450px] md:min-w-[600px] max-h-[250px] pointer-events-none"
          alt="Tło"
        />
        <div className="w-full flex flex-col items-start page-width z-2 gap-4">
          <h2 className="text-5xl text-primary font-bold russo-one">O nas</h2>
          <p className="text-secondary-100 text-xl max-w-[900px]">
            HackArena to hackathon organizowany przez{' '}
            <strong className="text-white">
              Koło Naukowe init z SGGW w Warszawie.
            </strong>{' '}
            Podczas wydarzenia zespoły programistów tworzą boty do gry
            komputerowej, które następnie walczą przeciwko sobie w{' '}
            <strong className="text-white">turnieju</strong> w celu uzyskania
            tytułu <strong className="text-white">mistrza HackAreny.</strong>
          </p>
        </div>
      </Section>
      <Section className="py-40 relative">
        <Image
          src="/arrows-left-bg.svg"
          width={100}
          height={100}
          className="absolute top-0 md:-translate-y-1/2 translate-y-1/2 translate-x-1/2 md:translate-x-0 right-0 w-full md:w-[50%] min-w-[700px] max-h-[250px] pointer-events-none"
          alt="Tło"
        />
>>>>>>> aa75d3d (made events page for mobile)
        <div className="w-full flex flex-col items-start page-width z-2 gap-8">
          <h2 className="text-5xl text-primary russo-one">
            Ostatnie
          </h2>
          <div className="grid grid-rows-auto md:grid-cols-[.4fr_1fr] gap-6">
            <div className="p-2 ribbon relative min-w-[250px]">
              <Image
                src="/hackarena-2-thumb.jpg"
                className="ribbon-photo-clip w-full"
                width={400}
                height={200}
                alt="HackArena 2"
              />
              <div className="absolute inset-0 flex flex-col w-full justify-center items-center bg-background mix-blend-color" />
            </div>
            <div className="flex flex-col justify-around ">
              <h4 className="text-primary text-2xl">HackArena 2.0</h4>
              <p className="text-secondary-100 text-xl">
                HackArena 2.0 to druga edycja hackathonu organizowanego przez
                Koło Naukowe "init" z SGGW...
              </p>
              <Link href="/wydarzenia/hackarena-2">
                <Image
                  src="/arrow-pointer.svg"
                  className="inline"
                  width={30}
                  height={30}
                  alt="Czytaj więcej"
                />
                &nbsp;Dowiedz się więcej
              </Link>
            </div>
          </div>
          <div className="grid grid-rows-auto md:grid-cols-[.4fr_1fr] gap-6">
            <div className="p-2 ribbon relative min-w-[250px]">
              <Image
                src="/hackarena-2-thumb.jpg"
                className="ribbon-photo-clip w-full"
                width={400}
                height={200}
                alt="HackArena 2"
              />
              <div className="absolute inset-0 flex flex-col w-full justify-center items-center bg-background mix-blend-color" />
            </div>
            <div className="flex flex-col justify-around ">
              <h4 className="text-primary text-2xl">HackArena 1.0</h4>
              <p className="text-secondary-100 text-xl">
                HackArena 1.0 to pierwsza edycja hackathonu organizowanego przez
                Koło Naukowe "init" z SGGW...
              </p>
              <Link href="/wydarzenia/hackarena-1">
                <Image
                  src="/arrow-pointer.svg"
                  className="inline"
                  width={30}
                  height={30}
                  alt="Czytaj więcej"
                />
                &nbsp;Dowiedz się więcej
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
