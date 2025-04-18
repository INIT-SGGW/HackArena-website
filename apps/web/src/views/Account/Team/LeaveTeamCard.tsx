"use client";

import { useParams } from "next/navigation";
import { getUserId } from "../../../utils/getUserId";
import { Button } from "@repo/ui";

export function LeaveTeamCard() {
    const { _id } = useParams();
    const userId = getUserId();

    const handleLeaveTeam = () => {
        // Implement the logic to leave the team
        console.log("Leaving team with ID:", _id, userId);
    }

    return (
        <Button onClick={() => handleLeaveTeam} fullWidth>Opuść drużynę</Button>
    )
}