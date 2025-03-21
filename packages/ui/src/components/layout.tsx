import Link from 'next/link';
import Image from 'next/image';

import FacebookLogo from '../assets/facebook-logo.svg';
import InstagramLogo from '../assets/instagram-logo.svg';
import LinkedinLogo from '../assets/linkedin-logo.svg';
import { TopBar } from './topBar';

export type NavProps = {
  navItems: {
    label: string;
    href: string;
    highlight?: boolean;
  }[];
};

type FooterProps = NavProps;

const Footer = ({ navItems }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center gap-16 md:gap-30 pt-4 pb-2 md:pb-6 bg-secondary-300 w-full z-30">
      <div className="flex flex-col-reverse md:grid grid-cols-[50%_1fr] gap-10 md:gap-16 w-full">
        <nav>
          <ul className="flex flex-col md:flex-row justify-end gap-8 items-center h-full">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${item.highlight ? 'text-primary' : ''} text-xl font-bold my-auto`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="bg-primary p-4 md:pl-[60px] w-full cut-corner">
          <div className="w-full flex flex-row gap-10 justify-center md:justify-start md:pl-15">
            <Link
              href="https://www.facebook.com/kninit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={FacebookLogo} alt="Facebook" height="25" />
            </Link>
            <Link
              href="https://www.instagram.com/kn_init_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={InstagramLogo} alt="Instagram" height="25" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/ko%C5%82o-naukowe-init/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LinkedinLogo} alt="Linkedin" height="25" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-xs sm:text-sm md:text-base">
        Ⓒ {year} KN init. Wszystkie prawa zastrzeżone.
      </p>
    </footer>
  );
};

type RootLayoutProps = NavProps & {
  children: React.ReactNode;
  adminPanel?: boolean;
};

export const Layout = ({ children, navItems }: RootLayoutProps) => {
  return (
    <html lang="pl">
      <body className="flex flex-col items-center min-h-screen bg-background text-text jet-brains">
        <TopBar navItems={navItems} />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer navItems={navItems} />
      </body>
    </html>
  );
};
