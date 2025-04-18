import { Page } from '@repo/ui';
import { Metadata } from 'next';
import { LoginForm } from '../../views/Account/LoginForm';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Login | HackArena',
    description: `Zaloguj się na swoje konto Hackarena, aby zarządzać swoimi zespołami, przeglądać wydarzenia, w których brałeś/aś udział i zapisami się na nowe.`,
    robots: {
        index: false,
        follow: false,
    },
};

export default function LoginPage() {
    return (
        <Page>
            <h1 className="title justify-self-center mb-4">Logowanie</h1>
            <LoginForm />
            <Link
                color="var(--color-primary)"
                className="block justify-self-center mt-3 text-primary"
                href="/rejestracja/uzytkownik"
            >
                Nie masz jeszcze konta?
            </Link>
        </Page>
    );
}
