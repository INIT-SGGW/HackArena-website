'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NavProps } from './layout';
import { useEffect, useState } from 'react';

import HackarenaLogo from '../assets/hackarena-logo.svg';
import SGGWLogo from '../assets/sggw-logo.svg';
import MenuIcon from '../assets/menu-icon.svg';
import CrossIcon from '../assets/cross-yellow.svg';
import FacebookLogo from '../assets/facebook-logo.svg';
import InstagramLogo from '../assets/instagram-logo.svg';
import LinkedinLogo from '../assets/linkedin-logo.svg';

type HeaderProps = NavProps & {
  isMobile: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  isMenuOpen: boolean;
};

const Header = ({
  isMobile,
  navItems,
  setIsMenuOpen,
  isMenuOpen,
}: HeaderProps) => {
  const [scrolledToTop, setScrolledToTop] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleBackgroundChange = () => {
      setScrolledToTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleBackgroundChange);

    return () => window.removeEventListener('scroll', handleBackgroundChange);
  }, []);

  return (
    <header className={`flex flex-row justify-between items-center p-8 max-w-[1920px] w-full transition-colors duration-150 border-secondary-300 border-b-0 ${scrolledToTop ? '' : 'bg-background border-b-1'}`}>
      <div className="flex flex-row items-center gap-4">
        <Link href="/">
          <Image src={HackarenaLogo} alt="Hackarena" height="25" />
        </Link>
        <div className="bg-secondary-100 w-[1px] h-[28px]" />
        <Link
          href="https://sggw.edu.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={SGGWLogo} alt="Hackarena" height="32" />
        </Link>
      </div>
      {isMobile ? (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer"
        >
          {isMenuOpen ? (
            <Image src={CrossIcon} alt="Menu" height="25" />
          ) : (
            <Image src={MenuIcon} alt="Menu" height="25" />
          )}
        </button>
      ) : (
        <nav>
          <ul className="flex flex-row gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${item.highlight ? 'text-primary' : ''} text-xl font-bold`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

const SideMenu = ({
  isMenuOpen,
  isMobile,
  navItems,
  setIsMenuOpen,
}: HeaderProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full flex flex-col items-center justify-between bg-background z-40 pb-4 
        ${isMenuOpen ? '' : 'translate-x-full'} transform transition-transform duration-250 ease-in-out bg-[url('/side-menu-bg.svg')] bg-right bg-cover`}
    >
      <div className="w-full flex flex-col items-center gap-10">
        <Header
          isMobile={isMobile}
          navItems={navItems}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <nav>
          <ul className="flex flex-col gap-10 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${item.highlight ? 'text-primary' : ''} text-xl font-bold`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="bg-primary p-4 w-full cut-corner">
        <div className="w-full flex flex-row gap-10 justify-center">
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
  );
};

type TopBarProps = NavProps;

export const TopBar = ({ navItems }: TopBarProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsMobile(window.innerWidth < 640);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth > 640) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full z-35 flex justify-center fixed top-0">
      <Header
        isMobile={isMobile}
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {isMobile && (
        <SideMenu
          isMobile={isMobile}
          navItems={navItems}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </div>
  );
};
