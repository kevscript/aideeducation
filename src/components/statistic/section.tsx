import { StatisticList } from "./list";

export function StatisticSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-navy-900 to-navy-700">
      <div className="wrapper">
        <div className="flex flex-col-reverse xl:flex-row xl:flex-nowrap xl:justify-between gap-8 lg:gap-16">
          <StatisticList
            statistics={[
              {
                amount: 2064,
                suffix: "+",
                description: "membres de la communauté.",
              },
              {
                amount: 24,
                prefix: "<",
                suffix: "h",
                description: "temps de traitement moyen des tickets.",
              },
              {
                amount: 68,
                description: "bénévoles à votre service.",
              },
              {
                amount: 2064,
                suffix: "+",
                description: "membres de la communauté.",
              },
              {
                amount: 24,
                prefix: "<",
                suffix: "h",
                description: "temps de traitement moyen des tickets.",
              },
            ]}
          />
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
