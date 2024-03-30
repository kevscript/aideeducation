import Link from "next/link";

export function Menu() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-navy-700 to-navy-900 -z-10">
      <div className="wrapper pt-8 pb-8 text-white list-none w-full h-full">
        <div className="flex flex-col gap-8 justify-center w-full items-center text-center h-full">
          <div className="flex flex-col w-full gap-8 flex-1 justify-center">
            <ul className="flex flex-col w-full gap-1">
              <Link href="/">
                <li className="bg-gradient-to-r  rounded-full from-10% to-90% from-transparent via-navy-700 to-transparent py-1">
                  Accueil
                </li>
              </Link>
            </ul>

            <ul className="flex flex-col w-full gap-1">
              <Link href="/">
                <li className="bg-gradient-to-r  rounded-full from-10% to-90% from-transparent via-navy-700 to-transparent py-1">
                  Association
                </li>
              </Link>
              <Link href="/">
                <li className="bg-gradient-to-r  rounded-full from-10% to-90% from-transparent via-navy-700 to-transparent py-1">
                  Equipe
                </li>
              </Link>
            </ul>

            <ul className="flex flex-col w-full gap-1">
              <Link href="/">
                <li className="bg-gradient-to-r rounded-full from-10% to-90% from-transparent via-navy-700 to-transparent py-1">
                  Orientation
                </li>
              </Link>
              <Link href="/">
                <li className="bg-gradient-to-r rounded-full from-10% to-90% from-transparent via-navy-700 to-transparent py-1">
                  Tutoriels
                </li>
              </Link>
            </ul>

            <ul className="flex flex-col w-full gap-1">
              <Link href="/">
                <li className="bg-gradient-to-r rounded-full from-10% to-90% from-transparent via-navy-700 to-transparent py-1">
                  Recrutement
                </li>
              </Link>
              <Link href="/">
                <li className="bg-gradient-to-r rounded-full from-10% to-90% from-transparent via-navy-700 to-transparent py-1">
                  Faire un don
                </li>
              </Link>
              <Link href="/">
                <li className="bg-gradient-to-r rounded-full from-10% to-90% from-transparent via-navy-700 to-transparent py-1">
                  Partenaires
                </li>
              </Link>
            </ul>

            <ul className="flex flex-col w-full gap-1">
              <Link href="/">
                <li className="bg-gradient-to-r rounded-full from-10% to-90% from-transparent via-navy-700 to-transparent py-1">
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          <ul className="flex flex-nowrap w-full mt-auto justify-center gap-2 items-center">
            <a href="/" target="_blank">
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-navy-700 to-navy-900"></div>
            </a>
            <a href="/" target="_blank">
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-navy-700 to-navy-900"></div>
            </a>
            <a href="/" target="_blank">
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-navy-700 to-navy-900"></div>
            </a>
            <a href="/" target="_blank">
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-navy-700 to-navy-900"></div>
            </a>
            <a href="/" target="_blank">
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-navy-700 to-navy-900"></div>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
