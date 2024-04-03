"use client";
import { useState } from "react";

type FaqAccordeonProps = {
  faqs: any[];
};

export const FaqAccordeon = ({ faqs }: FaqAccordeonProps) => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>(
    () => faqs[0].id || null
  );

  function handleActiveFaq(faqId: string) {
    if (faqId === activeFaqId) {
      setActiveFaqId(null);
    } else {
      setActiveFaqId(faqId);
    }
  }

  return (
    <ul className="mt-8 w-[56rem] max-w-full">
      {faqs.length &&
        faqs.map((faq, i) => (
          <div
            key={i}
            className={`${
              activeFaqId === faq.id
                ? "bg-white"
                : "bg-gradient-to-bl from-white to-neutral-50"
            } relative flex w-full cursor-pointer flex-col overflow-hidden border border-b-0 border-neutral-100 first:rounded-tr-2xl last:rounded-bl-2xl last:border-b`}
            onClick={() => handleActiveFaq(faq.id)}
          >
            <div
              className={`flex justify-between px-4 py-6 transition-colors duration-500 lg:p-8`}
              aria-expanded={activeFaqId === faq.id}
            >
              <span
                className={` ${
                  activeFaqId === faq.id ? "text-navy-900" : "text-neutral-900"
                } font-text font-semibold tracking-tighter lg:text-lg`}
              >
                {faq.question}
              </span>
              <div
                className={`bg-clip-text text-transparent absolute right-4 top-4 bg-gradient-to-b from-navy-700 to-navy-900 text-2xl duration-500 lg:right-6 lg:text-4xl ${
                  activeFaqId === faq.id && `rotate-45 duration-500`
                }`}
              >
                +
              </div>
            </div>

            <div
              className={`grid grid-rows-[0fr] text-neutral-900 transition-all duration-500 aria-[hidden=false]:grid-rows-[1fr]`}
              aria-hidden={!(activeFaqId === faq.id)}
            >
              <div className="w-full overflow-hidden md:pr-8">
                <p className="whitespace-pre-wrap px-4 pb-6 pr-8 leading-relaxed lg:px-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
    </ul>
  );
};
