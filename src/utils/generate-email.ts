import { ContactFormSchemaType } from "@/components/contact/types";

export const generateEmail = ({
  email,
  firstname,
  lastname,
  message,
  subject,
  username,
}: ContactFormSchemaType) => {
  return `<div>
    <h3>Formulaire de contact d'AideEducation.fr</h3>
    <ul>
      <li>
        <span>Prénom: ${firstname}</span>
      </li>
      <li>
        <span>Nom: ${lastname}</span>
      </li>
      <li>
        <span>Id Discord: ${username || "-"}</span>
      </li>
      <li>
        <span>Email: ${email}</span>
      </li>
      <li>
        <span>Object: ${subject}</span>
      </li>
      <li>
        <span>Message:</span>
        <p style="white-space:pre-wrap;">${message}</p>
      </li>
    </ul>
  </div>`;
};
