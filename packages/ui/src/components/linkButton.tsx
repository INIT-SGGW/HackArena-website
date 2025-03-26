import { ComponentProps } from 'react';
import LightningIcon from '../assets/lightning-outline.svg';
import Image from 'next/image';

type LinkButtonProps = ComponentProps<'a'> & {
  fullWidth?: boolean;
  secondary?: boolean;
  icon?: boolean;
};

export const LinkButton = ({
  children,
  fullWidth = false,
  secondary = false,
  icon = false,
  ...props
}: LinkButtonProps) => {
  return (
    <div className={`relative ${fullWidth ? "w-full" : "w-min"}`}>
      {icon && (
        <Image
          src={LightningIcon}
          height={22}
          alt="⚡"
          className="absolute top-0 left-0 z-200 -translate-x-1/2 -translate-y-[25%]"
        />
      )}
      <a
        {...props}
        className={`${fullWidth ? "w-full" : "w-min"} block bg-primary p-[2px] cursor-pointer button-clip ${props.className}`}
      >
        <div
          className={`${secondary ? 'bg-background text-primary' : 'bg-primary text-background'} py-[calc(var(--spacing)*1.5-2px)] px-6 text-center font-bold button-clip w-full h-full text-nowrap`}
        >
          {children}
        </div>
      </a>
    </div>
  );
};
