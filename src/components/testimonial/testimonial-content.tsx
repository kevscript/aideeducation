"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Testimonial } from "@/cms/types";
import { TriangleSVG } from "../triangle";
import { TestimonialDuo } from "./duo";
import { TestimonialSlider } from "./slider";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type TestimonialContentProps = {
  testimonials: Testimonial[];
};

export function TestimonialContent({ testimonials }: TestimonialContentProps) {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".section-uptitle", {
        scrollTrigger: ".section-header",
        duration: 1,
        ease: "power2.inOut",
        y: 32,
        opacity: 0,
      });
      gsap.from(".section-title", {
        delay: 0.3,
        scrollTrigger: ".section-header",
        duration: 1,
        ease: "power2.inOut",
        y: 32,
        opacity: 0,
      });
      gsap.from(".section-description", {
        delay: 0.6,
        scrollTrigger: ".section-header",
        duration: 1,
        ease: "power2.inOut",
        y: 32,
        opacity: 0,
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="w-full relative py-16 md:py-24 lg:pb-0 bg-gradient-to-b from-navy-900 to-navy-700 z-0 overflow-hidden"
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
      <div className="hidden lg:block z-10 absolute inset-0 bg-gradient-to-b from-transparent to-navy-700 from-70%"></div>
      <div className="wrapper">
        <div className="section-header flex flex-col justify-center md:items-center md:text-center w-full">
          <h3 className="section-uptitle up-title-light">Témoignages</h3>
          <h5 className="section-title title-light text-balance mt-4">
            Votre avis compte pour nous.
          </h5>
          <p className="section-description text-neutral-100 leading-[1.75] max-w-prose text-balance mt-8">
            Découvrez les avis de notre communauté recueillis sur Disboard et
            DiscordInvites. Partagez vos expériences et enrichissez notre réseau
            en laissant le votre.
          </p>
          <TriangleSVG
            className="absolute -top-[80%] -left-[10%] lg:top-[70%] lg:-left-[20%] -z-20 stroke-navy-900 rotate-45 w-1/2"
            variant="outline"
          />
          <TriangleSVG
            className="absolute -bottom-[60%] -right-[25%] lg:bottom-[60%] lg:-right-[20%] -z-10 stroke-navy-900 rotate-90 w-1/2"
            variant="outline"
          />
        </div>
      </div>
      <div className="section-content">
        <TestimonialDuo testimonials={testimonials} />
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
}
