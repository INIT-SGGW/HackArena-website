"use client";

import { useParams } from "next/navigation";
import { useGetUserId } from "../../../utils/useGetUserId";
import { Button } from "@repo/ui";
import { fetcherHack } from "../../../api/fetcher";
import useSWRMutation from "swr/mutation";

export function LeaveTeamCard() {
    const { id } = useParams();
    const userId = useGetUserId();

    const { error, isMutating, trigger } = useSWRMutation<null>(`/teams/${id}/members/${userId}/leave-team`, (url: string) => fetcherHack<null, null>(url, {
        authRedirect: true,
        method: 'PATCH',
    }));

    const handleLeaveTeam = async () => {
        await trigger();

        window.location.href = '/konto';
    }

    return (
        <div className="flex flex-col gap-1 items-center">
            <Button onClick={handleLeaveTeam} disabled={isMutating} fullWidth>{isMutating ? "..." : "Opuść drużynę"}</Button>
            {error && <p className="text-error text-center">Wystąpił problem podczas opuszczania drużyny</p>}
        </div>
    )
}