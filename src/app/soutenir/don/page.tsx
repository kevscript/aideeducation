import { getDon, getSocials } from "@/cms/api";
import { Button } from "@/components/button";
import { DiscordIcon } from "@/components/icons/discord";
import { PageHeader } from "@/components/page-header";

export default async function DonPage() {
  const don = await getDon();
  const socials = await getSocials();
  const discord = socials.find((s) => s.name.toLowerCase() === "discord");

  return (
    <main className="pb-24">
      <PageHeader>
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between lg:w-full lg:items-end gap-8 xl:gap-16">
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="up-title-light">Faire un don</h3>
              <h5 className="title-light">
                Pourquoi nous soutenir financièrement?
              </h5>
            </div>
            {/* <div className="hidden lg:block w-[1px]"></div>
            <div className="flex-1 flex flex-col">
              <p className="text-white leading-[1.75] lg:max-w-[32rem] ">
                Notre association est fière de compter sur une équipe dévouée de
                bénévoles passionnés, prêts à partager leurs connaissances et
                leur expérience pour soutenir notre mission.
              </p>
            </div> */}
          </div>
        </div>
      </PageHeader>

      <div className="wrapper pt-16">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between w-full gap-8 xl:gap-16 h-fit">
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <p className="max-w-prose leading-[1.75] whitespace-pre-wrap">
                {don.description}
              </p>
              <p className="max-w-prose leading-[1.75]">
                Nous avons créé un espace sécurisé et propice aux travails sur
                nos diverses plateformes. Notre équipe a répondue à plus de 5
                000 demandes d&apos;aides aux devoirs sur notre Discord. Et nous
                proposons des fiches de révisions sur notre plateforme de cours
                en ligne.
              </p>
              <p className="max-w-prose leading-[1.75]">
                Cependant, tout cela à un coût. En effet, même si notre équipe
                est composée uniquement de bénévoles, la gestion de
                l&apos;association peut engendrer des coûts, l&apos;hébergement
                de nos sites ou de notre bot Discord nécessite la location
                d&apos;un serveur et d&apos;un nom de domaine.
              </p>
              <p className="max-w-prose leading-[1.75]">
                Même si les dépenses d&apos;AideEducation reste relativement
                faible, la gratuité totale de nos services, nous oblige à
                trouver des sources de financement. Ainsi, nous en appelons à
                votre générosité.
              </p>
            </div>
          </div>

          <div className="hidden lg:block w-[1px] bg-neutral-100"></div>

          <div className="flex-1 flex flex-col items-start">
            <div className="flex flex-col gap-8 lg:max-w-[24rem] lg:items-start">
              <Button
                as="anchor"
                href={don.helloAssoUrl || "/"}
                className="tracking-normal"
              >
                Faire un don sur HelloAsso
              </Button>

              <p className="leading-[1.75] text-neutral-500 max-w-prose">
                Pour effectuer un don sous forme de virement ou obtenir des
                informations complémentaires sur la réception de celui-ci,
                n&apos;hésitez pas à contacter l&apos;administration.
              </p>
              <div className="flex flex-wrap w-full gap-4 lg:items-start">
                <Button
                  as="anchor"
                  href={discord?.link || "/"}
                  startIcon={
                    <DiscordIcon className="w-5 h-5 fill-navy-900 group-hover:fill-white" />
                  }
                  variant="secondary"
                >
                  Rejoindre Discord
                </Button>
                <Button variant="secondary" as="link" href="/contact">
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
