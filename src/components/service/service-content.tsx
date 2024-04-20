"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Service } from "@/cms/types";
import { ServiceCatalogue } from "./catalogue";
import { ServiceSlider } from "./slider";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type ServiceContentProps = {
  services: Service[];
};

export function ServiceContent({ services }: ServiceContentProps) {
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
    <section ref={container} className="relative w-full md:py-24 py-16">
      <div className="section-header wrapper mb-8 lg:mb-24">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between w-full lg:items-end gap-8 lg:gap-16">
          <div className="flex flex-col gap-4 max-w-[32rem] w-full">
            <h3 className="section-uptitle invisible up-title-dark">
              Services
            </h3>
            <h5 className="section-title invisible title-dark">
              Un soutien sur mesure adapté à vos besoins.
            </h5>
          </div>

          <div className="max-w-[32rem] w-full flex flex-col">
            <p className="section-description invisible text-neutral-500 leading-[1.75]">
              Transformez les défis scolaires en opportunités
              d&apos;apprentissage avec nos services personnalisés, adaptés aux
              besoins uniques de chaque étudiant.
            </p>
          </div>
        </div>
      </div>
      <div className="section-content">
        <ServiceSlider services={services} />
        <ServiceCatalogue services={services} />
      </div>
    </section>
  );
}
