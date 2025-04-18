import { ComponentProps } from 'react';

type Props = ComponentProps<'input'> & {
    label?: string;
    error?: string[];
    checkbox?: boolean;
};

export function Input({
    id,
    label,
    children,
    error,
    checkbox = false,
    ...props
}: Props) {
    return (
        <div className="flex flex-col gap-1">
            <div className={checkbox ? 'flex flex-row-reverse gap-2' : ''}>
                <label htmlFor={id}>{label}</label>
                <input
                    {...props}
                    id={id}
                    className={`bg-text text-background font-bold text-start ${checkbox ? 'mr-2' : 'px-4 py-2.5 sm:py-2 w-full both-corners-clip'}`}
                >
                    {children}
                </input>
            </div>
            {error && <span className="text-sm text-error">{error[0]}</span>}
        </div>
    );
}
