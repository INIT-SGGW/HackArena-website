import { Page } from '@repo/ui';

import { Buttons } from '../views/NotFound/Buttons';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 | HackArena',
    description: `Nie znaleziono strony Hackarena`,
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <Page
            className="flex flex-col items-center justify-center gap-8 text-center min-h-[600px]"
            paddingTop="0px"
        >
            <div className="flex flex-col items-center gap-2">
                <h1 className="title">Błąd 404</h1>
                <p>Strona, którą próbujesz otworzyć, nie istnieje.</p>
            </div>
            <Buttons />
        </Page>
    );
}
