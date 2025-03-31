import React, { ComponentProps } from 'react';
import Image from 'next/image';

type ImageContainerProps = ComponentProps<'div'> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  color: string;
  isIcon: boolean;
};
export const ImageContainer = ({
  src,
  alt,
  width,
  height,
  color,
  isIcon = false,
  ...props
}: ImageContainerProps) => {
  return (
    <div className={`${isIcon ? "md:w-full md:h-full min-w-[280px]" : `w-${width } h-${height} max-w-[400px]`} p-2 ribbon ribbon-${color}   relative z-10  self-center`}>
      <div className={`w-full h-full flex  min-h-[200] justify-center `}>
        <Image
          src={src}
          alt={alt}
          className={`${isIcon ? "z-20 " : "ribbon-photo-clip  "}  ${props.className} `}
          width={width}
          height={height}
        />
        {isIcon ? (<div className={`w-full h-full   max-w-[270px] max-h-[210px] bg-secondary-500  self-center  absolute ribbon-photo-clip z-0`}></div>) : null}
      </div>
      <div className={`ribbon-photo-clip absolute inset-0 flex flex-col  justify-center items-center 
      ${isIcon ? null: `bg-background  mix-blend-color w-full  `}`} />
    </div>
    );
};
