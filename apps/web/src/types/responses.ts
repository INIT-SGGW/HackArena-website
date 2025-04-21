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

export type ChangeNotificationStatusResponse = TypicalResponse

export type GetTeamsResponse = {
    _id: string,
    name: string,
    memberCount: number,
}[]

type GetEventEvent = {
    _id: string;
    name: {
        text: string;
        url: string;
    },
    thumbnail: string;
}

export type GetEventsResponse = {
    incoming: GetEventEvent[];
    ended: GetEventEvent[];
}