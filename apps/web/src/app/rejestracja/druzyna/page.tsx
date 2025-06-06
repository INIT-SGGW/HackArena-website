import { Page } from '@repo/ui';
import { Metadata } from 'next';
import { RegisterTeamForm } from '../../../views/Account/RegisterTeamForm';

export const metadata: Metadata = {
    title: 'Rejestracja | HackArena',
    description: `Rejestracja na HackArena - hackathon organizowany przez KNIT`,
    robots: {
        index: false,
        follow: false,
    },
};

export default function RejestracjaDrużyny() {
    return (
        <Page className="flex flex-col items-center gap-4">
            <h1 className="title">Rejestracja</h1>
            <RegisterTeamForm />
            {/* <p className="text-center text-lg">
          Aktualnie nie prowadzimy zapisów. Śledź nasze portale społecznościowe,
          żeby nie przegapić następnego wydarzenia!
        </p>
        <SocialLinks color={'#fff'} size={30} className="w-min pt-7" /> */}
        </Page>
    );
}
