import { TestimonialCarousel } from "./carousel";
import { TestimonialDuo } from "./duo";
import { TestimonialSlider } from "./slider";

const testimonials = [
  {
    id: "1",
    title: "Une aide exceptionnelle.",
    name: "John Snow",
    date: "01/10/21",
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "2",
    title: "Une aide exceptionnelle.",

    name: "John Snow",
    date: "01/10/21",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas suscipit harum aliquam assumenda ea beatae optio nisi, temporibus quasi incidunt. Sunt obcaecati illo eius itaque cum, alias excepturi libero? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quae vitae, impedit vel sequi modi excepturi sed mollitia dignissimos consequatur similique expedita consectetur doloremque minima voluptatem ex reprehenderit, dolorum velit.",
  },
  {
    id: "3",
    title: "Une aide exceptionnelle.",
    name: "John Snow",
    date: "01/10/21",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas suscipit harum aliquam assumenda ea beatae optio nisi, temporibus quasi incidunt. Sunt obcaecati illo eius itaque cum, alias excepturi libero?",
  },
  {
    id: "4",
    title: "Une aide exceptionnelle.",
    name: "John Snow",
    date: "01/10/21",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas suscipit harum aliquam assumenda ea beatae optio nisi, temporibus quasi incidunt. Sunt obcaecati illo eius itaque cum, alias excepturi libero? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

export function TestimonialSection() {
  return (
    <section className="w-full relative py-16 md:pt-24 md:pb-0 bg-gradient-to-b from-navy-900 to-navy-700">
      <div className="hidden lg:block z-10 absolute inset-0 bg-gradient-to-b from-transparent to-navy-700 from-70%"></div>
      <div className="wrapper">
        <div className="flex flex-col justify-center md:items-center md:text-center w-full">
          <h3 className="up-title-light">Témoignages</h3>
          <h5 className="title-light text-balance mt-4">
            Votre avis compte pour nous.
          </h5>
          <p className="text-neutral-100 leading-[1.75] max-w-prose text-balance mt-8">
            Découvrez les avis de notre communauté recueillis sur Disboard et
            DiscordInvites. Partagez vos expériences et enrichissez notre réseau
            en laissant le votre.
          </p>
        </div>
      </div>
      <TestimonialDuo testimonials={testimonials} />
      <TestimonialSlider testimonials={testimonials} />
    </section>
    // <section className="w-full relative bg-gradient-to-br from-navy-700 to-navy-900">
    //   <div className="w-full h-full grid grid-cols-[minmax(1rem,1fr)_minmax(16rem,56rem)_minmax(1rem,1fr)] grid-rows-[4rem_1fr_4rem] lg:grid-rows-[8rem_1fr_8rem]">
    //     <div className="col-start-2 row-start-2 col-span-1 row-span-1 relative group transition duration-300 lg:hover:bg-neutral-900 border border-navy-900 z-0">
    //       <div className="w-full h-full flex flex-col p-8 lg:p-16  bg-gradient-to-bl from-white to-neutral-100 gap-8 rounded-tr-2xl lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition-all duration-300 ease-in-out">
    //         <TestimonialCarousel testimonials={testimonials} />
    //       </div>
    //     </div>
    //     <div className="col-start-2 row-start-1 col-span-1 row-span-1 border-x border-navy-900 h-full w-full"></div>
    //     <div className="col-start-2 row-start-3 col-span-1 row-span-1 border-x border-navy-900 h-full w-full"></div>
    //     <div className="col-start-1 row-start-2 col-span-1 row-span-1 border-y border-navy-900 h-full w-full"></div>
    //     <div className="col-start-3 row-start-2 col-span-1 row-span-1 border-y border-navy-900 h-full w-full"></div>
    //   </div>
    // </section>
  );
}
