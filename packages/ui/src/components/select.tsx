import { ComponentProps } from 'react';

type Props = ComponentProps<'select'> & {
    label?: string;
    error?: string[];
    options: string[];
};

export function Select({ id, label, error, options, ...props }: Props) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id}>{label}</label>
            <select
                {...props}
                id={id}
                className={`bg-text text-background font-bold text-start px-4 py-2.5 sm:py-2 w-full both-corners-clip`}
            >
                {options.map((value, index) => {
                    return (
                        <option key={index} value={value.toLowerCase()}>
                            {value}
                        </option>
                    );
                })}
            </select>
            {error && <span className="text-sm text-error">{error[0]}</span>}
        </div>
    );
}
