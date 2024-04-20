import { Member } from "@/cms/types";

export const departments = [
  { value: "direction-generale", label: "Direction Générale", order: 1 },
  {
    value: "departement-pedagogique",
    label: "Département Pédagogique",
    order: 2,
  },
  { value: "departement-interieur", label: "Département Intérieur", order: 3 },
  { value: "departement-exterieur", label: "Département Extérieur", order: 4 },
];

export const sorters: { value: keyof Member; label: string }[] = [
  { value: "lastname", label: "Nom" },
  { value: "joinedAt", label: "Date d'arrivée" },
  { value: "rank", label: "Distinction" },
];
