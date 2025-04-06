import { Page } from '@repo/ui';

import { Buttons } from '../views/NotFound/Buttons';

export default function NotFound() {
  return (
    <Page
      className="flex flex-col items-center justify-center gap-8 text-center min-h-[600px]"
      paddingTop="0px"
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="russo-one text-primary text-5xl">Błąd 404</h1>
        <p>Strona, którą próbujesz otworzyć, nie istnieje.</p>
      </div>
      <Buttons />
    </Page>
  );
}
