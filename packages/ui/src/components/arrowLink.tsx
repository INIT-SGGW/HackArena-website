import Link from "next/link";
import { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
    as?: React.ElementType;
    text: string;
    href: string;
    color?: string;
};

export function ArrowLink({ text, href, color = "black", as: Tag = "a", ...props }: Props) {
    return (
        <div {...props} className={`flex flex-row items-center gap-4 ${props.className}`}>
            <svg width="35" height="25" viewBox="0 0 60 25" fill={color} className="h-[1.5em] w-auto" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.2408 24.3457L48.361 24.3457L59.7598 12.3457L43.6395 12.3457L32.2408 24.3457Z" />
                <path d="M0.000269794 24.3457L16.1205 24.3457L27.5193 12.3457L11.399 12.3457L0.000269794 24.3457Z" />
                <path d="M32.2408 0.345703L48.361 0.345703L59.7598 12.3457L43.6395 12.3457L32.2408 0.345703Z" />
                <path d="M0.000270844 0.345703L16.1205 0.345703L27.5193 12.3457L11.399 12.3457L0.000270844 0.345703Z" />
            </svg>
            <Tag href={href}>
                {text}
            </Tag>
        </div>
    );
}