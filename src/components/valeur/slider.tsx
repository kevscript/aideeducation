"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";

export function ValeurSlider() {
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
    <div className="bg-neutral-50 py-16 flex flex-col gap-8">
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex">
          {Array.from({ length: 6 }).map((x, i) => (
            <div key={i} className="min-w-0 w-full flex-shrink-0 px-8">
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 rounded-full bg-neutral-100"></div>
                <h3 className="text-2xl text-navy-900 font-semibold tracking-tight">
                  Transmission
                </h3>
                <p>
                  Parce que nous souhaitons contribuer au partage des
                  connaissances, chaque bénévole d&apos;AideEducation
                  s&apos;engage à en assurer la transmission.
                </p>
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
