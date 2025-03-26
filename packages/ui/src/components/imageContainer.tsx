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
  width = 400,
  height = 200,
  color,
  isIcon = false,
  ...props
}: ImageContainerProps) => {
  return (
    <div
      className={`p-2 ribbon ribbon-${color} w-full min-h-[200] h-[${height}] relative z-30 ${isIcon ? 'w-[300px] h-[200px]' : ''}`}
    >
      <div
        className={`w-full h-full flex h-[${height}] min-h-[200] justify-center  `}
      >
        <Image
          src={src}
          alt={alt}
          className={`ribbon-photo-clip  ${props.className} ${isIcon ? 'z-10 ' : ''}`}
          width={width}
          height={height}
        />
      </div>
      <div
        className={`ribbon-photo-clip absolute inset-0 flex flex-col  justify-center items-center ${!isIcon ? 'bg-background  mix-blend-color w-full min-h-[200] h-[${height}]' : `bg-secondary-500 scale-97  w-[300px] h-[200px]`}`}
      />
    </div>
  );
};
