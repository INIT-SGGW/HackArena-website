'use client';

import { Button, Input } from '@repo/ui';
import { useActionState } from 'react';
import { registerTeamSchema } from '../../utils/validation';
import { fetcherHack } from '../../api/fetcher';
import { RegisterTeamResponse } from '../../types/responses';
import { formAction, FormActionState } from '../../api/formAction';
import { RegisterTeamDTO } from '../../types/dtos';
import { RegisterTeamRequest } from '../../types/requests';

export function RegisterTeamForm() {
    const fetcher = async (data: RegisterTeamDTO) => {
        const res = await fetcherHack<RegisterTeamRequest, RegisterTeamResponse>('/register', {
            method: 'POST',
            body: data,
        });
    };

    const [state, action, isLoading] = useActionState<
        FormActionState<RegisterTeamDTO>,
        FormData
    >(
        (prevState, payload) =>
            formAction<RegisterTeamDTO>(
                prevState,
                payload,
                registerTeamSchema,
                fetcher,
            ),
        {
            data: {
                teamName: '',
                emails: [],
            },
        },
    );

    return (
        <form
            action={action}
            id="register-form"
            noValidate
            className={
                'both-corners-clip bg-secondary-300 flex flex-col w-full max-w-[410px] justify-self-center p-5 gap-1'
            }
            style={{ '--clip-size': '25px' } as React.CSSProperties}
        >
            <Input
                form="register-form"
                autoComplete="off"
                placeholder="Nazwa drużyny"
                label="Nazwa drużyny"
                name="teamName"
                type="text"
                defaultValue={state.data.teamName}
                error={state.errors?.client?.teamName}
            />
            <Input
                form="register-form"
                placeholder="Maile członków"
                label="Maile członków (oddzielone przecinkiem)"
                name="emails"
                type="text"
                defaultValue={state.data.emails}
                error={state.errors?.client?.emails}
            />
            <Button
                type="submit"
                fullWidth
                className="mt-[1em]"
                disabled={isLoading}
            >
                {isLoading ? 'Ładowanie...' : 'Zarejestruj drużynę'}
            </Button>
            <span className="text-sm text-error text-center">
                {state.errors?.server}
            </span>
        </form>
    );
}
