import { getSocials } from "@/cms/api";
import { HeroContent } from "./hero-content";

export async function HeroSection() {
  const socials = await getSocials();
  return <HeroContent socials={socials} />;
}
