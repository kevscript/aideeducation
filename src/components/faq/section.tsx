import { FaqAccordeon } from "./accordeon";

export function FaqSection() {
  return (
    <section className="relative w-full pt-8 pb-16">
      <div className="wrapper">
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
