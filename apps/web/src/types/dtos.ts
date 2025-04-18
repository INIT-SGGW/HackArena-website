export type LoginDTO = {
    email: string;
    password: string;
};

export type RegisterTeamDTO = {
    teamName: string;
    emails: string[];
};

export enum Occupation {
    STUDENT = 'student',
    UNDERGRADUATE = 'undergraduate',
    POSTGRADUATE = 'postgraduate',
    OTHER = 'other',
}

export enum DietPreference {
    VEGETARIAN = 'vegetarian',
    VEGAN = 'vegan',
    NONE = 'none',
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
