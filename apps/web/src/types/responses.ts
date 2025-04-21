import { DietPreference, Notification, Occupation } from "./dtos";

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
    events: {
        _id: string;
        name: {
            text: string;
            url: string;
        },
        thumbnail: string;
        date: string;
        isActive: boolean;
    }[]
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