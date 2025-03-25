import Image from 'next/image';

export default function LoginForm() {
  return (
    <div className={' font-jet-brains font-bold '}>
      <h1 className={'justify-self-center text-primary mb-10 text-5xl'}>
        Logowanie
      </h1>
      <div
        className={
          'content-card-clip bg-secondary-300 flex flex-col w-full max-w-[410px] justify-self-center  '
        }
        style={{ '--clip-size': '25px' }}
      >
        <div className={'p-5'}>
          <div className={'p-1'}>Email</div>
          <div
            className={
              'content-card-clip  bg-text text-secondary-300 min-h-[35px]'
            }
            style={{ '--clip-size': '14px' }}
          >
            <input
              className={'pl-4 pt-1 text-start  outline-none w-full '}
              type={'text'}
              placeholder={'Email'}
            />
          </div>

          <div className={'p-1'}>Hasło</div>
          <div
            className={
              'content-card-clip bg-text text-secondary-300 min-h-[35px] '
            }
            style={{ '--clip-size': '14px' }}
          >
            <input
              className={'pl-4 pt-1 text-start outline-none w-full '}
              type={'password'}
              placeholder={'Hasło'}
            />
          </div>

          <div className={'p-1 text-secondary-300'}>żeby było równo :)</div>
          <div
            className={
              'button-clip bg-primary text-secondary-300 text-black flex items-center justify-center min-h-[35px]'
            }
          >
            <button className={'cursor-pointer '}>Zaloguj się</button>
          </div>
          <div className={'flex flex-row p-3 justify-self-center'}>
            <Image
              src={'two-arrows.svg'}
              alt={'two arrows'}
              width={30}
              height={30}
              className={'mr-4'}
            />
            {/* missing attachment  */}
            <a href={'XYZ'}>Zapomniałeś hasła?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
