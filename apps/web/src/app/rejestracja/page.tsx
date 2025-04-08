import { Page, SocialLinks } from '@repo/ui';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Rejestracja | HackArena',
  description: `Rejestracja na HackArena - hackathon organizowany przez KNIT`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function Rejestracja() {
  return (
    <Page className="flex flex-col items-center" paddingTop="7rem">
      <div className="page-width !max-w-[700px] flex flex-col items-center gap-4">
        <h1 className="text-4xl text-primary font-bold russo-one">
          Rejestracja
        </h1>
        <p className="text-center text-lg">
          Aktualnie nie prowadzimy zapisów. Śledź nasze portale społecznościowe,
          żeby nie przegapić następnego wydarzenia!
        </p>
        <SocialLinks color={'#fff'} size={30} className="w-min pt-7" />
      </div>
    </Page>
  );
}
