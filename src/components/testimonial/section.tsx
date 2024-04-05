import { TestimonialCarousel } from "./carousel";

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
  const sortedTestimonials = [...testimonials].sort((a, b) => {
    return a.comment.length > b.comment.length ? -1 : 1;
  });
  return (
    <section className="w-full relative md:pt-24 bg-gradient-to-b from-navy-900 to-navy-700">
      <div className="z-10 absolute inset-0 bg-gradient-to-b from-transparent to-navy-700 from-70%"></div>
      <div className="wrapper">
        <div className="flex flex-col justify-center items-center text-center w-full">
          <h3 className="uppercase text-xs text-navy-700 font-semibold">
            Témoignages
          </h3>
          <h5 className="font-display tracking-tighter text-5xl font-semibold text-white mt-4">
            Votre avis compte pour nous.
          </h5>
          <p className="text-neutral-100 leading-[1.75] max-w-prose text-balance mt-8">
            Découvrez les avis de notre communauté recueillis sur Disboard et
            DiscordInvites. Partagez vos expériences et enrichissez notre réseau
            en laissant le votre.
          </p>
        </div>
      </div>
      <div className="wrapper mt-16">
        <div className="w-full mx-auto overflow-hidden aspect-[2/1]">
          <div className="flex justify-center mx-auto flex-nowrap w-full gap-4">
            <ul className="flex-1 flex flex-col gap-4 max-w-[25rem] shrink-0">
              {sortedTestimonials
                .filter((t, i) => i % 2 === 0)
                .map((t, i) => (
                  <div
                    key={t.id}
                    className="w-full shrink-0 flex flex-col bg-navy-900/80 backdrop-blur p-8 rounded-tr-2xl border border-navy-700"
                  >
                    <h5 className="font-semibold text-white">{t.title}</h5>
                    <div className="w-full h-[1px] bg-navy-700 my-6"></div>
                    <p className="text-neutral-100 leading-[1.75]">
                      {'"' + t.comment + '"'}
                    </p>

                    <div className="flex flex-nowrap w-full mt-6 gap-4 items-center">
                      <div className="w-16 h-16 rounded-full bg-navy-700"></div>
                      <div className="flex flex-col">
                        <span className="text-lg text-white font-display tracking-tight">
                          {t.name}
                        </span>
                        <span className="font-mono text-sm text-navy-700 tracking-tighter">
                          {t.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </ul>
            <ul className="flex-1 flex flex-col gap-4 max-w-[25rem] shrink-0">
              {sortedTestimonials
                .filter((t, i) => i % 2 !== 0)
                .map((t, i) => (
                  <div
                    key={t.id}
                    className="w-full  shrink-0 flex flex-col bg-navy-900/80 backdrop-blur p-8 rounded-tr-2xl border border-navy-700"
                  >
                    <h5 className="font-semibold text-white">{t.title}</h5>
                    <div className="w-full h-[1px] bg-navy-700 my-6"></div>
                    <p className="text-neutral-100 leading-[1.75]">
                      {'"' + t.comment + '"'}
                    </p>

                    <div className="flex flex-nowrap w-full mt-6 gap-4 items-center">
                      <div className="w-16 h-16 rounded-full bg-navy-700"></div>
                      <div className="flex flex-col">
                        <span className="text-lg text-white font-display tracking-tight">
                          {t.name}
                        </span>
                        <span className="font-mono text-sm text-navy-700 tracking-tighter">
                          {t.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </div>
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
