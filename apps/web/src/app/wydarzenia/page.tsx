import Image from "next/image";
import { ImageContainer } from "@repo/ui";
import {  ComponentProps } from "react";

const Current = ({ children, ...props }: ComponentProps<"div">) => (
  <div className={` flex flex-col  ${props.className}`}>
    <h1 className={"text-primary text-4xl pb-8 pl-5 font-black"}>
      Wydarzenia
    </h1>
    <div className={"content-card-clip bg-primary flex-grow  w-full h-ful max-w-[343px] md:max-w-[900px] "} style={{ "--clip-size": "20px" }}>
      <div className={"px-5 py-5 "}>
        <div className={"flex flex-row justify-between pb-2"}>
          <h2 className={"text-secondary-300 text-2xl font-black md:text-4xl"}>
            W trakcie
          </h2>
          <Image src={"bolt.svg"} alt={"bolt"} width={15} height={15} className={"md:w-7 md:h-7"}></Image>
        </div>

        <div className={"md:flex md:flex-row"}>

          <div className={"w-full relative md:mb-2 "}>
            <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} color={"secondary-300"} width={350} height={200}></ImageContainer>
          </div>

          <div className={"flex flex-col md:pl-10"}>
            <div className={"text-secondary-300 pt-5"}>
              <h1 className={"pb-3 text-2xl font-extrabold md:text-4xl"}>
                HackArena 2.5
              </h1>
              <p className={"font-medium text-lg md:text-2xl"}>
                HackArena 2.5 to trzecia edycja hackathonu organizowanego
                przez Koło Naukowe "init" z SGGW...
              </p>
            </div>

            <div className={"flex flex-row text-secondary-300 pt-3 md:pt-6"}>
              <Image src={"two-arrows-black.svg"} alt={"two arrows"} width={30} height={30}></Image>
              <a className={"pl-2 font-extrabold text-lg md:text-2xl "} href={"wydarzenia/hackArena_2.5"}>
                Dowiedz się więcej
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const Coming = ({children,...props}: ComponentProps<"div">) => (
  <div className={`mt-15 max-w-[300px] ${props.className}`}>
    <h1 className={"text-2xl text-primary font-black pb-3 left-0 justify-self-center"}>
      Nadchodzące
    </h1>
    <ImageContainer src={"question-mark.svg"} alt={"hackarena 2.5"} width={50} height={50} color={"secondary-400"} isIcon={true}></ImageContainer>

    <div className={"flex flex-row text-white pt-3"}>
      <Image src={"two-arrows-white.svg"} alt={"two arrows"} width={30} height={30}></Image>
      <a className={"pl-2 font-extrabold text-lg md:text-xl"} href={"wydarzenia/???"}>
        ???
      </a>
    </div>
  </div>
);

const PassedRoller = ({children, ...props}: ComponentProps<'div'>)   => (
  <div className={`mt-15 ${props.className}`}>
    <h1 className={"text-2xl text-primary font-black pb-3 left-0 justify-self-center"}>
      Zakończone
    </h1>

    <div className={"flex flex-row overflow-x-scroll snap-x snap-mandatory no-scrollbar"}>

      <div className={"shrink-0 mr-5 snap-center snap-always "}>
        <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} width={300} height={200}></ImageContainer>

        <div className={"flex flex-row text-white pt-3"}>
          <Image src={"two-arrows-white.svg"} alt={"two arrows"} width={30} height={30}></Image>
          <a className={"pl-2 font-extrabold text-lg md:text-xl"} href={"wydarzenia/hackArena_2.0"}>
            HackArena 2.0
          </a>
        </div>
      </div>
      <div className={"shrink-0 mr-5 snap-center snap-always"}>
        <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} width={300} height={200}></ImageContainer>

        <div className={"flex flex-row text-white pt-3"}>
          <Image src={"two-arrows-white.svg"} alt={"two arrows"} width={30} height={30}></Image>
          <a className={"pl-2 font-extrabold text-lg md:text-xl"} href={"wydarzenia/hackArena_2.0"}>
            HackArena 2.0
          </a>
        </div>
      </div>

      <div className={"shrink-0 mr-5 snap-center snap-always"}>
        <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} width={300} height={200}></ImageContainer>

        <div className={"flex flex-row text-white pt-3"}>
          <Image src={"two-arrows-white.svg"} alt={"two arrows"} width={30} height={30}></Image>
          <a className={"pl-2 font-extrabold text-lg md:text-xl"} href={"wydarzenia/hackArena_1.0"}>
            HackArena 1.0
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function Events() {
  return (
    <div className={"flex flex-col m-5 scale-85 "}>
      <Current className={"self-center "}></Current>
      <div className={"w-full h-full md:flex md:flex-row md:place-content-center "}>
        <Coming className={"justify-self-center md:mr-20"}></Coming>
        <PassedRoller className={"md:max-w-[500px] md:pl-20 md:border-solid md:border-l-2 md:border-secondary-300 "}></PassedRoller>
      </div>
    </div>
  );
}
