import { getTestimonials } from "@/cms/api";
import { TestimonialCarousel } from "./carousel";
import { TestimonialDuo } from "./duo";
import { TestimonialSlider } from "./slider";
import { TriangleSVG } from "../triangle";

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

export async function TestimonialSection() {
  const testimonials = await getTestimonials();

  return (
    <section className="w-full relative py-16 md:py-24 lg:pb-0 bg-gradient-to-b from-navy-900 to-navy-700 z-0 overflow-hidden">
      <TriangleSVG
        className="absolute -top-[80%] -left-[10%] lg:top-[70%] lg:-left-[20%] -z-20 stroke-navy-900 rotate-45 w-1/2"
        variant="outline"
      />
      <TriangleSVG
        className="absolute -bottom-[60%] -right-[25%] lg:bottom-[60%] lg:-right-[20%] -z-10 stroke-navy-900 rotate-90 w-1/2"
        variant="outline"
      />

      <TriangleSVG className="absolute bottom-[75%] left-[3%] -z-10 fill-navy-700 w-3 lg:w-8 h-auto rotate-[105deg]" />
      <div className="absolute w-3 lg:w-8 aspect-square rounded-full bg-navy-700 -z-10 right-[4%] lg:top-[40%]"></div>
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
  );
}
