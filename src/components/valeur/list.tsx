type ValeurListProps = {
  valeurs: any[];
};

export function ValeurList({ valeurs }: ValeurListProps) {
  return (
    <div className="hidden wrapper lg:block">
      <ul className="w-full flex flex-no-wrap gap-4">
        {valeurs.length &&
          valeurs.map((valeur) => (
            <li
              key={valeur.id}
              className="flex shrink-0 flex-col p-12 border border-neutral-100 max-w-96 w-full rounded-tr-[2rem] pb-32"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-50"></div>
              <h5 className="text-2xl text-navy-900 mt-16 font-semibold tracking-tighter">
                {valeur.title}
              </h5>
              <p className="mt-4 text-neutral-500 leading-[1.75]">
                {valeur.description}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
