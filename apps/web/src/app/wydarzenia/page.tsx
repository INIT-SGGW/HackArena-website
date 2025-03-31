import Image from "next/image";
import { ImageContainer, Page } from "@repo/ui";
import { ComponentProps } from "react";

type ContainerNameProps = ComponentProps<"div"> & {
  name: string;
};

function ContainerName({ name }: ContainerNameProps) {
  return (
    <div className={"flex flex-row justify-between md:pb-2 "}>
      <h1 className={" text-2xl font-black md:text-4xl"}>
        {name}
      </h1>
      <Image src={"bolt.svg"} alt={"bolt"} width={15} height={15} className={"md:w-7 md:h-7"}></Image>
    </div>
  );
};

type ForwardingProps = ComponentProps<"div"> & {
  title: string;
  href: string;
  isContainer?: boolean;
};

function Forwarding({ tittle, href, isContainer = true }: ForwardingProps) {
  return (
    <div className={"flex flex-row  pt-3 md:pt-6"}>
      <Image src={`${isContainer ? "two-arrows-black.svg" : "two-arrows-white.svg"}`} alt={"two arrows"} width={30} height={30}></Image>
      <a className={"pl-2 font-extrabold text-lg md:text-2xl "} href={href}>
        {tittle}
      </a>
    </div>
  );
}

const Current = ({ children, ...props }: ComponentProps<"div">) => (
  <div className={`text-secondary-300  justify-items-center  ${props.className}`}>

    <h1 className={"text-primary text-4xl font-black  md:mr-150  pb-10"}>Wydarzenia</h1>

    <div
      className={"  content-card-clip bg-primary flex-grow  w-full max-w-[343px] md:max-w-[900px] p-5 justify-between"} style={{ "--clip-size": "20px" }}>
      <ContainerName name={"W trakcie"} />
      <div className={"md:flex md:flex-row"}>

        <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} color={"secondary-300"} width={350} height={200}></ImageContainer>

        <div className={"flex flex-col md:pl-10 pt-5 md:pt-2"}>

          <h1 className={"pb-3 text-2xl font-extrabold md:text-4xl"}>
            HackArena 2.5
          </h1>
          <p className={"font-medium text-lg md:text-2xl"}>
            HackArena 2.5 to trzecia edycja hackathonu organizowanego przez Koło Naukowe "init" z SGGW...
          </p>
          <Forwarding tittle={"Dowiedz się więcej"} href={"/wydarzenia/hackArena_2.5"} />

        </div>
      </div>
    </div>
  </div>
);

const BottomImages = ({ ...props }: ComponentProps<"div">) => (
  <div className={`flex flex-row shrink mt-15 justify-center   ${props.className}`}>

    <div className={` mr-20 max-w-[300px] ${props.className} `}>
      <h1 className={"text-2xl text-primary font-black pb-3  justify-self-center"}>
        Nadchodzące
      </h1>
      <ImageContainer src={"question-mark.svg"} alt={"hackarena 2.5"} width={50} height={50} color={"secondary-400"}  isIcon={true}></ImageContainer>
      <Forwarding tittle={"???"} href={"/wydarzenia/???"} isContainer={false} />
    </div>

    <div className={"pl-20 border-solid border-l-2 border-secondary-300"}>
      <h1 className={"text-2xl text-primary font-black pb-3 justify-self-center"}>
        Zakończone
      </h1>
      <div className={"flex flex-row overflow-x-scroll snap-x snap-mandatory no-scrollbar md:max-w-[350px]"}>

        <div className={" mr-5 snap-center snap-always "}>
          <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} width={300} height={200}></ImageContainer>
          <Forwarding tittle={"HackArena 2.0"} href={"/wydarzenia/hackArena_2.0"} isContainer={false} />
        </div>
        <div className={" mr-5 snap-center snap-always"}>
          <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} width={300} height={200}></ImageContainer>
          <Forwarding tittle={"HackArena 2.0"} href={"/wydarzenia/hackArena_2.0"} isContainer={false} />
        </div>

        <div className={" mr-5 snap-center snap-always"}>
          <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} width={300} height={200}></ImageContainer>
          <Forwarding tittle={"HackArena 1.0"} href={"/wydarzenia/hackArena_1.0"} isContainer={false} />
        </div>

      </div>
    </div>
  </div>
);

export default function Events() {
  return (
    <Page className={""}>
      <div className={"w-full"}>
        <Current className={" "}></Current>
        <BottomImages className={" "} />
      </div>
    </Page>
  );
}
