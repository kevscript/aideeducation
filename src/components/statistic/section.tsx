import { getStatistics } from "@/cms/api";
import { StatisticList } from "./list";
import { TriangleSVG } from "../triangle";

export async function StatisticSection() {
  const statistics = await getStatistics();

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-navy-900 to-navy-700 overflow-hidden z-0">
      <TriangleSVG
        className="absolute -top-[80%] -left-[10%] lg:top-[10%] lg:-left-[20%] -z-20 stroke-navy-900 rotate-45 w-1/2"
        variant="outline"
      />
      <TriangleSVG
        className="absolute -bottom-[60%] -right-[25%] lg:-bottom-[15%] lg:-right-[25%] -z-10 stroke-navy-900 rotate-90 w-1/2"
        variant="outline"
      />

      <TriangleSVG className="absolute bottom-[20%] left-[3%] -z-10 fill-navy-700 w-3 lg:w-8 h-auto rotate-[105deg]" />
      <div className="absolute w-3 lg:w-8 aspect-square rounded-full bg-navy-700 -z-10 right-[4%] lg:top-[40%]"></div>
      <div className="wrapper">
        <div className="flex flex-col-reverse xl:flex-row xl:flex-nowrap xl:justify-between gap-8 lg:gap-16">
          <StatisticList statistics={statistics} />
          <div className="flex flex-col w-full max-w-[24rem] text-white shrink-0">
            <h3 className="up-title-light">Statistiques</h3>
            <h5 className="title-light mt-4 text-balance">
              Notre activité en chiffres.
            </h5>

            <p className="text-neutral-50 leading-[1.75] mt-8">
              Au-delà des mots. Découvrez notre parcours à travers nos chiffres,
              témoins de notre expertise en matière d&apos;aide scolaire.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper"></div>
    </section>
  );
}
