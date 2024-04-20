import { getFaqs, getSocials } from "@/cms/api";
import { FaqContent } from "./faq-content";

export async function FaqSection() {
  const faqs = await getFaqs();
  const socials = await getSocials();

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return <FaqContent faqs={faqs} socials={socials} />;
}
