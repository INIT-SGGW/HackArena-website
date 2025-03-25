import { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
    label: string;
}

export function Input({ id, label, children, ...props }: Props) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} >{label}</label>
            <input
                {...props}
                id={id}
                className={'button-clip bg-text text-background font-bold px-4 py-1.5 text-start w-full'}
            >
                {children}
            </input>
        </div>
    )
}