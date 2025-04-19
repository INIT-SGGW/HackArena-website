import { Page } from '@repo/ui';
import { Metadata } from 'next';
import { RegisterUserFromInvitationForm } from '../../../../views/Account/RegisterUserFromInvitationForm';

export const metadata: Metadata = {
    title: 'Rejestracja | HackArena',
    description: `Rejestracja na HackArena - hackathon organizowany przez KNIT`,
    robots: {
        index: false,
        follow: false,
    },
};

export default function UserRegisterFromInvitationPage() {
    return (
        <Page className="flex flex-col items-center gap-4">
            <h1 className="title">Rejestracja</h1>
            <RegisterUserFromInvitationForm />
        </Page>
    );
}

