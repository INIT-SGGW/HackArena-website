import { Page } from '@repo/ui';
import { Metadata } from 'next';
import { AccountCard } from '../../views/Account/AccountCard';
import { EventsCard } from '../../views/Account/EventsCard';
import { TeamsCard } from '../../views/Account/TeamsCard';
import { AccountTitle } from '../../views/Account/AccountTitle';
import { EventLiveCard } from '../../views/Account/EventLiveCard';

export const metadata: Metadata = {
    title: 'Konto | HackArena',
    description: `Zarządzaj swoim kontem Hackarena, przeglądaj swoje zespoły i wydarzenia, w których brałeś/aś udział.`,
};

export default function LoginPage() {
    return (
        <Page>
            <div className="flex flex-col gap-15 page-width mx-auto">
                <AccountTitle />
                <EventLiveCard />
                <TeamsCard />
                <EventsCard />
                <AccountCard />
            </div>
        </Page>
    );
}
