import { DietPreference, Event, Notification, Occupation } from "./dtos";

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
    membersCount: number,
}[]

export type GetEventsResponse = {
    incoming: Event[];
    ended: Event[];
}

export type GetSingleTeamResponse = {
    _id: string;
    name: string;
    members: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        isLeader: boolean;
        isVerified: boolean;
        status: string;
    }[],
    events: (Event & {
        date: string;
        isActive: boolean;
    })[]
}

export type GetUserByIdResponse = {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    aggrement: boolean;
    occupation: Occupation;
    dietPreference: DietPreference;
}