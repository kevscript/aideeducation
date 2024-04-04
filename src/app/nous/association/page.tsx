import Link from "next/link";

export default function AssociationPage() {
  return (
    <main className="py-24">
      <div className="wrapper flex flex-col gap-2">
        <h1>L&apos;Association</h1>
        <h3 className="text-2xl font-semibold tracking-tighter">
          Qu&apos;est-ce qu&apos;
          <span className="px-0.5 bg-clip-text text-transparent bg-gradient-to-r from-navy-700 to-navy-900">
            AideEducation
          </span>
          ?
        </h3>
      </div>

      <div className="wrapper flex flex-col gap-12 mt-12">
        <div className="flex flex-col gap-4">
          <p>
            AideEducation est une association à but non lucratif ayant pour
            objectif de rendre accessible à tous l’aide scolaire. Pour cela,
            nous proposons des services entièrement gratuits et en ligne.
          </p>
          <p>
            Notre association est exclusivement composée de bénévoles. Ils sont
            issus d’un recrutement rigoureux et disposent de profils très variés
            : certains sont déjà dans le monde du travail tandis que d’autres
            sont encore en train d’étudier. Cette diversité des profils nous
            permet d’obtenir une équipe riche en compétences et en expériences,
            ce qui en définitive nous permet de proposer des services d’une
            meilleure qualité.
          </p>
          <p>
            A l’origine nous n’étions qu’un serveur Discord destiné à aider des
            personnes en difficulté dans leurs devoirs grâce à un système d’aide
            aux devoirs en ligne. Nous voulions soutenir les élèves en
            difficulté scolaire.
          </p>
        </div>
        <Link href={"/nous/equipe"}>
          <div className="w-full bg-gradient-to-bl from-neutral-50 to-neutral-100 rounded-tr-2xl rounded-bl-2xl p-8 gap-4 flex flex-col">
            <div className="relative flex flex-nowrap gap">
              <div className="w-16 h-16 rounded-full bg-gradient-to-bl from-navy-700 to-navy-900 border-2 border-white"></div>
              <div className="absolute top-0 left-[40px] w-16 h-16 rounded-full bg-gradient-to-bl from-navy-700 to-navy-900 border-2 border-white"></div>
              <div className="absolute top-0 left-[80px] w-16 h-16 rounded-full bg-gradient-to-bl from-navy-700 to-navy-900 border-2 border-white"></div>
            </div>
            <p>Découvrez nos Bénévoles</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
