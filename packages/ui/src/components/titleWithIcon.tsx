import Image from 'next/image';
import { ComponentProps, useMemo } from 'react';

type Props = ComponentProps<'h1'> & {
    title: string;
    icon: string;
};

export function TitleWithIcon({ title, icon, ...props }: Props) {
    const [firstPart, secondPart] = useMemo(() => {
        const regex = /({{ icon }})/;
        const match = title.match(regex);

        if (match) {
            const parts = title.split(match[0]);
            return [parts[0], parts[1]];
        }

        return [title, ''];
    }, [title]);

    return (
        <h1
            {...props}
            className={`title text-text text-5xl sm:text-6xl ${props.className}`}
        >
            {firstPart}
            {secondPart && (
                <Image
                    src={icon}
                    className="inline-block align-baseline m-auto w-auto h-[.7em] object-contain px-1"
                    width={50}
                    height={50}
                    alt="⚡"
                />
            )}
            {secondPart}
        </h1>
    );
}
