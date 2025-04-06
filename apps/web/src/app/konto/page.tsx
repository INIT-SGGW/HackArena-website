import { Button, Input, Page } from '@repo/ui';
import Image from 'next/image';

export default function LoginForm() {
  return (
    <Page>
      <h1
        className={'russo-one justify-self-center text-primary mb-10 text-5xl'}
      >
        Logowanie
      </h1>
      <form
        className={
          'content-card-clip bg-secondary-300 flex flex-col w-full max-w-[410px] justify-self-center p-5 gap-1'
        }
      >
        <Input placeholder="Email" label="Email" />
        <Input type="password" placeholder="Hasło" label="Hasło" />
        <div className={'p-1 text-secondary-300'}>żeby było równo :)</div>
        <Button type="submit" fullWidth>
          Zaloguj się
        </Button>
        <div className={'flex flex-row w-full justify-center p-3 '}>
          <Image
            src={'two-arrows-white.svg'}
            alt={'two arrows'}
            width={30}
            height={30}
            className={'mr-4'}
          />
          <a href={'/password/forgot'}>Zapomniałeś hasła?</a>
        </div>
      </form>
    </Page>
  );
}
