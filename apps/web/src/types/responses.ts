import { Notification } from "./dtos";

type TypicalResponse = {
    status: number;
    error?: string;
}

export type LoginResponse = {
    status: number;
    userId: string;
};

export type RegisterUserResponse = TypicalResponse

export type RegisterUserFromInvitationResponse = TypicalResponse

export type GetNotificationsResponse<T> = {
    status: string;
    notifications: Notification<T>[];
}

export type AddTeamMemberResponse = TypicalResponse

export type RegisterTeamResponse = TypicalResponse