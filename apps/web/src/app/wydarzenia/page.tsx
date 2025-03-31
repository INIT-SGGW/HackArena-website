import Image from "next/image";
import { ImageContainer, Page } from "@repo/ui";
import { ComponentProps } from "react";

type ContainerNameProps = ComponentProps<"div"> & {
  name: string;
  isContainer?:boolean;
  color:string
};

function ContainerName({ name,isContainer = false,color, ...props }: ContainerNameProps) {
  return (
      <div className={`w-full flex flex-row ${isContainer ? "justify-between" : "justify-center"}   pb-2 text-${color}  ${props.className}`}>
      <h1 className={"russo-one font-bold text-4xl md:mb-5 md:mb-0 "}>
        {name}
      </h1>
      {isContainer ?<Image src={"bolt.svg"} alt={"bolt"} width={15} height={15} className={"md:w-7 md:h-7"}/> : null}
    </div>
  );
};

type ForwardingProps = ComponentProps<"div"> & {
  title: string;
  href: string;
  isContainer?: boolean;
};

function Forwarding({ tittle, href, isContainer = true ,...props}: ForwardingProps) {
  return (
    <div className={`flex flex-row   russo-one ${props.className}`}>
      <Image src={`${isContainer ? "two-arrows-black.svg" : "two-arrows-white.svg"}`} alt={"two arrows"} width={30} height={30}></Image>
      <a className={"pl-2 font-bold text-lg "} href={href}>
        {tittle}
      </a>
    </div>
  );
}

const Current = ({...props }: ComponentProps<"div">) => (
  <div className={`text-secondary-300  justify-items-center russo-one ${props.className}`}>

    <div
      className={" content-card-clip bg-primary flex-grow  w-full max-w-[500px] md:max-w-[900px] px-6 py-4 pb-6  " } style={{ "--clip-size": "20px" }}>
      <ContainerName name={"W trakcie"} isContainer={true} color={"bg"} />
      <div className={"flex flex-col md:flex-row "}>

        <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} color={"secondary-300"} width={800} height={400} />

        <div className={"flex flex-col md:pl-10  md:pt-2 gap-8"}>

          <h1 className={" pt-8 md:pt-0 text-4xl"}>
            HackArena 2.5
          </h1>
          <p className={"font-medium text-xl "}>
            HackArena 2.5 to trzecia edycja hackathonu organizowanego przez Koło Naukowe "init" z SGGW...
          </p>
          <Forwarding tittle={"Dowiedz się więcej"} href={"/wydarzenia/hackArena_2.5"} />

        </div>
      </div>
    </div>
  </div>
);

const BottomImages = ({ ...props }: ComponentProps<"div">) => (
  <div className={`flex flex-col md:flex-row shrink justify-center md:gap-20 gap-10  ${props.className}`}>

    <div className={`  self-center   ${props.className} `}>
      <ContainerName name={"Nadchodzące"} color={"primary"} className={"scale-70"}/>

      <ImageContainer src={"question-mark.svg"} alt={"hackarena 2.5"} width={50} height={50} color={"secondary-400"}  isIcon={true}/>
      <Forwarding tittle={"???"} href={"/wydarzenia/???"} isContainer={false}  className={"pt-3"} />
    </div>

    <div className={"md:pl-20  md:border-solid md:border-l-2 md:border-secondary-300 min-w-0  "}>
      <ContainerName name={"Zakończone"} color={"primary"} className={"scale-70"}/>
      <div className={"flex flex-row overflow-x-scroll snap-x snap-mandatory no-scrollbar w-full md:max-w-[450px]   "}>

        <div className={" mr-5  snap-center snap-always shrink-0"}>
          <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} width={280} height={200}/>
          <Forwarding tittle={"HackArena 2.0"} href={"/wydarzenia/hackArena_2.0"} isContainer={false} className={"pt-3"}/>
        </div>
        <div className={" mr-5 x snap-center snap-always shrink-0 "}>
          <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} width={280} height={200}/>
          <Forwarding tittle={"HackArena 2.0"} href={"/wydarzenia/hackArena_2.0"} isContainer={false} className={"pt-3"}/>
        </div>

        <div className={" mr-5  snap-center snap-always shrink-0"}>
          <ImageContainer src={"/hackarena-2-thumb.jpg"} alt={"HackArena 2.0"} width={280} height={200}/>
          <Forwarding tittle={"HackArena 1.0"} href={"/wydarzenia/hackArena_1.0"} isContainer={false} className={"pt-3"} />
        </div>

      </div>
    </div>
  </div>
);

export default function Events() {
  return (
    <Page className={"flex flex-col gap-10 max-w-[1000px] mx-auto  "}>
      <h1 className={"text-5xl text-primary russo-one pl-4  self-center pr-30 md:self-start md:pl-15 md:pr-0 "}>Wydarzenia</h1>

      <div className={"flex flex-col md:gap-8 gap-10 justify-self-center min-w-0"}>
        <Current className={" "}></Current>
        <BottomImages className={" "} />
      </div>
    </Page>
  );
}
