export type LoginResponse = {
    status: number;
    userId: string;
};

export type RegisterUserResponse = {
    status: number;
    error?: string;
};

export type AddTEamMemberResponse = {
    status: number;
    error?: string;
}