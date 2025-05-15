import { z } from 'zod';

const passwordSchema = z.string().nonempty({ message: 'Hasło jest wymagane' });

const registerPasaswordSchema = z
    .string()
    .min(8, { message: 'Hasło musi zawierać co najmniej 8 znaków' })
    .max(25, { message: 'Hasło nie może być dłuższe niż 25 znaków' })
    .refine((password) => /[A-Z]/.test(password), {
        message: 'Hasło musi zawierać co najmniej jedną dużą literę',
    })
    .refine((password) => /[a-z]/.test(password), {
        message: 'Hasło musi zawierać co najmniej jedną małą literę',
    })
    .refine((password) => /[0-9]/.test(password), {
        message: 'Hasło musi zawierać co najmniej jedną liczbę',
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
        message: 'Hasło musi zawierać co najmniej jeden znak specjalny',
    });

const emailSchema = z
    .string()
    .nonempty({ message: 'Email jest wymagany' })
    .email({ message: 'Email jest niepoprawny' })
    .transform((email) => email.toLowerCase());

const teamNameSchema = z
    .string()
    .nonempty({ message: 'Nazwa drużyny jest wymagana' })
    .max(20, { message: 'Nazwa drużyny nie może być dłuższa niż 20 znaków' });

const registerEmailsSchema = z
    .string()
    .transform((text) =>
        text.split(',').map((email) => email.trim().toLowerCase()),
    )
    .refine((emails) => emails.length > 0, {
        message: 'Dodaj przynajmniej jeden email',
    })
    .refine((emails) => emails.length <= 3, {
        message: 'Drużyna może mieć maksymalnie 3 osoby',
    })
    .refine((emails) => new Set(emails).size === emails.length, {
        message: 'Nie możesz dodać dwóch takich samych emaili',
    })
    .refine(
        (emails) =>
            emails.every((email) => emailSchema.safeParse(email).success),
        {
            message: 'Niepoprawny email',
        },
    );

const firstNameSchema = z
    .string()
    .nonempty({ message: 'Imię jest wymagane' })
    .max(25, { message: 'Imię może mieć maksymalnie 25 liter' });

const lastNameSchema = z
    .string()
    .nonempty({ message: 'Nazwisko jest wymagane' })
    .max(25, { message: 'Nazwisko może mieć maksymalnie 25 liter' });

const eighteenYearsAgo = new Date().setFullYear(new Date().getFullYear() - 18);

const dateOfBirthSchema = z
    .string()
    .transform((dateString) => new Date(dateString))
    .refine((date) => eighteenYearsAgo > date.getTime(), {
        message: 'Musisz mieć przynajmniej 18 lat',
    });

const aggrementSchema = z
    .string()
    .optional()
    .transform((value) => value === 'on')
    .refine((value) => value === true, {
        message: 'Musisz zaakceptować regulamin',
    });

export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

export const registerTeamSchema = z.object({
    teamName: teamNameSchema,
    emails: registerEmailsSchema,
});

export const registerUserSchema = z
    .object({
        firstName: firstNameSchema,
        lastName: lastNameSchema,
        email: emailSchema,
        password: registerPasaswordSchema,
        repeatPassword: z.string(),
        dateOfBirth: dateOfBirthSchema,
        aggrement: aggrementSchema,
        occupation: z.string(),
        dietPreference: z.string(),
    })
    .refine((data) => data.password === data.repeatPassword, {
        message: 'Hasła muszą być takie same',
        path: ['repeatPassword'],
    });

export const registerUserFromInvitationSchema = z
    .object({
        firstName: firstNameSchema,
        lastName: lastNameSchema,
        password: registerPasaswordSchema,
        repeatPassword: z.string(),
        dateOfBirth: dateOfBirthSchema,
        aggrement: aggrementSchema,
        occupation: z.string(),
        dietPreference: z.string(),
    })
    .refine((data) => data.password === data.repeatPassword, {
        message: 'Hasła muszą być takie same',
        path: ['repeatPassword'],
    });

export const AddTeamMEmberSchema = z.object({
    email: emailSchema,
});
