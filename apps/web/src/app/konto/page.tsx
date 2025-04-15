import { Page } from '@repo/ui';
import { Metadata } from 'next';
import { AccountCard } from '../../views/Account/AccountCard';
import { EventsCard } from '../../views/Account/EventsCard';

export const metadata: Metadata = {
    title: 'Konto | HackArena',
    description: `Zarządzaj swoim kontem Hackarena, przeglądaj swoje zespoły i wydarzenia, w których brałeś/aś udział.`,
}

const mockData = {
    teams: [
        {
            teamId: '1',
            teamName: 'Zespół A',
            members: [
                { id: '1', email: "jan.kowalski@wp.pl", name: 'Jan Kowalski' },
                { id: '2', email: "karolina.sadowska@wp.pl", name: 'Karolina Sadowska' }
            ],
        },
        {
            teamId: '1',
            teamName: 'Zespół A',
            members: [
                { id: '1', email: "jan.kowalski@wp.pl", name: 'Jan Kowalski' },
                { id: '2', email: "karolina.sadowska@wp.pl", name: 'Karolina Sadowska' }
            ],
        },
    ],

}

export default function LoginPage() {
    return (
        <Page>
            <div className='flex flex-col items-center gap-4 page-width mx-auto'>

                <h1
                    className={'russo-one justify-self-center text-primary mb-10 text-5xl'}
                >
                    Konto
                </h1>
                <EventsCard />
                <AccountCard />
            </div>
        </Page>
    );
}
