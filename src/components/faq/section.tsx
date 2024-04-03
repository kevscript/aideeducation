import { FaqAccordeon } from "./accordeon";

export function FaqSection() {
  return (
    <section className="relative w-full pt-8 pb-16 lg:pt-16">
      <div className="wrapper flex justify-center items-center py-8">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-balance text-center">
          Les{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-navy-700 to-navy-900">
            questions
          </span>{" "}
          qu&apos;on nous pose le plus souvent.
        </p>
      </div>
      <div className="wrapper flex justify-center items-center flex-col">
        <FaqAccordeon
          faqs={[
            { id: "1", question: "question", answer: "answer" },
            { id: "2", question: "question", answer: "answer" },
            { id: "3", question: "question", answer: "answer" },
            { id: "4", question: "question", answer: "answer" },
            { id: "5", question: "question", answer: "answer" },
          ]}
        />
      </div>
    </section>
  );
}
