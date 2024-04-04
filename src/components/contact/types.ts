import { z } from "zod";

export const ContactFormSchema = z.object({
  firstname: z
    .string({ required_error: "Veuillez entrer votre prénom." })
    .min(1, { message: "Veuillez entrer votre prénom." })
    .max(100, { message: "Limite de charactères dépassée : 100" }),
  lastname: z
    .string({ required_error: "Veuillez entrer votre nom." })
    .min(1, { message: "Veuillez entrer votre nom." })
    .max(100, { message: "Limite de charactères dépassée : 100" }),
  username: z
    .string()
    .max(100, { message: "Limite de charactères dépassée : 100" })
    .optional(),
  email: z
    .string({ required_error: "Veuillez entrer votre email." })
    .email({ message: "L'email n'est pas valide." }),
  subject: z
    .string({ required_error: "Veuillez entrer votre sujet." })
    .min(1, { message: "Veuillez entrer votre sujet." })
    .max(200, { message: "Limite de charactères dépassée : 200" }),
  message: z
    .string({ required_error: "Veuillez entrer votre message." })
    .min(1, { message: "Veuillez entrer votre message." })
    .max(3000, { message: "Limite de charactères dépassée : 3000" }),
});

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;

export type ContactFormElements = HTMLFormControlsCollection & {
  firstname: HTMLInputElement;
  lastname: HTMLInputElement;
  username: HTMLInputElement;
  email: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLInputElement;
};

export type ContactForm = HTMLFormElement & {
  readonly elements: ContactFormElements;
};
