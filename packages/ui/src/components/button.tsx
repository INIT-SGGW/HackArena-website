"use client";

import { ComponentProps } from 'react';
import LightningIcon from '../assets/lightning-outline.svg';
import Image from 'next/image';

type ButtonProps = ComponentProps<'button'> & {
  fullWidth?: boolean;
  secondary?: boolean;
  icon?: boolean;
};

export const Button = ({
  children,
  fullWidth = false,
  secondary = false,
  icon = false,
  ...props
}: ButtonProps) => {
  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'w-min'}`}>
      {icon && (
        <Image
          src={LightningIcon}
          height={22}
          alt="⚡"
          className="absolute top-0 left-0 z-200 -translate-x-1/2 -translate-y-[25%]"
        />
      )}
      <button
        {...props}
        className={`${fullWidth ? 'w-full' : 'w-min'} box bg-primary p-[2px] cursor-pointer both-corners-clip ${props.className}`}
      >
        <div
          className={`${secondary ? 'bg-background text-primary' : 'bg-primary text-background'} py-[calc(var(--spacing)*2.5-2px)] sm:py-[calc(var(--spacing)*2-2px)]  px-6  font-bold both-corners-clip w-full h-full text-nowrap`}
        >
          {children}
        </div>
      </button>
    </div>
  );
};
