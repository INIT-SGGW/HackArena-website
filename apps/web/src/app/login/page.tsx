import { Page } from '@repo/ui';
import { Metadata } from 'next';
import { LoginForm } from '../../views/Account/LoginForm';

export const metadata: Metadata = {
  title: 'Login | HackArena',
  description: `Zaloguj się na swoje konto Hackarena, aby zarządzać swoimi zespołami, przeglądać wydarzenia, w których brałeś/aś udział i zapisami się na nowe.`,
  robots: {
    index: false,
    follow: false,
  },
}

export default function LoginPage() {

  return (
    <Page>
      <h1
        className={'russo-one justify-self-center text-primary mb-10 text-5xl'}
      >
        Logowanie
      </h1>
      <LoginForm />
    </Page>
  );
}
