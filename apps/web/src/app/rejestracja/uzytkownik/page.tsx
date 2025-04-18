import { Page, SocialLinks } from '@repo/ui';
import { Metadata } from 'next';
import { RegisterForm } from '../../../views/Account/RegisterForm';
import { RegisterUserForm } from '../../../views/Account/RegisterUserForm';

const metadata: Metadata = {
  title: 'Rejestracja | HackArena',
  description: `Rejestracja na HackArena - hackathon organizowany przez KNIT`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function RejestracjaUżytkownika() {
  return (
    <Page className="flex flex-col items-center gap-4">
      <h1 className="title">
        Rejestracja
      </h1>
      <RegisterUserForm />
    </Page>
  );
}
