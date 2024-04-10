"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { Job } from "@/cms/types";
import { isIcon } from "@/cms/typeguards";
import { LogoIcon } from "../icons/logo";

type JobSliderProps = {
  jobs: Job[];
};

export function JobSlider({ jobs }: JobSliderProps) {
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
    <>
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex wrapper gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="card min-w-0 w-full flex-shrink-0 max-w-96 rounded-tr-3xl p-6 flex flex-col gap-8"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex justify-center items-center">
                {isIcon(job.icon) ? (
                  <div
                    className="w-8 h-8 bg-navy-900"
                    style={{
                      mask: `url(${job.icon.url}) no-repeat center`,
                      WebkitMask: `url(${job.icon.url}) no-repeat center`,
                    }}
                  ></div>
                ) : (
                  <LogoIcon className="w-8 h-8 fill-navy-900" />
                )}
              </div>

              <div className="flex flex-col gap-4">
                <h5 className="text-xl font-semibold tracking-tighter text-navy-900">
                  {job.role}
                </h5>
                <p>{job.description}</p>
              </div>

              <div className="flex justify-end mt-auto">
                <span
                  className={`font-display px-2 py-1 rounded font-semibold ${
                    job.status === "active"
                      ? "text-navy-700 bg-navy-50"
                      : "text-neutral-400 bg-neutral-100"
                  }`}
                >
                  {job.status === "active" ? "Actif" : "Inactif"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mt-4">
        <div className="wrapper flex flex-nowrap w-full justify-center items-center gap-4">
          <div className="relative flex flex-1">
            <div className="w-full h-[1px] bg-neutral-100"></div>
            <div
              className="absolute top-0 left-0 h-[1px] bg-navy-900 transition-all ease-out duration-1000"
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
    </>
  );
}
