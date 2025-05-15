import type { Metadata } from 'next';
import './globals.css';
import { Layout } from '@repo/ui';

export const metadata: Metadata = {
    title: 'Admin | Hackerna',
    description: 'Admin panel for Hackerna',
    robots: {
        index: false,
        follow: false,
    }
};

const navItems: {
    label: string;
    href: string;
}[] = [];

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <Layout navItems={navItems}>{children}</Layout>;
}
