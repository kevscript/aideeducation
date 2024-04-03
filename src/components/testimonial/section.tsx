import { TestimonialCarousel } from "./carousel";

const testimonials = [
  {
    id: "1",
    name: "John Snow",
    date: "01/10/21",
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "2",
    name: "John Snow",
    date: "01/10/21",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas suscipit harum aliquam assumenda ea beatae optio nisi, temporibus quasi incidunt. Sunt obcaecati illo eius itaque cum, alias excepturi libero? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quae vitae, impedit vel sequi modi excepturi sed mollitia dignissimos consequatur similique expedita consectetur doloremque minima voluptatem ex reprehenderit, dolorum velit.",
  },
  {
    id: "3",
    name: "John Snow",
    date: "01/10/21",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas suscipit harum aliquam assumenda ea beatae optio nisi, temporibus quasi incidunt. Sunt obcaecati illo eius itaque cum, alias excepturi libero?",
  },
  {
    id: "4",
    name: "John Snow",
    date: "01/10/21",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas suscipit harum aliquam assumenda ea beatae optio nisi, temporibus quasi incidunt. Sunt obcaecati illo eius itaque cum, alias excepturi libero? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

export function TestimonialSection() {
  return (
    <section className="w-full relative bg-gradient-to-br from-navy-700 to-navy-900">
      <div className="w-full h-full grid grid-cols-[minmax(1rem,1fr)_minmax(16rem,56rem)_minmax(1rem,1fr)] grid-rows-[4rem_1fr_4rem] lg:grid-rows-[8rem_1fr_8rem]">
        <div className="col-start-2 row-start-2 col-span-1 row-span-1 relative group transition duration-300 lg:hover:bg-neutral-900 border border-navy-900 z-0">
          <div className="w-full h-full flex flex-col p-8 lg:p-16  bg-gradient-to-bl from-white to-neutral-100 gap-8 rounded-tr-2xl lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition-all duration-300 ease-in-out">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
        <div className="col-start-2 row-start-1 col-span-1 row-span-1 border-x border-navy-900 h-full w-full"></div>
        <div className="col-start-2 row-start-3 col-span-1 row-span-1 border-x border-navy-900 h-full w-full"></div>
        <div className="col-start-1 row-start-2 col-span-1 row-span-1 border-y border-navy-900 h-full w-full"></div>
        <div className="col-start-3 row-start-2 col-span-1 row-span-1 border-y border-navy-900 h-full w-full"></div>
      </div>
    </section>
  );
}
