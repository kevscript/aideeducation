"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronIcon } from "../icons/chevron";

type TestimonialCarouselProps = {
  testimonials: any[];
};

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
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
    <div>
      <div className="relative overflow-hidden cursor-pointer" ref={emblaRef}>
        <div className="flex gap-x-16">
          {testimonials.length &&
            testimonials.map((t, i) => (
              <div key={t.id} className="min-w-0 w-full flex-shrink-0">
                <div className="w-full flex flex-col gap-8">
                  <p className="lg:leading-relaxed">{t.comment}</p>
                  <div className="flex flex-nowrap gap-4 items-center">
                    <div className="w-16 h-16 rounded-full bg-white"></div>
                    <div className="flex flex-col">
                      <span className="font-semibold tracking-tight text-navy-900">
                        {t.name}
                      </span>
                      <span className="font-mono text-sm tracking-tighter">
                        {t.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {emblaApi && (
        <div className="lg:mt-16 mt-8">
          <div className="flex flex-nowrap w-full justify-center items-center gap-4">
            <span className="font-mono text-navy-900 text-sm tracking-tighter font-semibold">
              {String(activeSlideIndex + 1).padStart(2, "0")}/
              {String(emblaApi.slideNodes().length).padStart(2, "0")}
            </span>
            <div className="relative flex flex-1">
              <div className="w-full h-0.5 bg-neutral-200"></div>
              <div
                className="absolute top-0 left-0 h-0.5 bg-navy-900 transition-all ease-out duration-1000"
                style={{
                  width: `${Math.round(
                    ((activeSlideIndex + 1) / emblaApi.slideNodes().length) *
                      100
                  )}%`,
                }}
              ></div>
            </div>
            <div className="flex flex-nowrap gap-2 lg:gap-4">
              <div
                className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white cursor-pointer flex justify-center items-center hover:bg-navy-900 group/btn transition"
                onClick={() => handleScroll("prev")}
              >
                <ChevronIcon className="lg:w-4 lg:h-4 h-3 w-3 rotate-90 fill-navy-900 group-hover/btn:fill-white transition" />
              </div>
              <div
                className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white cursor-pointer flex justify-center items-center hover:bg-navy-900 group/btn transition"
                onClick={() => handleScroll("next")}
              >
                {" "}
                <ChevronIcon className="lg:w-4 lg:h-4 h-3 w-3 -rotate-90 fill-navy-900 group-hover/btn:fill-white transition" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
