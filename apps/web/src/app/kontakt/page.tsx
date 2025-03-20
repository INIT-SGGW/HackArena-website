import Link from "next/link";
import Image from "next/image";
//
// import InstagramLogo from "apps/web/public/facebook-logo.svg"
// import FacebookLogo from "apps/web/public/instagram-logo.svg"
// import LinkedinLogo from "apps/web/public/linkedin-logo.svg"
export default function Page() {
  return (
    <div className={"font-jet-brains"}>
      <h1 className="text-4xl  ml-5 mb-5 font-extrabold text-primary md:ml-35 md:text-6xl ">
        Kontakt
      </h1>
      <div className=" w-full flex flex-col md:grid md:grid-cols-2 md:grid-rows-2  md:justify-self-center md:w-[750px] md:h-[400px] md:mb-5 md:gap-[30] ">
        <div
          className={"container bg-(--color-primary) w-full h-[200px] mb-5 md:col-span-2 row-span-1 "}>
          <div className={"ml-2 text-(--color-secondary-300) mt-2 flex flex-row justify-between  md:ml-5"}>
            <h1 className={"text-2xl font-black md:text-4xl "}>
              Portale społecznościowe
            </h1>
            <Image
              src={"bolt.svg"}
              alt="alt"
              width="25"
              height="25"
              className={"mr-10 "}
            />
          </div>
          <div className={"ml-2 flex flex-col text-(--color-secondary-300) md:mt-5 md:ml-5"}>
            <p className={"text-lg text-black my-3  md:text-xl"}>
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
                  width="35"
                  height="35"
                  className={"mx-5 md:w-[45] md:h-[45] md:mx-3"}
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
                  className={"mx-5 md:w-[45] md:h-[45] md:mx-3"}
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
                  className={"mx-5 md:w-[45] md:h[45] md:mx-3"}
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={"w-full h-[200px] bg-(--color-secondary-300) container mb-5 md:col-span-1 md:row-span-1 "}>
          <h1
            className={"ml-2 mt-2 text-2xl font-black text-primary  md:text-4xl md:mt-3  md:ml-5"}>
            Kontakt ogólny
          </h1>
          <p className={"text-lg text-black my-3 ml-2 text-secondary-100 md:text-xl md:mt-2 md:ml-5"}>
            Jeśli masz pytania ogólne lub problem z rejestracją, napisz na
            adres:
          </p>
          <div className={"flex flex-row "}>
            <Image
              src={"mail.svg"}
              alt="mail"
              width="22"
              height="22"
              className={"mx-5"}
            />
            <a className={" mr-10  text-lg  md:text-xl "}
               href={"mailto:kontakt@hackrena.pl"}>kontakt@hackarena.pl</a>
          </div>
        </div>
        <div className={"w-full h-[200px] bg-(--color-secondary-300) container mb-5 md:col-span-1 md:row-span-1 "}>
          <h1 className={"ml-2 mt-2 text-2xl font-black  text-primary  md:text-4xl md:mt-3  md:ml-5"}>
            Współpraca
          </h1>
          <p
            className={"text-lg text-black my-3 ml-2 text-secondary-100 md:text-xl md:mt-2 md:ml-5"}>
            Jeśli jesteś zainteresowany współpracą z nami, napisz na adres:
          </p>
          <div className={'flex flex-row '}>
            <Image
              src={"mail.svg"}
              alt="mail"
              width="22"
              height="22"
              className={"mx-5"}
            />
            <a className={" mr-10  text-lg  md:text-xl "}
               href={"mailto:wspolpraca@hackrena.pl"}>wspolpraca@hackarena.pl</a>
          </div>
        </div>
      </div>
    </div>

  );
}
