import Link from "next/link";
import Image from "next/image";
//
// import InstagramLogo from "apps/web/public/facebook-logo.svg"
// import FacebookLogo from "apps/web/public/instagram-logo.svg"
// import LinkedinLogo from "apps/web/public/linkedin-logo.svg"
export default function Page() {
  return (
    <div className={"font-jet-brains"}>
      <h1 className="ml-35 text-6xl font-extrabold text-primary md:text-4xl  md:mb-10">
        Kontakt
      </h1>
      <div
        className="w-[1270px] h-[714px] grid grid-cols-2 grid-rows-2 gap-[56px] justify-self-center md:w-[750px] md:h-[400px] md:mb-5 md:gap-[30]">
        <div
          className={
            "col-span-2 row-span-1  bg-(--color-primary) large-container "
          }
        >
          <div className={"ml-10 text-(--color-secondary-300) flex flex-row justify-between md:mt-3 md:ml-8"}>
            <p className={"text-6xl md:text-3xl font-bold   "}>
              Portale społecznościowe
            </p>
            <Image
              src={"bolt.svg"}
              alt="alt"
              width="25"
              height="25"
              className={"mx-10"}
            />
          </div>
          <div
            className={
              "ml-10 mt-10 text-(--color-secondary-300) flex flex-col md:mt-2 md:ml-8"
            }
          >
            <p className={"text-4xl mb-5 md:text-xl"}>
              Napisz do nas na naszych portalach społecznościowych!
            </p>
            <div className={"flex flex-row  md:mt-5"}>
              <Link
                href="https://www.instagram.com/kn_init_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"instagram-logo.svg"}
                  alt="Instagram"
                  width="70"
                  height="70"
                  className={"mx-5 md:w-[35] md:h-[35] md:mx-3"}
                />
              </Link>
              <Link
                href="https://www.facebook.com/kninit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"facebook-logo.svg"}
                  alt="alt"
                  width="70"
                  height="70"
                  className={"mx-5 md:w-[35] md:h-[35] md:mx-3"}
                />
              </Link>

              <Link
                href="https://www.linkedin.com/company/ko%C5%82o-naukowe-init/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"linkedin-logo.svg"}
                  alt="Linkedin"
                  width="70"
                  height="70"
                  className={"mx-5 md:w-[35] md:h-[35] md:mx-3"}
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "col-span-1 row-span-1 bg-(--color-secondary-300) small-container "
          }
        >
          <h1
            className={
              "ml-10 mt-10 text-primary text-6xl font-bold md:text-3xl md:mt-3  md:ml-8"
            }
          >
            Kontakt ogólny
          </h1>
          <p
            className={
              "ml-10  text-4xl text-secondary-100  md:text-xl md:mt-1 md:ml-8"
            }
          >
            Jeśli masz pytania ogólne lub problem z rejestracją, napisz na
            adres:
          </p>
          <div className={"flex flex-row justify-around"}>
            <Image
              src={"mail.svg"}
              alt="mail"
              width="22"
              height="22"
              className={"ml-5"}
            />
            <a className={" mr-10  text-3xl  md:text-xl "}
               href={"mailto:kontakt@hackrena.pl"}>kontakt@hackarena.pl</a>
          </div>
        </div>
        <div
          className={
            "col-span-1 row-span-1 bg-(--color-secondary-300) small-container "
          }
        >
          <h1
            className={
              "ml-10 mt-10 text-primary text-6xl font-bold md:text-3xl md:mt-3  md:ml-8"
            }
          >
            Współpraca
          </h1>
          <p
            className={
              "ml-10  text-4xl text-secondary-100  md:text-xl md:mt-1 md:ml-8"
            }
          >
            Jeśli jesteś zainteresowany współpracą z nami, napisz na adres:
          </p>
          <div className={'flex flex-row justify-around'}>
            <Image
              src={"mail.svg"}
              alt="mail"
              width="22"
              height="22"
              className={"ml-6"}
            />
            <a className={"  text-3xl  md:text-xl "}
               href={"mailto:wspolpraca@hackrena.pl"}>wspolpraca@hackarena.pl</a>
          </div>
        </div>
      </div>
    </div>

  );
}
