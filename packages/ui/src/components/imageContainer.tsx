import React, { ComponentProps } from "react";
import Image from 'next/image';

type ImageContainerProps = ComponentProps<'div'> & {
  tittle:string,
  color: string,
  src: string,
  href: string,
  hrefTittle:string

}
export  const ImageContainer = ({
  color,
  src,
  href,
  hrefTittle
}: ImageContainerProps) =>{
  return (
    <div>
      <div className={"w-[200px] h-[110px] relative"}>
        <Image src={src} alt={src} layout={"fill"}></Image>
      </div>
      {/*<div className={"relative w-[200px] h-[110px] bg-secondary-300 relative"}>*/}

      {/*  <div className={`clip-trapeze  shrink-0 absolute top-0 left-0 rotate-180 w-full h-full  bg-${color} z-20`}></div>*/}

      {/*  <div className={"flex w-full h-full border-solid border-4 border-background z-10  justify-center"}>*/}
      {/*    <Image src={`${src}`} alt={`${src}`}layout={"fill"} className={""}></Image>*/}
      {/*  </div>*/}

      {/*  <div className={`clip-trapeze shrink-0 absolute top-0 left-0  bg-${color} w-full h-full z-20`}></div>*/}

      {/*</div>*/}

      <div className={"flex flex-row mt-4"}>
        <Image src={"two-arrows-white.svg"} alt={"two arrows white"} width={30} height={30}></Image>
        <a className={"pl-3"} href={`${href}`}>{hrefTittle}</a>
      </div>

    </div>
  );
}