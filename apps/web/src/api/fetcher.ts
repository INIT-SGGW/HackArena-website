export type FetcherOptions<RQ> = Omit<RequestInit, 'body'> & {
    body?: RQ;
    authRedirect?: boolean;
};

export async function fetcher<RQ, RE>(
    url: string,
    options: FetcherOptions<RQ>,
): Promise<RE> {
    const isFormData = options.body instanceof FormData;

    const res = await fetch(url, {
        ...options,
        credentials: 'include',
        headers: {
            ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
            ...(options?.headers || {}),
        },
        body: isFormData ? options.body as BodyInit : JSON.stringify(options.body),
    });

    if (!res.ok) {
        const isAuthError = res.status === 401;

        if (isAuthError && options?.authRedirect) {
            if (typeof window !== 'undefined') {
                window.location.href = '/login';
            }
        }

        if (process.env.NODE_ENV !== 'production') {
            try {
                const response = await res.json();
                console.error('Error response:', response);
            } catch (e) {
                console.error('Error response when parsing response:', e);
            }
        }

        if (res.status === 500) {
            throw new Error('Wystąpił błąd po stronie serwera');
        } else if (res.status === 400) {
            throw new Error('Niepoprawne dane');
        } else if (res.status === 401) {
            throw new Error('Nieautoryzowany dostęp');
        } else if (res.status === 403) {
            throw new Error('Brak dostępu do zasobu');
        } else if (res.status === 404) {
            throw new Error('Nie znaleziono zasobu');
        } else if (res.status === 409) {
            throw new Error('Konflikt danych');
        } else {
            throw new Error('Wystąpił błąd podczas przetwarzania żądania');
        }
    }

    try {
        const response = await res.json();
        return response;
    } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('Error response when parsing response:', e);
        }
        return null as RE;
    }
}

export async function fetcherAuth<RQ, RE>(
    url: string,
    options: FetcherOptions<RQ>,
): Promise<RE> {
    let authApiUrl: string;

    switch (process.env.NEXT_PUBLIC_NODE_ENV) {
        case 'production':
            authApiUrl = 'https://hackarena.pl/api/v1';
            break;
        case 'test':
            authApiUrl = 'https://hackarena.pl:5000/api/v1';
            break;

        default:
            authApiUrl = 'http://localhost:8080';
            break;
    }

    if (!authApiUrl) {
        throw new Error('Request domain is not defined');
    }

    const fullUrl = authApiUrl + url;

    return fetcher<RQ, RE>(fullUrl, options);
}

export async function fetcherHack<RQ, RE>(
    url: string,
    options: FetcherOptions<RQ>,
): Promise<RE> {
    let hackApiUrl: string;

    switch (process.env.NEXT_PUBLIC_NODE_ENV) {
        case 'production':
            hackApiUrl = 'https://hackarena.pl/backend';
            break;
        case 'test':
            hackApiUrl = 'https://hackarena.pl:5000/backend';
            break;
        default:
            hackApiUrl = 'http://localhost:5500';
            break;
    }

    if (!hackApiUrl) {
        throw new Error('Request domain is not defined');
    }

    const fullUrl = hackApiUrl + url;

    return fetcher<RQ, RE>(fullUrl, options);
}
