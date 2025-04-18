import { ZodError, ZodSchema } from 'zod';

export type FormActionState<T> = {
    data: T;
    errors?: {
        client?: { [x: string | number | symbol]: string[] | undefined };
        server?: string;
    };
};

export async function formAction<T>(
    _: FormActionState<T>,
    formData: FormData,
    dataSchema: ZodSchema,
    fetcher: (data: T) => Promise<void>,
): Promise<FormActionState<T>> {
    let newData = Object.fromEntries(formData.entries()) as T;

    try {
        newData = dataSchema.parse(newData);
    } catch (e: unknown) {
        if (e instanceof ZodError) {
            const errors = e.flatten().fieldErrors;

            return {
                data: {
                    ...newData,
                },
                errors: {
                    client: {
                        ...errors,
                    },
                    server: undefined,
                },
            };
        }

        if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
            console.error(e);
        }

        return {
            data: {
                ...newData,
            },
            errors: {
                server: 'Wystąpił błąd podczas przetwarzania żądania',
            },
        };
    }

    try {
        await fetcher(newData);
    } catch (e: unknown) {
        if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
            console.error(e);
        }

        return {
            data: {
                ...newData,
            },
            errors: {
                server: 'Wystąpił błąd podczas przetwarzania żądania',
            },
        };
    }

    return {
        data: {
            ...newData,
        },
    };
}
