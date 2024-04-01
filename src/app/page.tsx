import { FaqSection } from "@/components/faq/section";
import { HeroSection } from "@/components/hero/section";
import { PartnerSection } from "@/components/partner/section";
import { ServiceSection } from "@/components/service/section";
import { StatisticSection } from "@/components/statistic/section";
import { TestimonialSection } from "@/components/testimonial/section";
import { ValeurSection } from "@/components/valeur/section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <ValeurSection />
      <PartnerSection />
      <StatisticSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
