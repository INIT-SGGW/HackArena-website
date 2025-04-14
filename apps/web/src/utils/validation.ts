import { z } from 'zod';

const passwordSchema = z
    .string()
    .min(8, { message: 'Hasło musi mieć co najmniej 8 znaków' })

const emailSchema = z
    .string()
    .nonempty({ message: 'Email jest wymagany' })
    .email({ message: 'Email jest niepoprawny' })

const teamNameSchema = z
    .string()
    .nonempty({ message: 'Nazwa drużyny jest wymagana' })
    .max(20, { message: 'Nazwa drużyny nie może być dłuższa niż 20 znaków' })

const registerEmailsSchema = z
    .string()
    .transform((text) => text.split(',').map((email) => email.trim()))
    .refine((emails) => emails.length > 0, {
        message: 'Dodaj przynajmniej jeden email',
    })
    .refine((emails) => emails.length <= 3, {
        message: 'Drużyna może mieć maksymalnie 3 osoby',
    })
    .refine((emails) => new Set(emails).size === emails.length, {
        message: 'Nie możesz dodać dwóch takich samych emaili',
    })
    .refine((emails) => emails.every((email) => emailSchema.safeParse(email).success), {
        message: 'Niepoprawny email',
    })

export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

export const registerSchema = z.object({
    teamName: teamNameSchema,
    emails: registerEmailsSchema,
});
