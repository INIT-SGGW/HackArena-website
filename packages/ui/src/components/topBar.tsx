'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NavProps } from './layout';
import { useEffect, useState } from 'react';

import HackarenaLogo from '../assets/hackarena-logo.svg';
import SGGWLogo from '../assets/sggw-logo.svg';
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

  useEffect(() => {
    const handleColorChange = () => {
      const primaryColor = getComputedStyle(
        document.documentElement,
      ).getPropertyValue('--color-primary');
      const crossIcon = document.querySelectorAll<SVGElement>('#cross-icon');
      const menuIcon = document.querySelectorAll<SVGElement>('#menu-icon');

      crossIcon.forEach((icon) => {
        icon.setAttribute('fill', primaryColor);
      });

      menuIcon.forEach((icon) => {
        icon.setAttribute('fill', primaryColor);
      });
    };

    document.addEventListener('primary-color-change', handleColorChange);

    return () => {
      document.removeEventListener('primary-color-change', handleColorChange);
    };
  }, []);

  return (
    <header
      className={`flex flex-row justify-between items-center p-8 max-w-[1920px] w-full transition-colors duration-150 border-secondary-300 border-b-0 ${scrolledToTop ? '' : 'bg-background border-b-1'}`}
    >
      <div className="flex flex-row items-center gap-4">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image id="logo" src={HackarenaLogo} alt="Hackarena" height="25" />
        </Link>
        <div className="bg-secondary-100 w-[1px] h-[28px]" />
        <Link
          href="https://sggw.edu.pl/"
          onClick={() => setIsMenuOpen(false)}
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
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 39"
            fill="#FFD200"
            id="cross-icon"
            className={`${isMenuOpen ? 'visible' : 'hidden'}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M39.4456 3.59035L4.09022 38.9457L0.554688 35.4102L32.3745 3.59035L39.4456 3.59035Z" />
            <path d="M35.9096 38.9456L4.08984 7.12576V0.0546875L39.4452 35.41L35.9096 38.9456Z" />
          </svg>
          <svg
            width="30"
            height="30"
            viewBox="0 0 50 43"
            id="menu-icon"
            fill="#FFD200"
            className={`${isMenuOpen ? 'hidden' : 'visible'}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 5H0L0 0L45 0L50 5Z" />
            <path d="M50 24H0V19H50V24Z" />
            <path d="M50 43H5L0 38H50V43Z" />
          </svg>
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
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full flex flex-col items-center justify-between bg-background z-40 pb-4 
        ${isMenuOpen ? '' : 'translate-x-full'} transform transition-transform duration-250 ease-in-out bg-[url('/side-menu-bg.svg')] bg-right bg-cover`}
    >
      <div className="w-full flex flex-col items-center gap-20">
        <Header
          isMobile={isMobile}
          navItems={navItems}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <nav>
          <ul className="flex flex-col gap-12 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${item.highlight ? 'text-primary' : ''} text-3xl font-bold`}
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
