import { Button } from "@repo/ui";
import { Notification, TeamInviteNotification } from "../../types/dtos";

type Props = {
    notification: Notification<TeamInviteNotification>;
}

export function TeamInvite({ notification }: Props) {
    const handleJoin = () => {
        console.log("Dołącz do wydarzenia", notification.args.teamId);
    }

    const handleDecline = () => {
        console.log("Odrzuć zaproszenie", notification.args.teamName);
    }

    return (
        <li className="flex flex-col gap-3 last:mb-0">
            <div className="flex flex-col gap-1">
                <span className="text-md">Nowe zaproszenie</span>
                <span className="text-sm text-secondary-100">Dostałeś zaproszenie do zespołu {notification.args.teamName}. Dołączenie jest równoznaczna z akcektacją regulaminu wydarzenia</span>
            </div>

            <div className="flex gap-2">
                <Button fullWidth onClick={() => handleJoin()}>Dołącz</Button>
                <Button secondary fullWidth onClick={() => handleDecline()}>Odrzuć</Button>
            </div>
        </li>
    )
}