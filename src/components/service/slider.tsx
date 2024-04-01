"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";

type ServiceSliderProps = {
  services: any[];
};

export function ServiceSlider({ services }: ServiceSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const onSliderSelect = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (emblaApi) {
      setActiveSlideIndex(emblaApi.selectedScrollSnap());
    }
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSliderSelect);
    }

    const removeOnSliderSelectHandler = () => {
      emblaApi?.off("select", onSliderSelect);
    };

    return removeOnSliderSelectHandler;
  }, [emblaApi, onSliderSelect]);

  return (
    <div className="lg:hidden">
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex">
          {services.map((service) => (
            <div key={service.id} className="min-w-0 w-full flex-shrink-0 px-8">
              <div className="w-full px-4 pb-8 pt-64 relative z-0 h-full flex items-end rounded-tr-2xl rounded-bl-2xl overflow-hidden">
                <div className="absolute inset-0 -z-20">
                  <Image
                    src={service.imgUrl}
                    className="object-cover"
                    fill
                    alt="service"
                  />
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-700/20 to-navy-900"></div>
                <div className="w-full flex flex-col gap-2">
                  <h5 className="text-2xl text-white font-semibold tracking-tight">
                    {service.title}
                  </h5>
                  <p className="text-white">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {emblaApi && (
        <div className="mt-4">
          <div className="wrapper flex flex-nowrap w-full justify-center items-center gap-4">
            <div className="relative flex flex-1">
              <div className="w-full h-0.5 bg-neutral-100"></div>
              <div
                className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-navy-700 to-navy-900 transition-all ease-out duration-1000"
                style={{
                  width: `${Math.round(
                    ((activeSlideIndex + 1) / emblaApi.slideNodes().length) *
                      100
                  )}%`,
                }}
              ></div>
            </div>
            <span className="font-mono text-navy-900 text-sm tracking-tighter font-semibold">
              {String(activeSlideIndex + 1).padStart(2, "0")}/
              {String(emblaApi.slideNodes().length).padStart(2, "0")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
