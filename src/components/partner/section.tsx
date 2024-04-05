import { PartnerMarquee } from "./marquee";

const partners = [
  { id: "1", name: "S3A", logoUrl: "/s3a.svg", description: "" },
  { id: "2", name: "Google", logoUrl: "/google.svg", description: "" },
  { id: "3", name: "Herouville", logoUrl: "/herouville.svg", description: "" },
  { id: "4", name: "Shield", logoUrl: "/shield.svg", description: "" },
];

export function PartnerSection() {
  return (
    <section className="md:py-24 w-full relative">
      <PartnerMarquee partners={partners} />
    </section>
  );
}
