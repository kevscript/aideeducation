"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";

type ValeurSliderProps = {
  valeurs: any[];
};

export function ValeurSlider({ valeurs }: ValeurSliderProps) {
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
    <div className="flex flex-col gap-4 lg:hidden">
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex wrapper gap-2">
          {valeurs.length &&
            valeurs.map((valeur, i) => (
              <li
                key={valeur.id}
                className="flex shrink-0 flex-col p-8 border bg-white border-neutral-100 max-w-96 w-full rounded-tr-[2rem] pb-16"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-50"></div>
                <h5 className="text-2xl text-navy-900 mt-16 font-semibold tracking-tighter">
                  {valeur.title}
                </h5>
                <p className="mt-4 text-neutral-500 leading-[1.75]">
                  {valeur.description}
                </p>
              </li>
              // <div key={i} className="min-w-0 w-full shrink-0 max-w-96">
              //   <div className="flex flex-col p-6 bg-white border rounded-tr-2xl rounded-bl-2xl">
              //     <div className="w-16 h-16 rounded-full bg-neutral-100"></div>
              //     <h3 className="mt-6 text-xl md:text-2xl text-navy-900 tracking-tight font-display font-semibold">
              //       Transmission
              //     </h3>
              //     <p className="mt-2">
              //       Parce que nous souhaitons contribuer au partage des
              //       connaissances, chaque bénévole d&apos;AideEducation
              //       s&apos;engage à en assurer la transmission.
              //     </p>
              //   </div>
              // </div>
            ))}
        </div>
      </div>

      <div className="px-4">
        <div className="wrapper flex flex-nowrap w-full justify-center items-center gap-4">
          <div className="relative flex flex-1">
            <div className="w-full h-[1px] bg-neutral-100"></div>
            <div
              className="absolute top-0 left-0 h-[1px] bg-navy-700 transition-all ease-out duration-1000"
              style={{
                width: emblaApi
                  ? `${Math.round(
                      ((activeSlideIndex + 1) / emblaApi.slideNodes().length) *
                        100
                    )}%`
                  : "0%",
              }}
            ></div>
          </div>
          <span className="font-mono text-sm tracking-tighter text-navy-900">
            {String(activeSlideIndex + 1).padStart(2, "0")}/
            {String(emblaApi?.slideNodes().length || 0).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
