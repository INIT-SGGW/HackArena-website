import { Page } from '@repo/ui';
import { Metadata } from 'next';
import { AccountCard } from '../../views/Account/AccountCard';

export const metadata: Metadata = {
    title: 'Konto | HackArena',
    description: `Zarządzaj swoim kontem Hackarena, przeglądaj swoje zespoły i wydarzenia, w których brałeś/aś udział.`,
}

export default function LoginPage() {
    return (
        <Page>
            <h1
                className={'russo-one justify-self-center text-primary mb-10 text-5xl'}
            >
                Konto
            </h1>
            <AccountCard />
        </Page>
    );
}
