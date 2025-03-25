import { ComponentProps } from "react";
import LightningIcon from "../assets/lightning-outline.svg";
import Image from "next/image";

type ButtonProps = ComponentProps<'button'> & {
  secondary?: boolean;
  icon?: boolean;
};

export const Button = ({
  children,
  secondary = false,
  icon = false,
  ...props
}: ButtonProps) => {
  return (
    <div className="relative w-min">
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
        className={`w-min bg-primary p-[2px] cursor-pointer button-clip ${props.className}`}
      >
        <div
          className={`${secondary ? 'bg-background text-primary' : 'bg-primary text-background'} px-6 p-[2px] font-bold button-clip w-full h-full text-nowrap`}
        >
          {children}
        </div>
      </button>
    </div>
  );
};
