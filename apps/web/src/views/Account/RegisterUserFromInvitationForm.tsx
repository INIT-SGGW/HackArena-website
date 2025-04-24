'use client';

import { Button, Input, Select } from '@repo/ui';
import { useActionState } from 'react';
import { registerUserFromInvitationSchema } from '../../utils/validation';
import { RegisterUserFromInvitationResponse } from '../../types/responses';
import { formAction, FormActionState } from '../../api/formAction';
import {
    DietPreference,
    Occupation,
    RegisterUserFromInvitationDTO,
} from '../../types/dtos';
import { fetcherAuth } from '../../api/fetcher';
import { RegisterUserFromInvitationRequest } from '../../types/requests';
import { notFound, useSearchParams } from 'next/navigation';

const eighteenYearsAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 18),
);

const initialValue: RegisterUserFromInvitationDTO = {
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    dateOfBirth: eighteenYearsAgo,
    aggrement: false,
    occupation: Occupation.OTHER,
    dietPreference: DietPreference.NONE,
};

export function RegisterUserFromInvitationForm() {
    const searchParams = useSearchParams();

    const email = searchParams.get('email');
    const token = searchParams.get('token');

    if (!email || !token) {
        notFound();
    }

    const fetcher = async (data: RegisterUserFromInvitationDTO) => {
        delete data.repeatPassword;

        await fetcherAuth<
            RegisterUserFromInvitationRequest,
            RegisterUserFromInvitationResponse
        >('/register/user/invitation', {
            method: 'POST',
            body: {
                service: 'ha',
                email: email,
                verificationToken: token,
                ...data,
            },
        });

        window.location.href = '/rejestracja/uzytkownik/zaproszenie/sukces';
    };

    const [state, action, isLoading] = useActionState<
        FormActionState<RegisterUserFromInvitationDTO>,
        FormData
    >(
        (prevState, payload) =>
            formAction<RegisterUserFromInvitationDTO>(
                prevState,
                payload,
                registerUserFromInvitationSchema,
                fetcher,
            ),
        {
            data: initialValue,
        },
    );

    return (
        <form
            action={action}
            noValidate
            autoComplete="on"
            className={
                'both-corners-clip bg-secondary-300 flex flex-col w-full max-w-[410px] justify-self-center p-5 gap-1'
            }
            style={{ '--clip-size': '25px' } as React.CSSProperties}
        >
            <Input
                autoComplete="name"
                placeholder="Imię"
                label="Imię"
                name="firstName"
                type="text"
                defaultValue={state.data.firstName}
                error={state.errors?.client?.firstName}
            />
            <Input
                autoComplete="family-name"
                placeholder="Nazwisko"
                label="Nazwisko"
                name="lastName"
                type="text"
                defaultValue={state.data.lastName}
                error={state.errors?.client?.lastName}
            />
            <Input
                autoComplete="new-password"
                placeholder="Hasło"
                label="Hasło"
                name="password"
                type="password"
                defaultValue={state.data.password}
                error={state.errors?.client?.password}
            />
            <Input
                id="repeatPassword"
                autoComplete="new-password"
                placeholder="Powtórz hasło"
                label="Powtórz hasło"
                name="repeatPassword"
                type="password"
                defaultValue={state.data.repeatPassword}
                error={state.errors?.client?.repeatPassword}
            />
            <Input
                autoComplete="bday-day"
                placeholder="Data urodzenia"
                label="Data urodzenia"
                name="dateOfBirth"
                type="date"
                defaultValue={
                    typeof state.data.dateOfBirth === 'string'
                        ? state.data.dateOfBirth
                        : state.data.dateOfBirth.toISOString().split('T')[0]
                }
                error={state.errors?.client?.dateOfBirth}
            />

            <Select
                label="Zawód"
                name="occupation"
                defaultValue={state.data.occupation}
                error={state.errors?.client?.occupation}
                options={Object.values(Occupation)}
            />
            <Select
                label="Preferencje dietetyczne"
                name="dietPreference"
                defaultValue={state.data.dietPreference}
                error={state.errors?.client?.dietPreference}
                options={Object.values(DietPreference)}
            />
            <Input
                id="aggrement"
                checkbox={true}
                autoComplete="off"
                label="Akceptuję regulamin i politykę przetwarzania danych"
                name="aggrement"
                type="checkbox"
                defaultChecked={state.data.aggrement ?? false}
                error={state.errors?.client?.aggrement}
            />
            <Button
                type="submit"
                fullWidth
                className="mt-[1em]"
                disabled={isLoading}
            >
                {isLoading ? 'Ładowanie...' : 'Stwórz konto'}
            </Button>
            <span className="text-sm text-error text-center">
                {state.errors?.server}
            </span>
        </form>
    );
}
