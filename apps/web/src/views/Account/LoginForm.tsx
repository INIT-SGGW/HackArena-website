'use client';

import { ArrowLink, Button, Input } from '@repo/ui';
import { useActionState } from 'react';
import { loginSchema } from '../../utils/validation';
import { fetcherAuth } from '../../api/fetcher';
import { LoginResponse } from '../../types/responses';
import { formAction, FormActionState } from '../../api/formAction';
import { LoginDTO } from '../../types/dtos';

export function LoginForm() {
    const fetcher = async (data: LoginDTO) => {
        const res = await fetcherAuth<LoginResponse>('/register/login', {
            method: 'POST',
            body: JSON.stringify({
                ...data,
                service: 'ha',
            }),
        });

        const userId = res.userId.split('"')[1];

        if (userId) {
            localStorage.setItem('userId', userId);

            window.location.href = '/konto';
        }
    };

    const [state, action, isLoading] = useActionState<
        FormActionState<LoginDTO>,
        FormData
    >(
        (prevState, payload) =>
            formAction<LoginDTO>(prevState, payload, loginSchema, fetcher),
        {
            data: {
                email: '',
                password: '',
            },
        },
    );

    return (
        <form
            action={action}
            noValidate
            className={
                'both-corners-clip bg-secondary-300 flex flex-col w-full max-w-[410px] justify-self-center p-5 gap-1'
            }
            style={{ '--clip-size': '25px' } as React.CSSProperties}
        >
            <Input
                placeholder="Email"
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue={state.data.email}
                error={state.errors?.client?.email}
            />
            <Input
                placeholder="Hasło"
                label="Hasło"
                name="password"
                type="password"
                autoComplete="current-password"
                defaultValue={state.data.password}
                error={state.errors?.client?.password}
            />
            <Button
                type="submit"
                fullWidth
                className="mt-[1em]"
                disabled={isLoading}
            >
                {isLoading ? 'Ładowanie...' : 'Zaloguj się'}
            </Button>
            <span className="text-sm text-error text-center">
                {state.errors?.server}
            </span>
            <ArrowLink
                color="white"
                className="justify-center mt-3"
                text="Zapomniałeś/aś hasła?"
                href="/password/forgot"
            />
        </form>
    );
}
