import { getValeurs } from "@/cms/api";
import { ValeurContent } from "./valeur-content";

export async function ValeurSection() {
  const valeurs = await getValeurs();

  if (!valeurs || valeurs.length === 0) {
    return null;
  }

  return <ValeurContent valeurs={valeurs} />;
}
