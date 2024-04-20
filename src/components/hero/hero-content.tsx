"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Social } from "@/cms/types";
import { VideoBlob } from "./video-blob";
import { Button } from "../button";
import { isIcon } from "@/cms/typeguards";
import { DiscordIcon } from "../icons/discord";
import { useMemo, useRef, useState } from "react";
import { ExitIcon } from "../icons/exit";

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
      gsap.from(".hero-title", {
        duration: 1,
        ease: "power2.inOut",
        y: 32,
        opacity: 0,
      });
      gsap.from(".hero-subtitle", {
        delay: 0.3,
        duration: 1,
        ease: "power2.inOut",
        y: 32,
        opacity: 0,
      });
      gsap.from(".hero-buttons", {
        delay: 0.6,
        duration: 1,
        ease: "power2.inOut",
        y: 32,
        opacity: 0,
      });
      gsap.from(".social-item", {
        delay: 0.9,
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
    <>
      <section
        ref={container}
        className="overflow-hidden lg:min-h-[100vh] bg-navy-900 bg-gradient-to-br from-navy-700 to-navy-900 py-16 md:py-24 lg:flex justify-center"
      >
        <div className="wrapper flex flex-col items-center gap-12 lg:flex-row-reverse">
          <VideoBlob handleVideoOpen={handleVideoOpen} />

          <div className="px-4 md:px-0 w-full flex flex-col items-center lg:items-start text-center lg:text-left text-white">
            <h1 className="hero-title text-5xl lg:text-[4rem] font-bold tracking-tighter">
              AideEducation
            </h1>
            <h3 className="hero-subtitle mt-4 lg:text-2xl lg:max-w-[32rem] lg:tracking-tight lg:mt-6 text-balance md:text-wrap">
              Car le savoir est un droit. Facile d&apos;utilisation, nous sommes
              votre plateforme d&apos;aide aux devoirs personnalisée.
            </h3>
            <div className="hero-buttons flex flex-col w-full gap-4 mt-8 lg:mt-12 lg:flex-row">
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
              <ul className="flex gap-4 mt-12">
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
        </div>
      </section>
      <div
        className={`hero-video-container ${
          videoStatus === "open" ? "flex" : "hidden"
        } top-0 left-0 fixed w-screen h-screen z-[100] bg-navy-900 justify-center items-center`}
        onClick={handleVideoClose}
      >
        <div
          className="fixed top-8 right-8 cursor-pointer"
          onClick={handleVideoClose}
        >
          <ExitIcon className="w-8 h-8 fill-white pointer-events-none" />
        </div>
        <iframe
          className="w-3/4 aspect-video"
          src={
            videoStatus === "open"
              ? "https://www.youtube.com/embed/7bn_3k4FPvI?si=b532rylpv04rD_rb"
              : undefined
          }
          title="Présentation d'AideEducation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
