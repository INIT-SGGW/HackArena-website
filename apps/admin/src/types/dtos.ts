export type LoginDTO = {
    email: string;
    password: string;
};

export type RegisterTeamDTO = {
    teamName: string;
    emails: string[];
};

export enum Occupation {
    OTHER = 'Inne',
    STUDENT = 'Uczeń',
    UNDERGRADUATE = 'Student',
    POSTGRADUATE = 'Absolwent',
}

export enum DietPreference {
    NONE = 'Brak',
    VEGAN = 'Wegańskie',
    VEGETARIAN = 'Wegegetariańskie',
}

export type RegisterUserDTO = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword?: string;
    dateOfBirth: Date;
    aggrement: boolean;
    occupation: Occupation;
    dietPreference: DietPreference;
};

export type RegisterUserFromInvitationDTO = {
    firstName: string;
    lastName: string;
    password: string;
    repeatPassword?: string;
    dateOfBirth: Date;
    aggrement: boolean;
    occupation: Occupation;
    dietPreference: DietPreference;
};

export type TeamInviteNotification = {
    teamId: string;
    teamName: string;
};

export type Notification<T> = {
    _id: string;
    service: string;
    type: string;
    status: string;
    args: T;
};

export type AddTeamMemberDTO = {
    email: string;
};

export type Event = {
    _id: string;
    name: {
        text: string;
        url: string;
    };
    thumbnail: string;
    isLive: boolean;
    isTaskActive: boolean;
    taskId: string | null;
};
