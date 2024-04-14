import { getFaqs, getSocials } from "@/cms/api";
import { Button } from "../button";
import { DiscordIcon } from "../icons/discord";
import { FaqAccordeon } from "./accordeon";

export async function FaqSection() {
  const faqs = await getFaqs();
  const socials = await getSocials();
  const discord = socials.find((s) => s.name.toLowerCase() === "discord");

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between gap-16">
          <div className="flex flex-col w-full max-w-[32rem] shrink-0">
            <h3 className="up-title-dark">FAQ</h3>
            <h5 className="title-dark mt-4 text-balance">
              Les questions qu’on nous pose.
            </h5>

            <p className="text-neutral-500 leading-[1.75] mt-8 max-w-96">
              Pour toute autre question ou problème, connectez vous directement
              à notre serveur Discord et ouvrez un ticket de support. Vous
              pouvez également nous contacter par mail.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Button
                theme="light"
                is="anchor"
                href={discord?.link || "/"}
                startIcon={<DiscordIcon className="w-5 h-5 fill-white" />}
              >
                Rejoindre Discord
              </Button>
              <Button variant="secondary" is="link" href="/contact">
                Contactez-nous
              </Button>
            </div>
          </div>
          <FaqAccordeon faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
