import { StatisticList } from "./list";

export function StatisticSection() {
  return (
    <section className="py-8 md:py-16 xl:py-24 w-full relative">
      <div className="wrapper">
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
          ]}
        />
      </div>
    </section>
  );
}
