"use client";

import { ChevronIcon } from "../icons/chevron";
import Image from "next/image";
import { TutorialAccordeon } from "./accordeon";
import { useMemo, useState } from "react";
import type { Tutorial } from "./types";

type TutorialProps = {
  tutorial: Tutorial;
};

export function Tutorial({ tutorial }: TutorialProps) {
  const [activeStep, setActivStep] = useState<(typeof tutorial)["steps"][0]>(
    () => tutorial.steps[0]
  );

  const activeStepIndex = useMemo(() => {
    const idx = tutorial.steps.findIndex((step) => step.id === activeStep.id);
    return idx;
  }, [tutorial, activeStep]);

  function handleActiveStep(newStepId: string) {
    if (newStepId !== activeStep.id) {
      const newActiveStep = tutorial.steps.find(
        (step) => step.id === newStepId
      );
      newActiveStep && setActivStep(newActiveStep);
    }
  }

  function handleActiveStepIdx(direction: "prev" | "next") {
    if (direction === "prev" && activeStepIndex > 0) {
      setActivStep(tutorial.steps[activeStepIndex - 1]);
    }

    if (direction === "next" && activeStepIndex < tutorial.steps.length - 1) {
      setActivStep(tutorial.steps[activeStepIndex + 1]);
    }
  }

  return (
    <div className="w-full p-8 xl:p-16 bg-neutral-50 rounded-lg flex flex-col lg:flex-row gap-8 xl:gap-16">
      <div className="w-96 max-w-full relative bg-neutral-300 h-fit shadow-sm rounded-2xl lg:rounded-3xl overflow-hidden">
        <Image
          src={activeStep.imgUrl}
          width={0}
          height={0}
          alt="tutorial"
          className="w-full h-auto"
          unoptimized
        />
      </div>

      <div className="flex-1 flex w-full flex-col">
        <h3 className="text-2xl lg:text-3xl tracking-tighter font-semibold text-navy-900">
          {tutorial.title}
        </h3>

        <div className="flex flex-row flex-nowrap w-full gap-8 mt-8 mb-16">
          <div className="flex flex-col w-full gap-1">
            <span className="font-mono tracking-tighter">
              Etape{" "}
              <span className="text-navy-900">
                {String(activeStepIndex + 1).padStart(2, "0")}/
                {String(tutorial.steps.length).padStart(2, "0")}
              </span>
            </span>
            <div className="relative w-full">
              <div className="w-full h-0.5 bg-neutral-200"></div>
              <div
                className="transition-all duration-1000 ease-out absolute top-0 left-0 h-0.5 bg-navy-900"
                style={{
                  width: `${Math.round(
                    (100 / tutorial.steps.length) * (activeStepIndex + 1)
                  )}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="flex flex-nowrap gap-2">
            <div
              onClick={() => handleActiveStepIdx("prev")}
              className={`${
                activeStepIndex > 0 && "cursor-pointer"
              }  w-8 h-8 lg:w-12 lg:h-12 rounded-full border border-neutral-200 bg-white flex justify-center items-center overflow-hidden`}
            >
              <ChevronIcon
                className={`${
                  activeStepIndex > 0 ? "fill-navy-900" : "fill-neutral-300"
                } w-3 h-3 lg:w-4 lg:h-4 rotate-90`}
              />
            </div>
            <div
              onClick={() => handleActiveStepIdx("next")}
              className={`${
                activeStepIndex < tutorial.steps.length - 1 && "cursor-pointer"
              } w-8 h-8 lg:w-12 lg:h-12 rounded-full border border-neutral-200 bg-white flex justify-center items-center overflow-hidden`}
            >
              <ChevronIcon
                className={`${
                  activeStepIndex < tutorial.steps.length - 1
                    ? "fill-navy-900"
                    : "fill-neutral-300"
                } w-3 h-3 lg:w-4 lg:h-4 -rotate-90`}
              />
            </div>
          </div>
        </div>

        <TutorialAccordeon
          handleActiveStep={handleActiveStep}
          steps={tutorial.steps}
          activeStepId={activeStep.id}
        />
      </div>
    </div>
  );
}
