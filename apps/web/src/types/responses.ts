import { Notification } from "./dtos";

export type LoginResponse = {
    status: number;
    userId: string;
};

export type RegisterUserResponse = {
    status: number;
    error?: string;
};

export type GetNotificationsResponse<T> = {
    status: string;
    notifications: Notification<T>[];
}

export type AddTEamMemberResponse = {
    status: number;
    error?: string;
}