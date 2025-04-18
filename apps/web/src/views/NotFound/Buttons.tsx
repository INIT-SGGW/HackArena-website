'use client';
import { LinkButton, Button } from '@repo/ui';
import { useRouter } from 'next/navigation';

export function Buttons() {
    const router = useRouter();

    return (
        <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
            <LinkButton href="/">Strona główna</LinkButton>
            <Button secondary onClick={router.back}>
                Cofnij
            </Button>
        </div>
    );
}
