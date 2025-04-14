type FetcherOptions = RequestInit & {
    skipAuthRedirect?: boolean;
}

export async function fetcher<T = any>(
    url: string, options: FetcherOptions)
    : Promise<T> {
    const res = await fetch(url, {
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...(options?.headers || {}),
        },
    });

    if (!res.ok) {
        const isAuthError = res.status === 401 || res.status === 403;
        const response = await res.json()

        if (isAuthError && !options?.skipAuthRedirect) {
            if (typeof window !== 'undefined') {
                window.location.href = '/login';
            }
        }

        if (process.env.NODE_ENV !== 'production') {
            console.error('Error response:', response);
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

    return res.json();
}

export async function fetcherAuth<T = any>(
    url: string, options: FetcherOptions
): Promise<T> {
    let authApiUrl: string;

    switch (process.env.NEXT_PUBLIC_NODE_ENV) {
        case 'production':
            authApiUrl = "https://hackarena.pl";
            break;
        case 'test':
            authApiUrl = "https://hackarena.pl:5000";
            break;
        default:
            authApiUrl = "http://localhost:8080";
            break;
    }

    if (!authApiUrl) {
        throw new Error('Request domain is not defined');
    }

    const fullUrl = new URL(url, authApiUrl).toString();

    return fetcher<T>(fullUrl, options);
}

export async function fetcherHack<T = any>(
    url: string, options: FetcherOptions
): Promise<T> {
    let hackApiUrl: string;

    switch (process.env.NEXT_PUBLIC_NODE_ENV) {
        case 'production':
            hackApiUrl = "https://initcodingchallenge.pl/api/v1";
            break;
        case 'test':
            hackApiUrl = "https://initcodingchallenge.pl:5000/api/v1";
            break;
        default:
            hackApiUrl = "http://localhost:4000";
            break;
    }

    if (!hackApiUrl) {
        throw new Error('Request domain is not defined');
    }

    const fullUrl = new URL(url, hackApiUrl).toString();

    return fetcher<T>(fullUrl, options);
}