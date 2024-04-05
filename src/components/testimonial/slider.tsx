"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronIcon } from "../icons/chevron";

type TestimonialSliderProps = {
  testimonials: any[];
};

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const onSliderSelect = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (emblaApi) {
      setActiveSlideIndex(emblaApi.selectedScrollSnap());
    }
  }, []);

  const handleScroll = useCallback(
    (x: "prev" | "next" | number) => {
      if (emblaApi) {
        switch (x) {
          case "prev":
            emblaApi.scrollPrev();
            break;
          case "next":
            emblaApi.scrollNext();
            break;
          default:
            typeof x === "number" ? emblaApi.scrollTo(x) : null;
        }
      }
    },
    [emblaApi]
  );

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
    <div className="flex flex-col gap-4 lg:hidden mt-8">
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex wrapper gap-2">
          {testimonials.length &&
            testimonials.map((t, i) => (
              <div
                key={t.id}
                className="w-full  shrink-0 flex flex-col bg-navy-900/80 backdrop-blur p-8 rounded-tr-2xl border border-navy-700 max-w-96"
              >
                <h5 className="font-semibold text-white">{t.title}</h5>
                <div className="w-full h-[1px] bg-navy-700 my-6"></div>
                <p className="text-neutral-100 leading-[1.75]">
                  {'"' + t.comment + '"'}
                </p>

                <div className="flex flex-nowrap w-full mt-6 gap-4 items-center">
                  <div className="w-16 h-16 rounded-full bg-navy-700"></div>
                  <div className="flex flex-col">
                    <span className="text-lg text-white font-display tracking-tight">
                      {t.name}
                    </span>
                    <span className="font-mono text-sm text-navy-700 tracking-tighter">
                      {t.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="px-4">
        <div className="wrapper flex flex-nowrap w-full justify-center items-center gap-4">
          <div className="relative flex flex-1">
            <div className="w-full h-[1px] bg-navy-900"></div>
            <div
              className="absolute top-0 left-0 h-[1px] bg-white transition-all ease-out duration-1000"
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
          <span className="font-mono text-sm tracking-tighter text-white">
            {String(activeSlideIndex + 1).padStart(2, "0")}/
            {String(emblaApi?.slideNodes().length || 0).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
