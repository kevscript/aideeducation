import { PartnerMarquee } from "./marquee";

const partners = [
  {
    id: "1",
    name: "Maison des Associations - S3A",
    logoUrl: "/s3a.svg",
    description: "",
  },
  {
    id: "2",
    name: "Google for Nonprofits",
    logoUrl: "/google.svg",
    description: "",
  },
  {
    id: "3",
    name: "Herouville-St-Clair",
    logoUrl: "/herouville.svg",
    description: "",
  },
];

export function PartnerSection() {
  return (
    <section className="py-16 md:py-24 w-full relative">
      <PartnerMarquee partners={partners} />
    </section>
  );
}
