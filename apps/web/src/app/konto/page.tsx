import { ArrowLink, Button, Input, Page } from '@repo/ui';

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
          'both-corners-clip bg-secondary-300 flex flex-col w-full max-w-[410px] justify-self-center p-5 gap-1'
        }
        style={{ '--clip-size': '25px' } as React.CSSProperties}
      >
        <Input placeholder="Email" label="Email" />
        <Input type="password" placeholder="Hasło" label="Hasło" />
        <div className={'p-1 text-secondary-300'}>żeby było równo :)</div>
        <Button type="submit" fullWidth>
          Zaloguj się
        </Button>
        <ArrowLink color="white" className='justify-center mt-3' text="Zapomniałeś/aś hasła?" href="/password/forgot" />
      </form>
    </Page>
  );
}
