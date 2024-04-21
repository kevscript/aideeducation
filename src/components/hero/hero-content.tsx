"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Social } from "@/cms/types";
import { Button } from "../button";
import { isIcon } from "@/cms/typeguards";
import { DiscordIcon } from "../icons/discord";
import { useMemo, useRef, useState } from "react";
import { TriangleSVG } from "../triangle";

type HeroContentProps = {
  socials: Social[];
};

export function HeroContent({ socials }: HeroContentProps) {
  const [videoStatus, setVideoStatus] = useState<"open" | "close">("close");
  const discord = useMemo(() => {
    return socials.find((s) => s.name.toLowerCase() === "discord");
  }, [socials]);

  const container = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-title",
        {
          autoAlpha: 0,
          y: 32,
        },
        {
          duration: 1,
          ease: "power2.inOut",
          y: 0,
          autoAlpha: 1,
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        {
          autoAlpha: 0,
          y: 32,
        },
        {
          delay: 0.1,
          duration: 1,
          ease: "power2.inOut",
          y: 0,
          autoAlpha: 1,
        }
      );

      gsap.fromTo(
        ".hero-buttons",
        {
          autoAlpha: 0,
          y: 32,
        },
        {
          delay: 0.2,
          duration: 1,
          ease: "power2.inOut",
          y: 0,
          autoAlpha: 1,
        }
      );

      gsap.fromTo(
        ".social-list",
        {
          autoAlpha: 0,
        },
        {
          duration: 0.1,
          autoAlpha: 1,
        }
      );

      gsap.from(".social-item", {
        delay: 0.3,
        scale: 0,
        y: 64,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        stagger: { each: 0.1 },
      });
    },
    { scope: container }
  );

  function handleVideoOpen() {
    // remove scrollbar when video open
    document.body.classList.add("overflow-y-hidden");
    document.documentElement.classList.add("overflow-y-hidden");
    setVideoStatus("open");
  }

  function handleVideoClose(e: React.MouseEvent<HTMLElement>) {
    if (e.currentTarget === e.target) {
      document.body.classList.remove("overflow-y-hidden");
      document.documentElement.classList.remove("overflow-y-hidden");
      setVideoStatus("close");
    }
  }

  return (
    <section
      ref={container}
      className="z-0 relative overflow-hidden lg:min-h-[80vh] bg-navy-900 bg-gradient-to-br from-navy-700 to-navy-900 py-16 md:py-24 lg:flex justify-center"
    >
      <TriangleSVG
        className="absolute -top-[80%] -left-[10%] lg:top-[70%] lg:-left-[20%] -z-20 stroke-navy-900 rotate-45 w-1/2"
        variant="outline"
      />
      <TriangleSVG
        className="absolute -bottom-[60%] -right-[25%] lg:bottom-[60%] lg:-right-[20%] -z-10 stroke-navy-900 rotate-90 w-1/2"
        variant="outline"
      />

      <TriangleSVG className="absolute bottom-[75%] left-[3%] -z-10 fill-navy-700 w-3 lg:w-8 h-auto rotate-[105deg]" />
      <div className="absolute w-3 lg:w-8 aspect-square rounded-full bg-navy-700 -z-10 right-[4%] lg:top-[40%]"></div>
      <div className="wrapper flex flex-col items-center gap-12 lg:flex-row">
        <div className="w-full lg:w-fit px-4 md:px-0 flex flex-col items-center lg:items-start text-center lg:text-left text-white">
          <h1 className="hero-title invisible text-5xl lg:text-[4rem] font-bold tracking-tighter">
            AideEducation
          </h1>
          <h3 className="hero-subtitle invisible mt-4 lg:text-2xl lg:max-w-[32rem] lg:tracking-tight lg:mt-6 text-balance md:text-wrap">
            Car le savoir est un droit. Facile d&apos;utilisation, nous sommes
            votre plateforme d&apos;aide aux devoirs personnalisée.
          </h3>
          <div className="hero-buttons invisible flex flex-col w-full gap-4 mt-8 lg:mt-12 lg:flex-row">
            <Button
              theme="dark"
              is="anchor"
              href={discord?.link || "/"}
              startIcon={<DiscordIcon className="w-5 h-5 fill-navy-900" />}
            >
              Rejoindre notre Discord
            </Button>

            <Button
              theme="dark"
              is="link"
              href="/soutenir/recrutement"
              variant="secondary"
            >
              Devenir Bénévole
            </Button>
          </div>
          {socials && (
            <ul className="social-list invisible flex gap-4 mt-12">
              {socials.map((social) => (
                <a
                  key={social.id}
                  className="social-item relative w-10 h-10 bg-navy-700 rounded-full flex justify-center items-center overflow-hidden"
                  href={social.link}
                  title={social.name}
                  target="_blank"
                >
                  {isIcon(social.icon) && (
                    <div
                      className="w-full h-full bg-white"
                      style={{
                        mask: `url(${social.icon.url}) no-repeat center`,
                        WebkitMask: `url(${social.icon.url}) no-repeat center`,
                      }}
                    ></div>
                  )}
                </a>
              ))}
            </ul>
          )}
        </div>

        <div className="flex-1 w-full flex justify-center items-center overflow-hidden">
          <div className="overflow-hidden rounded-2xl flex justify-center items-center w-full aspect-video shadow">
            <iframe
              className="w-full aspect-video"
              src={
                "https://www.youtube.com/embed/7bn_3k4FPvI?si=b532rylpv04rD_rb"
              }
              title="Présentation d'AideEducation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
