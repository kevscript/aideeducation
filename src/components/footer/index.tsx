import Link from "next/link";
import { LogoIcon } from "../icons/logo";
import { getSocials } from "@/cms/api";
import { isIcon } from "@/cms/typeguards";

export async function Footer() {
  const socials = await getSocials();

  return (
    <div className="w-full py-16 bg-navy-900 border-b-8 border-navy-700 mt-auto text-white">
      <div className="wrapper">
        <div className="flex flex-col w-full gap-16">
          <div className="flex flex-col lg:flex-row w-full justify-between gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 flex-nowrap items-center">
                <LogoIcon className="w-8 h-8 fill-white" />
                <span className="tracking-tighter font-bold">
                  AideEducation
                </span>
              </div>
              {socials && (
                <ul className="flex gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.id}
                      className="relative w-10 h-10 bg-navy-700 rounded-full flex justify-center items-center overflow-hidden"
                      href={social.link}
                      title={social.name}
                      target="_blank"
                    >
                      {isIcon(social.icon) && (
                        <div
                          className="w-full h-full bg-white"
                          style={{
                            mask: `url(${social.icon.url}) no-repeat center`,
                            WebkitMask: `url(${social.icon.url}) no-repeat center`,
                          }}
                        ></div>
                      )}
                    </a>
                  ))}
                </ul>
              )}

              <div className="">
                <p className="text-balance max-w-96">
                  Maison des Associations, 1018 quartier du Grand Parc - 14200
                  Hérouville St-Clair
                </p>
              </div>
            </div>
            <div className="flex gap-8 flex-wrap">
              <div className="flex flex-col gap-2 w-40 max-w-full">
                <span className="text-navy-700 font-semibold tracking-tight">
                  Qui sommes-nous?
                </span>
                <ul className="flex flex-col gap-2">
                  <Link href="/nous/association">Association</Link>
                  <Link href="/nous/equipe">Equipe</Link>
                </ul>
              </div>
              <div className="flex flex-col gap-2 w-40 max-w-full">
                <span className="text-navy-700 font-semibold tracking-tight">
                  Documentation
                </span>
                <ul className="flex flex-col gap-2">
                  <Link href="/documentation/orientation">Orientation</Link>
                  <Link href="/documentation/tutoriels">Tutoriels</Link>
                </ul>
              </div>
              <div className="flex flex-col gap-2 w-40 max-w-full">
                <span className="text-navy-700 font-semibold tracking-tight">
                  Soutenir
                </span>
                <ul className="flex flex-col gap-2">
                  <Link href="/soutenir/association">Recrutement</Link>
                  <Link href="/soutenir/don">Faire un don</Link>
                  <Link href="/soutenir/partenaires">Partenaires</Link>
                </ul>
              </div>
              <div className="flex flex-col gap-2 w-40 max-w-full">
                <ul className="flex flex-col gap-2">
                  <Link href="/">Accueil</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/mentions-legales">Mentions légales</Link>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-4 flex-wrap">
            <span className="font-semibold">
              © AideEducation{" "}
              <span className="font-mono tracking-tighter">
                {new Date().getFullYear()}
              </span>
            </span>
            <span>Tous droits réservés</span>
          </div>
        </div>
      </div>
    </div>
  );
}
