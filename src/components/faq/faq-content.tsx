"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Faq, Social } from "@/cms/types";
import { DiscordIcon } from "../icons/discord";
import { Button } from "../button";
import { FaqAccordeon } from "./accordeon";
import { useMemo, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type FaqContentProps = {
  faqs: Faq[];
  socials: Social[];
};

export function FaqContent({ faqs, socials }: FaqContentProps) {
  const container = useRef<HTMLElement>(null);
  const discord = useMemo(() => {
    return socials.find((s) => s.name.toLowerCase() === "discord");
  }, [socials]);

  useGSAP(
    () => {
      gsap.from(".section-uptitle", {
        scrollTrigger: ".section-content",
        duration: 1,
        ease: "power2.inOut",
        y: 32,
        opacity: 0,
      });
      gsap.from(".section-title", {
        delay: 0.3,
        scrollTrigger: ".section-content",
        duration: 1,
        ease: "power2.inOut",
        y: 32,
        opacity: 0,
      });
      gsap.from(".section-description", {
        delay: 0.6,
        scrollTrigger: ".section-content",
        duration: 1,
        ease: "power2.inOut",
        y: 32,
        opacity: 0,
      });
      gsap.from(".section-buttons", {
        delay: 0.9,
        scrollTrigger: ".section-content",
        duration: 1,
        ease: "power2.inOut",
        y: 32,
        opacity: 0,
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative w-full py-16 md:py-24">
      <div className="wrapper">
        <div className="section-content flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between gap-16">
          <div className="flex flex-col w-full max-w-[32rem] shrink-0">
            <h3 className="section-uptitle up-title-dark">FAQ</h3>
            <h5 className="section-title title-dark mt-4 text-balance">
              Les questions qu’on nous pose.
            </h5>

            <p className="section-description text-neutral-500 leading-[1.75] mt-8 max-w-96">
              Pour toute autre question ou problème, connectez vous directement
              à notre serveur Discord et ouvrez un ticket de support. Vous
              pouvez également nous contacter par mail.
            </p>

            <div className="section-buttons flex flex-col md:flex-row gap-4 mt-8">
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
