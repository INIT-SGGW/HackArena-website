export type LoginDTO = {
    email: string,
    password: string,
}

export type RegisterDTO = {
    teamName: string,
    emails: string[],
}