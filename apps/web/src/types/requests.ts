import { DietPreference, Occupation } from "./dtos"

export type LoginRequest = {
    email: string,
    password: string,
    service: string
}

export type AddTeamMemberRequest = {
    email: string,
    teamId: string
}

export type RegisterTeamRequest = {
    teamName: string,
    emails: string[]
}

export type RegisterUserRequest = {
    service: "ha",
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword?: string;
    dateOfBirth: Date;
    aggrement: boolean;
    occupation: Occupation;
    dietPreference: DietPreference;
}

export type RegisterUserFromInvitationRequest = {
    service: "ha",
    verificationToken: string,
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword?: string;
    dateOfBirth: Date;
    aggrement: boolean;
    occupation: Occupation;
    dietPreference: DietPreference;
}

export type VerifyEmailRequest = {
    email: string,
    verificationToken: string,
}