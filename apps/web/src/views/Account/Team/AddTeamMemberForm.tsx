"use client";

import { notFound, useParams } from "next/navigation";
import { AddTeamMemberDTO } from "../../../types/dtos";
import { AddTEamMemberResponse } from "../../../types/responses";
import { fetcherHack } from "../../../api/fetcher";
import { useActionState } from "react";
import { formAction, FormActionState } from "../../../api/formAction";
import { AddTeamMEmberSchema } from "../../../utils/validation";
import { Button, Input } from "@repo/ui";

export function AddTeamMemberForm() {
    const { id } = useParams();

    if (!id || typeof id !== 'string') {
        notFound();
    }

    const fetcher = async (data: AddTeamMemberDTO) => {
        await fetcherHack<AddTEamMemberResponse>('/register/login', {
            method: 'POST',
            body: JSON.stringify({
                ...data,
                teamId: id
            }),
        });

        window.location.href = `/konto/druzyna/${id}`;
    };

    const [state, action, isLoading] = useActionState<
        FormActionState<AddTeamMemberDTO>,
        FormData
    >(
        (prevState, payload) =>
            formAction<AddTeamMemberDTO>(prevState, payload, AddTeamMEmberSchema, fetcher),
        {
            data: {
                email: '',
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
            <Button
                type="submit"
                fullWidth
                className="mt-[1em]"
                disabled={isLoading}
            >
                {isLoading ? 'Ładowanie...' : 'Dodaj członka'}
            </Button>
            <span className="text-sm text-error text-center">
                {state.errors?.server}
            </span>
        </form>
    )
}