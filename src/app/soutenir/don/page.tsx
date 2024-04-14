import { getDon, getSocials } from "@/cms/api";
import { Button } from "@/components/button";
import { DiscordIcon } from "@/components/icons/discord";
import { LogoIcon } from "@/components/icons/logo";
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
          </div>
        </div>
      </PageHeader>

      {!don && (
        <div className="wrapper bg-neutral-50 rounded-2xl flex justify-center items-center gap-8 flex-col p-16 mt-12 lg:mt-16">
          <LogoIcon className="fill-neutral-200 w-16 h-16" />
          <p>Cette page rencontre quelques soucis actuellement :(</p>
        </div>
      )}

      {don && (
        <div className="wrapper pt-16">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between w-full gap-8 xl:gap-16 h-fit">
            <div className="flex-1">
              <div className="flex flex-col gap-4">
                <p className="max-w-prose leading-[1.75] whitespace-pre-wrap">
                  {don.description}
                </p>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] bg-neutral-100"></div>

            <div className="flex-1 flex flex-col items-start">
              <div className="flex flex-col gap-8 lg:max-w-[24rem] lg:items-start">
                <Button
                  is="anchor"
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
                    is="anchor"
                    href={discord?.link || "/"}
                    startIcon={
                      <DiscordIcon className="w-5 h-5 fill-navy-900 group-hover:fill-white" />
                    }
                    variant="secondary"
                  >
                    Rejoindre Discord
                  </Button>
                  <Button variant="secondary" is="link" href="/contact">
                    Contactez-nous
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
