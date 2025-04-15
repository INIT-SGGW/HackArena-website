import type { Metadata } from 'next';
import './globals.css';
import { Layout } from '@repo/ui';
import React from 'react';
import { mockData } from '../utils/mockData';

export const metadata: Metadata = {
  title: 'Hackarena',
  description: 'Hackarena to miejsce dla pasjonatów technologii. Weź udział w hackathonie, rozwijaj swoje umiejętności i zdobądź cenne nagrody!',
};

const isRegistrationOpen = () => {
  const currentDate = new Date().getTime();
  return mockData.wydarzenia.some((event) => {
    return (
      currentDate >= event.registration.date.start.getTime() &&
      currentDate <= event.registration.date.end.getTime()
    );
  });
};

const navItems = isRegistrationOpen()
  ? [
    {
      label: 'Rejestracja',
      href: '/rejestracja/druzyna',
      highlight: true,
    },
    {
      label: 'Wydarzenia',
      href: '/wydarzenia',
    },
    {
      label: 'Kontakt',
      href: '/kontakt',
    },
    {
      label: 'Konto',
      href: '/konto',
    },
  ]
  : [
    {
      label: 'Wydarzenia',
      href: '/wydarzenia',
    },
    {
      label: 'Kontakt',
      href: '/kontakt',
    },
    {
      label: 'Konto',
      href: '/konto',
      highlight: true,
    },
  ];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Layout navItems={navItems}>{children}</Layout>;
}
