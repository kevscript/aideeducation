"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Statistic } from "@/cms/types";
import { TriangleSVG } from "../triangle";
import { StatisticList } from "./list";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type StatisticContentProps = {
  statistics: Statistic[];
};

export function StatisticContent({ statistics }: StatisticContentProps) {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".section-uptitle",
        {
          scrollTrigger: ".section-content",
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
          scrollTrigger: ".section-content",
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
          scrollTrigger: ".section-content",
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
      className="relative w-full py-16 md:py-24 bg-gradient-to-b from-navy-900 to-navy-700 overflow-hidden z-0"
    >
      <TriangleSVG
        className="absolute -top-[80%] -left-[10%] lg:top-[10%] lg:-left-[20%] -z-20 stroke-navy-900 rotate-45 w-1/2"
        variant="outline"
      />
      <TriangleSVG
        className="absolute -bottom-[60%] -right-[25%] lg:-bottom-[15%] lg:-right-[25%] -z-10 stroke-navy-900 rotate-90 w-1/2"
        variant="outline"
      />

      <TriangleSVG className="absolute bottom-[20%] left-[3%] -z-10 fill-navy-700 w-3 lg:w-8 h-auto rotate-[105deg]" />
      <div className="absolute w-3 lg:w-8 aspect-square rounded-full bg-navy-700 -z-10 right-[4%] lg:top-[40%]"></div>
      <div className="section-content wrapper">
        <div className="flex flex-col-reverse xl:flex-row xl:flex-nowrap xl:justify-between gap-8 lg:gap-16">
          <StatisticList statistics={statistics} />
          <div className="flex flex-col w-full max-w-[24rem] text-white shrink-0">
            <h3 className="section-uptitle invisible up-title-light">
              Statistiques
            </h3>
            <h5 className="section-title invisible title-light mt-4 text-balance">
              Notre activité en chiffres.
            </h5>

            <p className="section-description invisible text-neutral-50 leading-[1.75] mt-8">
              Au-delà des mots. Découvrez notre parcours à travers nos chiffres,
              témoins de notre expertise en matière d&apos;aide scolaire.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper"></div>
    </section>
  );
}
