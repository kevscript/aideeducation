"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TeamValue } from "@/cms/types";
import { ValeurSlider } from "./slider";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type ValuerContentProps = {
  valeurs: TeamValue[];
};

export function ValeurContent({ valeurs }: ValuerContentProps) {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".section-uptitle",
        {
          scrollTrigger: ".section-header",
          y: 32,
          autoAlpha: 0,
        },
        {
          duration: 1,
          ease: "power2.inOut",
          y: 0,
          autoAlpha: 1,
        }
      );
      gsap.fromTo(
        ".section-title",
        {
          scrollTrigger: ".section-header",
          y: 32,
          autoAlpha: 0,
        },
        {
          duration: 1,
          ease: "power2.inOut",
          y: 0,
          autoAlpha: 1,
        }
      );
      gsap.fromTo(
        ".section-description",
        {
          scrollTrigger: ".section-header",
          y: 32,
          autoAlpha: 0,
        },
        {
          duration: 1,
          ease: "power2.inOut",
          y: 0,
          autoAlpha: 1,
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative w-full py-16 md:py-24 bg-gradient-to-b lg:bg-transparent from-transparent to-neutral-50"
    >
      <div className="section-header wrapper mb-8 lg:mb-16">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between w-full lg:items-end gap-8 lg:gap-16">
          <div className="flex flex-col gap-4 max-w-[32rem] w-full">
            <h3 className="up-title-dark invisible section-uptitle">Valeurs</h3>
            <h5 className="title-dark section-title invisible">
              Les piliers de notre communauté.
            </h5>
          </div>

          <div className="max-w-[32rem] w-full flex flex-col">
            <p className="text-neutral-500 leading-[1.75] section-description invisible">
              Guidés par nos valeurs, nous œuvrons chaque jour à créer un
              environnement où l&apos;empathie et le respect sont au cœur de
              chaque interaction.
            </p>
          </div>
        </div>
      </div>
      <div className="section-content">
        <ValeurSlider valeurs={valeurs} />
      </div>
    </section>
  );
}
