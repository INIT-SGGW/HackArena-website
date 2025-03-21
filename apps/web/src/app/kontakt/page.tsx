import Link from "next/link";
import Image from "next/image";
//
// import InstagramLogo from "apps/web/public/facebook-logo.svg"
// import FacebookLogo from "apps/web/public/instagram-logo.svg"
// import LinkedinLogo from "apps/web/public/linkedin-logo.svg"
export default function Page() {
  return (
    <div className={"font-jet-brains md:scale-75 md:absolute md:top-5  "}>
      <h1 className="text-4xl  pl-5 pb-10 font-black text-primary md:pl-10 md:text-6xl ">
        Kontakt
      </h1>
      <div
        className="grid grid-cols-1 grid-rows-3 gap-10 md:gap-15 max-w-[450px]   md:max-w-[1000px] md:max-h-[550px] md:grid md:grid-cols-2 md:grid-rows-2  md:justify-self-center   ">
        <div className={"container bg-primary col-span-1 row-span-1   md:col-span-2 md:row-span-1"}>
          <div className={"p-5 text-secondary-300  flex flex-col justify-between  md:pt-8 md:pl-8 shrink-0"}>
            <div className={"flex flex-row justify-between "}>
              <h1 className={"text-3xl font-black md:text-4xl "}>
                Portale społecznościowe
              </h1>

              <Image
                src={"bolt.svg"}
                alt="alt"
                width="25"
                height="25"
                className={"mr-2 md:mr-8 "} />
            </div>
            <div className={"pt-5 flex flex-col text-secondary-300 md:pt-4 "}>
              <p className={"text-xl text-black   md:text-2xl"}>
                Napisz do nas na naszych portalach społecznościowych!
              </p>
              <div className={"flex flex-row py-5 md:pt-10 md:pb-0"}>
                <Link
                  href="https://www.instagram.com/kn_init_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"instagram-logo.svg"}
                    alt="Instagram"
                    width="35"
                    height="35"
                    className={"mr-5 md:w-[45] md:h-[45] md:mr-5"}
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
                    width="35"
                    height="35"
                    className={"mx-5 md:w-[45] md:h-[45] md:mx-5"}
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
                    width="35"
                    height="35"
                    className={"mx-5 md:w-[45] md:h-[45] md:mx-5"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={"container bg-secondary-300  col-span-1 row-span-1 "}>
          <div className={"p-5 md:py-5 md:px-8"}>
            <h1 className={" text-3xl font-black text-primary  md:text-4xl md:min-w-[366px] "}>
              Kontakt ogólny
            </h1>
            <p className={"text-xl text-black  text-secondary-100 md:text-2xl pt-5  "}>
              Jeśli masz pytania ogólne lub problem z rejestracją, napisz na adres:
            </p>
            <div className={"flex flex-row py-5 md:pt-5 md:pb-0 "}>
              <Image
                src={"mail.svg"}
                alt="mail"
                width="22"
                height="22"
                className={"mr-5"}
              />
              <a className={"   text-xl  md:text-2xl "} href={"mailto:kontakt@hackrena.pl"}>kontakt@hackarena.pl</a>
            </div>
          </div>
        </div>
        <div
          className={"container bg-secondary-300  col-span-1 row-span-1 md:min-w-[366px]"}>
          <div className={"p-5 md:py-5 md:px-8"}>
            <h1 className={" text-3xl font-black text-primary  md:text-4xl "}>
              Współpraca
            </h1>
            <p className={"text-lg text-black  text-secondary-100 md:text-2xl pt-5 "}>
              Jeśli jesteś zainteresowany współpracą z nami, napisz na adres:
            </p>
            <div className={"flex flex-row py-5 md:pt-5 md:pb-0"}>
              <Image
                src={"mail.svg"}
                alt="mail"
                width="22"
                height="22"
                className={"mr-5"}
              />
              <a className={"   text-lg  md:text-2xl "}
                 href={"mailto:wspolpraca@hackrena.pl"}>wspolpraca@hackarena.pl</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
