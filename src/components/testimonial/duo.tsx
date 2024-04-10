import { Testimonial } from "@/cms/types";

type TestimonialDuoProps = {
  testimonials: Testimonial[];
};

export function TestimonialDuo({ testimonials }: TestimonialDuoProps) {
  const sortedTestimonials = [...testimonials].sort((a, b) => {
    return a.comment.length > b.comment.length ? -1 : 1;
  });

  return (
    <div className="wrapper mt-16 hidden lg:block">
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
                    <div className="w-16 h-16 rounded-full bg-navy-700 shrink-0"></div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-lg text-white font-display tracking-tight">
                        {t.username}
                      </span>
                      <span className="font-mono text-sm text-navy-700 tracking-tighter">
                        {new Date(t.date).toLocaleDateString("fr-FR")}
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
                  {/* <h5 className="font-semibold text-white">{t.title}</h5> */}
                  {/* <div className="w-full h-[1px] bg-navy-700 my-6"></div> */}
                  <p className="text-neutral-100 leading-[1.75]">
                    {'"' + t.comment + '"'}
                  </p>

                  <div className="flex flex-nowrap w-full mt-6 gap-4 items-center">
                    <div className="w-16 h-16 rounded-full bg-navy-700"></div>
                    <div className="flex flex-col">
                      <span className="text-lg text-white font-display tracking-tight">
                        {t.username}
                      </span>
                      <span className="font-mono text-sm text-navy-700 tracking-tighter">
                        {new Date(t.date).toLocaleDateString("fr-FR")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
