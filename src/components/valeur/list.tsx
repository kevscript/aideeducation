type ValeurListProps = {
  valeurs: any[];
};

export function ValeurList({ valeurs }: ValeurListProps) {
  return (
    <div className="hidden wrapper md:block">
      <ul className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {valeurs.length &&
          valeurs.map((valeur) => (
            <li
              key={valeur.id}
              className="flex flex-col p-8 gap-4 rounded-tr-2xl rounded-bl-2xl bg-white"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-100"></div>
              <h5 className="text-2xl font-semibold text-navy-900 tracking-tight">
                {valeur.title}
              </h5>
              <p>{valeur.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
