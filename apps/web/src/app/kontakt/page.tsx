import Link from 'next/link';
import Image from 'next/image';
import { Page } from '@repo/ui';
import { ComponentProps } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontakt | HackArena',
    description: `Masz pytania? Chcesz nawiązać z nami współpracę? Skontaktuj się z nami poprzez skrzynkę mailową lub nasze portale społecznościowe!`,
};

type ContactBlockProps = ComponentProps<'div'> & {
    title: string;
    text: string;
    mail?: string;
    highlight?: boolean;
};

function ContactBlock({
    title,
    text,
    mail,
    highlight = false,
    ...props
}: ContactBlockProps) {
    return (
        <div
            {...props}
            className={`both-corners-clip flex flex-col items-start justify-between ${highlight ? 'bg-primary' : 'bg-secondary-300'} px-6 py-4 pb-6 gap-3 ${props.className}`}
            style={{ '--clip-size': '25px' } as React.CSSProperties}
        >
            <div className="w-full flex items-center justify-between">
                <h2
                    className={`subsubtitle text-2xl sm:text-3xl md:text-nowrap ${highlight ? 'text-background' : 'text-primary'}`}
                >
                    {title}
                </h2>
                {!mail && (
                    <Image src="/bolt.svg" alt="bolt" width="25" height="25" />
                )}
            </div>
            <p
                className={`text-lg ${highlight ? 'text-background' : 'text-secondary-100'}`}
            >
                {text}
            </p>
            {mail ? (
                <div className="flex flex-row gap-4">
                    <Image src={'mail.svg'} alt="mail" width="22" height="22" />
                    <a className="text-lg" href={`mailto:${mail}`}>
                        {mail}
                    </a>
                </div>
            ) : (
                <div className="flex flex-row gap-6 mt-4">
                    <Link
                        href="https://www.facebook.com/kninit/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={'facebook-logo.svg'}
                            alt="Facebook"
                            width="30"
                            height="30"
                        />
                    </Link>
                    <Link
                        href="https://www.instagram.com/kn_init_/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={'instagram-logo.svg'}
                            alt="Instagram"
                            width="30"
                            height="30"
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/company/ko%C5%82o-naukowe-init/about/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={'linkedin-logo.svg'}
                            alt="Linkedin"
                            width="30"
                            height="30"
                        />
                    </Link>
                </div>
            )}
        </div>
    );
}

export default function Contact() {
    return (
        <Page className="flex flex-col gap-10 max-w-[800px] mx-auto">
            <h1 className="title pl-4">Kontakt</h1>
            <div className="flex flex-col gap-8">
                <ContactBlock
                    title="Portale społecznościowe"
                    text="Napisz do nas na naszych portalach społecznościowych!"
                    highlight
                />
                <div className="flex flex-row gap-8 flex-wrap">
                    <ContactBlock
                        className="flex-grow w-0 min-w-[300px]"
                        title="Kontakt ogólny"
                        text="Jeśli masz pytania ogólne lub problem z rejestracją, napisz na adres:"
                        mail="kontakt@hackarena.pl"
                    />
                    <ContactBlock
                        className="flex-grow w-0 min-w-[300px]"
                        title="Współpraca"
                        text="Jeśli jesteś zainteresowany współpracą z nami, napisz na adres:"
                        mail="wspolpraca@hackarena.pl"
                    />
                </div>
            </div>
        </Page>
    );
}
