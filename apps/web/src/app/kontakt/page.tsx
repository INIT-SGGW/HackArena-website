import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <div
      className={' justify-self-center md:relative md:w-full md:h-full   font-jet-brains md:scale-85 mt-10'}
    >
      <div className="  max-w-[450px]    flex flex-col gap-y-10    md:max-w-[1000px] md:max-h-[600px] md:place-self-center ">
        <h1 className="text-4xl  pl-5  font-black text-primary :pl-10  ">
          Kontakt
        </h1>
        <div
          className={
            'content-card-clip bg-primary col-span-1 row-span-1   md:col-span-2 md:row-span-1'
          }
        >
          <div
            className={
              'p-5 text-secondary-300  flex flex-col justify-between  md:pt-8 md:pl-8 shrink-0'
            }
          >
            <div className={'flex flex-row justify-between '}>
              <h1 className={'text-3xl font-black md:text-4xl '}>
                Portale społecznościowe
              </h1>

              <Image
                src={'bolt.svg'}
                alt="alt"
                width="25"
                height="25"
                className={'mr-2 md:mr-8 '}
              />
            </div>
            <div className={'pt-5 flex flex-col text-secondary-300 md:pt-4 '}>
              <p className={'text-xl text-black   md:text-2xl'}>
                Napisz do nas na naszych portalach społecznościowych!
              </p>
              <div className={'flex flex-row py-5 md:pt-10 md:pb-0'}>
                <Link
                  href="https://www.instagram.com/kn_init_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={'instagram-logo.svg'}
                    alt="Instagram"
                    width="35"
                    height="35"
                    className={'mr-5 md:w-[45] md:h-[45] md:mr-5'}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/kninit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={'facebook-logo.svg'}
                    alt="alt"
                    width="35"
                    height="35"
                    className={'mx-5 md:w-[45] md:h-[45] md:mx-5'}
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/ko%C5%82o-naukowe-init/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={'linkedin-logo.svg'}
                    alt="Linkedin"
                    width="35"
                    height="35"
                    className={'mx-5 md:w-[45] md:h-[45] md:mx-5'}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            'flex flex-col gap-y-10 md:flex md:flex-row md:justify-between md:items-stretch md:gap-x-15 '
          }
        >
          <div
            className={
              'content-card-clip bg-secondary-300  md:flex-1 md:min-w-0 '
            }
          >
            <div className={'p-5 md:py-5 md:px-8 md:flex-grow '}>
              <h1 className={'text-3xl font-black text-primary  md:text-4xl'}>
                Kontakt ogólny
              </h1>
              <p
                className={
                  'text-xl text-black  text-secondary-100 md:text-2xl pt-8  '
                }
              >
                Jeśli masz pytania ogólne lub problem z rejestracją, napisz na
                adres:
              </p>
              <div
                className={
                  'flex flex-row py-5 md:py-8  flex-shrink md:pt-8 md:pb-2 '
                }
              >
                <Image
                  src={'mail.svg'}
                  alt="mail"
                  width="22"
                  height="22"
                  className={''}
                />
                <a
                  className={'   text-xl  md:text-xl px-4'}
                  href={'mailto:kontakt@hackrena.pl'}
                >
                  kontakt@hackarena.pl
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              'content-card-clip bg-secondary-300  md:flex-grow md:flex-1 md:min-w-0 md:relative'
            }
          >
            <div className={'p-5 md:py-5 md:px-8'}>
              <h1 className={' text-3xl font-black text-primary  md:text-4xl '}>
                Współpraca
              </h1>
              <div className={'md:flex md:flex-col md:justify-between'}></div>
              <p
                className={
                  'text-lg text-black  text-secondary-100 md:text-2xl pt-8 '
                }
              >
                Jeśli jesteś zainteresowany współpracą z nami, napisz na adres:
              </p>
              <div
                className={
                  'flex flex-row md:self-end  py-4 md:pt-8 md:pb-2 md:flex-grow md:absolute md:bottom-5'
                }
              >
                <Image
                  src={'mail.svg'}
                  alt="mail"
                  width="22"
                  height="22"
                  className={''}
                />
                <a
                  className={'   text-lg  md:text-xl px-4'}
                  href={'mailto:wspolpraca@hackrena.pl'}
                >
                  wspolpraca@hackarena.pl
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
