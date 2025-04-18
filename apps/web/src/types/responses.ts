export type LoginResponse = {
    status: number;
    userId: string;
};

export type RegisterUserResponse = {
    status: number;
    error?: string;
};
