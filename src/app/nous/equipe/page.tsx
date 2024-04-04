export default function EquipePage() {
  return (
    <main className="py-24">
      <div className="wrapper flex flex-col gap-2">
        <h1>L&apos;Equipe</h1>
        <h3 className="text-2xl font-semibold tracking-tighter">
          Découvrez nos
          <span className="pl-1 pr-0.5 bg-clip-text text-transparent bg-gradient-to-r from-navy-700 to-navy-900">
            Bénévoles
          </span>
          .
        </h3>
      </div>

      <div className="wrapper">
        <ul className="flex flex-wrap gap-4 my-8">
          <li className="px-4 py-2 rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
            <span className="text-sm">Tous</span>
          </li>
          <li className="px-4 py-2 rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
            <span className="text-sm">Direction Générale</span>
          </li>
          <li className="px-4 py-2 rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
            <span className="text-sm">Dept. Pédagogique</span>
          </li>
          <li className="px-4 py-2 rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
            <span className="text-sm">Dept. Intérieur</span>
          </li>
          <li className="px-4 py-2 rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
            <span className="text-sm">Dept. Exterieur</span>
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <ul className="w-full flex flex-col">
          <li className="relative w-full py-8 px-5 flex flex-nowrap gap-4 items-center bg-gradient-to-b from-white to-neutral-50 border border-neutral-50">
            <div className="w-16 h-16 rounded-full bg-neutral-100"></div>
            <div className="flex flex-col flex-1">
              <span className="font-bold font-display">Kévin Ostafinski</span>
              <span className="tracking-tighter text-navy-900 text-sm">
                Développeur
              </span>
            </div>
          </li>
          <li className="relative w-full py-8 px-5 flex flex-nowrap gap-4 items-center bg-gradient-to-b from-white to-neutral-50 border border-neutral-50">
            <div className="w-16 h-16 rounded-full bg-neutral-100"></div>
            <div className="flex flex-col flex-1">
              <span className="font-bold font-display">Kévin Ostafinski</span>
              <span className="tracking-tighter text-navy-900 text-sm">
                Développeur
              </span>
            </div>
          </li>
          <li className="relative w-full py-8 px-5 flex flex-nowrap gap-4 items-center bg-gradient-to-b from-white to-neutral-50 border border-neutral-50">
            <div className="w-16 h-16 rounded-full bg-neutral-100"></div>
            <div className="flex flex-col flex-1">
              <span className="font-bold font-display">Kévin Ostafinski</span>
              <span className="tracking-tighter text-navy-900 text-sm">
                Développeur
              </span>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
