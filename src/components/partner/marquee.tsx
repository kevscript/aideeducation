"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Partner } from "@/cms/types";
import { isLogo } from "@/cms/typeguards";

type PartnerMarqueeProps = {
  partners: Partner[];
};

export function PartnerMarquee({ partners }: PartnerMarqueeProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      speed: 0.5,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  ]);

  const repeatedPartners: Partner[] = Array(16).fill(partners).flat(1);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(255,255,255,1)0%,rgba(255,255,255,0)20%,rgba(255,255,255,0)80%,rgba(255,255,255,1)100%)]"></div>
      <div
        className="z-0 overflow-hidden relative pointer-events-none"
        ref={emblaRef}
      >
        <div className="flex">
          {repeatedPartners.length &&
            repeatedPartners.map((p, i) => (
              <div
                key={i}
                className="relative min-w-0 mr-8 lg:mr-16 h-16 lg:h-24 flex-shrink-0 flex justify-center items-center"
              >
                {isLogo(p.logo) && (
                  <Image
                    className="object-contain h-full max-h-12 w-auto max-w-24 lg:max-w-32 lg:max-h-16 grayscale opacity-40"
                    src={p.logo.url!}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={p.logo.alt}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
