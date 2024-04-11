"use client";

import { Tutorial } from "@/cms/types";

type TutorialAccordeonProps = {
  steps: Tutorial["steps"];
  handleActiveStep: (x: string) => void;
  activeStepId: string | null;
};

export const TutorialAccordeon = ({
  steps,
  handleActiveStep,
  activeStepId,
}: TutorialAccordeonProps) => {
  return (
    <ul className="relative w-full">
      {steps.length &&
        steps.map((step, i) => (
          <li
            key={step.id}
            className={`tutorial flex w-full cursor-pointer flex-col overflow-hidden border-b first:pt-0 py-4 md:py-8  gap-2 md:gap-4`}
            onClick={() => handleActiveStep(step.id!)}
          >
            <div
              className={`relative flex justify-between`}
              aria-expanded={activeStepId === step.id}
            >
              <span
                className={` ${
                  activeStepId === step.id
                    ? "text-navy-900"
                    : "text-neutral-900"
                } font-semibold tracking-tighter text-lg lg:text-xl`}
              >
                <span className="font-mono">{i + 1}.</span>
                {step.title}
              </span>
              <div
                className={`absolute top-0 right-0 text-2xl duration-500 lg:text-4xl ${
                  activeStepId === step.id
                    ? `rotate-45 duration-500 text-navy-700`
                    : "text-neutral-900"
                }`}
              >
                +
              </div>
            </div>

            <div
              className={`grid grid-rows-[0fr] text-neutral-900 transition-all duration-500 aria-[hidden=false]:grid-rows-[1fr]`}
              aria-hidden={!(activeStepId === step.id)}
            >
              <div
                className={`description w-full overflow-hidden pr-4 md:pr-8 lg:pr-16`}
                dangerouslySetInnerHTML={{ __html: step.description_html! }}
              ></div>
            </div>
          </li>
        ))}
    </ul>
  );
};
