type Props = {
    title: string;
};

export function CrossedTitle({ title }: Props) {
    return (
        <div className="relative w-full">
            <h2 className="title z-2 bg-background m-auto text-4xl sm:text-5xl sm:w-fit sm:px-10 sm:text-left">
                {title}
            </h2>
            <div className="absolute w-full h-[4px] bg-primary top-[50%] -translate-y-[50%] left-0 -z-1 hidden sm:block" />
        </div>
    );
}
