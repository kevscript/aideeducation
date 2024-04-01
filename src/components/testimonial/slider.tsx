"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";

export function TestimonialSlider() {
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
    <div>
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex">
          {Array.from({ length: 5 }).map((x, i) => (
            <div key={i} className="min-w-0 w-full flex-shrink-0 px-8">
              <div className="w-full flex flex-col gap-8 text-white">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti voluptas suscipit harum aliquam assumenda ea beatae
                  optio nisi, temporibus quasi incidunt. Sunt obcaecati illo
                  eius itaque cum, alias excepturi libero? Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Tempora quae vitae,
                  impedit vel sequi modi excepturi sed mollitia dignissimos
                  consequatur similique expedita consectetur doloremque minima
                  voluptatem ex reprehenderit, dolorum velit.
                </p>

                <div className="flex flex-nowrap gap-4 items-center">
                  <div className="w-16 h-16 rounded-full bg-white"></div>
                  <div className="flex flex-col">
                    <span className="font-semibold tracking-tight">
                      Joseph Pierce
                    </span>
                    <span className="font-mono text-sm tracking-tighter">
                      24/11/21
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {emblaApi && (
        <div className="mt-8">
          <div className="wrapper flex flex-nowrap w-full justify-center items-center gap-4">
            <div className="relative flex flex-1">
              <div className="w-full h-0.5 bg-navy-700"></div>
              <div
                className="absolute top-0 left-0 h-0.5 bg-white transition-all ease-out duration-1000"
                style={{
                  width: `${Math.round(
                    ((activeSlideIndex + 1) / emblaApi.slideNodes().length) *
                      100
                  )}%`,
                }}
              ></div>
            </div>
            <span className="font-mono text-white text-sm tracking-tighter font-semibold">
              {String(activeSlideIndex + 1).padStart(2, "0")}/
              {String(emblaApi.slideNodes().length).padStart(2, "0")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
