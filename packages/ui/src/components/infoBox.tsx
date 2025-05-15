import { LinkButton } from "./linkButton";

type Props = {
    title: string;
    text: string;
    buttonText?: string;
    href?: string;
    newTab?: boolean;
}

export function InfoBox({ title, text, buttonText, href, newTab = false }: Props) {
    return (
        <div className="flex flex-col both-corners-clip bg-primary p-4">
            <h2 className="subtitle text-background">{title}</h2>
            <p className="text-background" dangerouslySetInnerHTML={{ __html: text }}></p>
            {
                buttonText && href ? (
                    <LinkButton
                        href={href}
                        className="mt-4"
                        secondary
                        fullWidth
                        target={newTab ? "_blank" : undefined}
                        rel={newTab ? "noopener noreferrer" : undefined}
                    >
                        {buttonText}
                    </LinkButton>
                ) : null
            }
        </div>
    )
}