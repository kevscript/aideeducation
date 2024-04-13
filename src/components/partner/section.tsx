import { getPartners } from "@/cms/api";
import { PartnerMarquee } from "./marquee";

export async function PartnerSection() {
  const partners = await getPartners();
  return (
    <section className="py-16 md:py-24 w-full relative">
      <PartnerMarquee partners={partners} />
    </section>
  );
}
