'use client';

import { LinkButton } from '@repo/ui';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { fetcherAuth } from '../../api/fetcher';
import { VerifyEmailRequest } from '../../types/requests';

export default function VerificationCard(): React.JSX.Element {
    const searchParams = useSearchParams();
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    const email = searchParams.get('email');
    const token = searchParams.get('token');

    useEffect(() => {
        if (!email || !token) {
            return;
        }

        const handle = async (): Promise<void> => {
            try {
                await fetcherAuth<VerifyEmailRequest, null>(
                    `/register/verifiy?email=${email}&token=${token}`,
                    {
                        method: 'POST',
                        body: {
                            email: email,
                            verificationToken: token,
                        },
                    },
                );
            } catch (_: unknown) {
                setError('Wystąpił błąd podczas weryfikacji konta.');
            } finally {
                setLoading(false);
            }
        };
        void handle();
    }, [email, token]);

    if (!email || !token) {
        return (
            <div className="flex flex-col items-center justify-center gap-4 mx-auto text-center page-width">
                <h1 className="title">Błąd weryfikacji</h1>
                <p className="text-white">
                    Link weryfikacyjny jest nieprawidłowy. Skontaktuj się z nami
                    na{' '}
                    <a
                        href="mailto:kontakt@hackarena.pl"
                        className="text-primary"
                    >
                        kontakt@hackarena.pl
                    </a>
                </p>
                <LinkButton href="/" className="mt-8">
                    Wróć na stronę główną
                </LinkButton>
            </div>
        );
    }

    if (loading) {
        return <div> </div>;
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center gap-4 mx-auto text-center page-width">
                <h1 className="title">Błąd weryfikacji</h1>
                <div className="flex flex-col gap-1">
                    <p className="text-white">
                        Weryfikacja konta nie powiodła się.
                    </p>
                    <p className="text-white">
                        Skontaktuj się z nami na{' '}
                        <a
                            href="mailto:kontakt@hackarena.pl"
                            className="text-primary"
                        >
                            kontakt@hackarena.pl
                        </a>
                    </p>
                    <p className="text-gray-400">Error message: {error}</p>
                </div>
                <LinkButton href="/" className="mt-8">
                    Wróć na stronę główną
                </LinkButton>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 mx-auto text-center page-width">
            <h1 className="title">Weryfikacja zakończona</h1>
            <p className="text-white">
                Twoje konto zostało pomyślnie zweryfikowane. Możesz teraz
                zalogować się na swoje konto.
            </p>
            <LinkButton href="/login" className="mt-8">
                Zaloguj się
            </LinkButton>
        </div>
    );
}
