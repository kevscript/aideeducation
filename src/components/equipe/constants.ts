import { Member } from "@/cms/types";

export const departments = [
  { value: "direction-generale", label: "Direction Générale" },
  { value: "departement-pedagogique", label: "Dept. Pédagogique" },
  { value: "departement-interieur", label: "Dept. Intérieur" },
  { value: "departement-exterieur", label: "Dept. Extérieur" },
];

export const sorters: { value: keyof Member; label: string }[] = [
  { value: "lastname", label: "Nom" },
  { value: "joinedAt", label: "Date d'arrivée" },
  { value: "rank", label: "Distinction" },
];
