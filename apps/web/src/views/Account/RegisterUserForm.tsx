"use client";

import { Button, Input, Select } from '@repo/ui';
import { useActionState } from 'react';
import { registerUserSchema } from '../../utils/validation';
import { RegisterUserResponse } from '../../types/responses';
import { formAction, FormActionState } from '../../api/formAction';
import { DietPreference, Occupation, RegisterUserDTO } from '../../types/dtos';
import { fetcherAuth } from '../../api/fetcher';

const now = new Date()

const initialValue: RegisterUserDTO = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    dateOfBirth: new Date(),
    aggrement: false,
    occupation: Occupation.OTHER,
    dietPreference: DietPreference.NONE
}

export function RegisterUserForm() {
    const fetcher = async (data: RegisterUserDTO) => {
        delete data.repeatPassword

        await fetcherAuth<RegisterUserResponse>('/register/user', {
            method: 'POST',
            body: JSON.stringify({
                service: "ha",
                ...data
            }),
        });

        window.location.href = "uzytkownik/sukces"
    }

    const [state, action, isLoading] = useActionState<FormActionState<RegisterUserDTO>, FormData>((prevState, payload) => formAction<RegisterUserDTO>(prevState, payload, registerUserSchema, fetcher), {
        data: initialValue
    })
    console.log('data', state.data)

    return (
        <form
            action={action}
            noValidate
            autoComplete='on'
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
                autoComplete='family-name'
                placeholder="Nazwisko"
                label="Nazwisko"
                name="lastName"
                type="text"
                defaultValue={state.data.lastName}
                error={state.errors?.client?.lastName}
            />
            <Input
                autoComplete='email'
                placeholder="Email"
                label="Email"
                name="email"
                type="email"
                defaultValue={state.data.email}
                error={state.errors?.client?.email}
            />
            <Input
                autoComplete='new-password'
                placeholder="Hasło"
                label="Hasło"
                name="password"
                type="password"
                defaultValue={state.data.password}
                error={state.errors?.client?.password}
            />
            <Input
                id="repeatPassword"
                autoComplete='new-password'
                placeholder="Powtórz hasło"
                label="Powtórz hasło"
                name="repeatPassword"
                type="password"
                defaultValue={state.data.repeatPassword}
                error={state.errors?.client?.repeatPassword}
            />
            <Input
                autoComplete='bday-day'
                placeholder="Data urodzenia"
                label="Data urodzenia"
                name="dateOfBirth"
                type="date"
                defaultValue={typeof state.data.dateOfBirth === "string" ? state.data.dateOfBirth : state.data.dateOfBirth.toISOString().split('T')[0]}
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
                autoComplete='off'
                label="Akceptuję regulamin i politykę przetwarzania danych"
                name="aggrement"
                type="checkbox"
                defaultChecked={state.data.aggrement ?? false}
                error={state.errors?.client?.aggrement}
            />
            <Button type="submit" fullWidth className='mt-[1em]' disabled={isLoading}>
                {isLoading ? 'Ładowanie...' : 'Stwórz konto'}
            </Button>
            <span className="text-sm text-error text-center">{state.errors?.server}</span>
        </form>
    )
}
