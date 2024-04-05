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
    <ul className="flex-1">
      {faqs.length &&
        faqs.map((faq, i) => (
          <div
            key={i}
            className={`flex w-full cursor-pointer flex-col overflow-hidden border-b first:pt-0 py-8 gap-4`}
            onClick={() => handleActiveFaq(faq.id)}
          >
            <div
              className={`relative flex justify-between`}
              aria-expanded={activeFaqId === faq.id}
            >
              <span
                className={` ${
                  activeFaqId === faq.id ? "text-navy-900" : "text-neutral-900"
                } font-semibold tracking-tighter text-2xl`}
              >
                {faq.question}
              </span>
              <div
                className={`absolute top-0 right-0 text-2xl duration-500 lg:text-4xl ${
                  activeFaqId === faq.id
                    ? `rotate-45 duration-500 text-navy-700`
                    : "text-neutral-900"
                }`}
              >
                +
              </div>
            </div>

            <div
              className={`grid grid-rows-[0fr] text-neutral-900 transition-all duration-500 aria-[hidden=false]:grid-rows-[1fr]`}
              aria-hidden={!(activeFaqId === faq.id)}
            >
              <div className={`w-full overflow-hidden`}>
                <p className="whitespace-pre-wrap leading-relaxed max-w-prose">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
    </ul>
  );
};
