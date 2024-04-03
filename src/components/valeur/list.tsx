type ValeurListProps = {
  valeurs: any[];
};

export function ValeurList({ valeurs }: ValeurListProps) {
  return (
    <div className="hidden wrapper lg:block">
      <ul className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {valeurs.length &&
          valeurs.map((valeur) => (
            <li
              key={valeur.id}
              className="flex flex-col p-8 gap-4 rounded-tr-2xl rounded-bl-2xl bg-white"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-50"></div>
              <h5 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-navy-900 to-navy-700">
                {valeur.title}
              </h5>
              <p className="">{valeur.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
