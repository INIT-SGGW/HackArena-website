import { Page, SocialLinks } from '@repo/ui';
import { Metadata } from 'next';
import { RegisterForm } from '../../../views/Account/RegisterForm';

const metadata: Metadata = {
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
      <h1 className="text-5xl text-primary font-bold russo-one">
        Rejestracja
      </h1>
      <RegisterForm />
      {/* <p className="text-center text-lg">
          Aktualnie nie prowadzimy zapisów. Śledź nasze portale społecznościowe,
          żeby nie przegapić następnego wydarzenia!
        </p>
        <SocialLinks color={'#fff'} size={30} className="w-min pt-7" /> */}
    </Page>
  );
}
