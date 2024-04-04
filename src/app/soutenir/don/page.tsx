import { Button } from "@/components/button";
import { DiscordIcon } from "@/components/icons/discord";

export default function DonPage() {
  return (
    <main className="py-24">
      <div className="wrapper flex flex-col gap-2">
        <h1 className="tracking-tight">Faire un don</h1>
        <h3 className="text-2xl font-semibold tracking-tighter">
          Pourquoi nous
          <span className="inline-block px-1.5 bg-clip-text text-transparent bg-gradient-to-r from-navy-700 to-navy-900">
            soutenir
          </span>
          financièrement?
        </h3>
      </div>

      <div className="wrapper mt-12">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col gap-4">
            <p>
              AideEducation est une association à but non-lucratif proposant une
              multitude de services d&apos;aides scolaires en ligne, et cela,
              gratuitement.
            </p>
            <p>
              Nous avons créé un espace sécurisé et propice aux travails sur nos
              diverses plateformes. Notre équipe a répondue à plus de 5 000
              demandes d&apos;aides aux devoirs sur notre Discord. Et nous
              proposons des fiches de révisions sur notre plateforme de cours en
              ligne.
            </p>
            <p>
              Cependant, tout cela à un coût. En effet, même si notre équipe est
              composée uniquement de bénévoles, la gestion de l&apos;association
              peut engendrer des coûts, l&apos;hébergement de nos sites ou de
              notre bot Discord nécessite la location d&apos;un serveur et
              d&apos;un nom de domaine.
            </p>
            <p>
              Même si les dépenses d&apos;AideEducation reste relativement
              faible, la gratuité totale de nos services, nous oblige à trouver
              des sources de financement. Ainsi, nous en appelons à votre
              générosité.
            </p>
          </div>

          <div className="flex flex-col gap-8 w-full p-8 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-b from-white to-neutral-50 border border-neutral-100">
            <Button startIcon={<DiscordIcon className="w-5 h-5 fill-white" />}>
              Faire un don sur HelloAsso
            </Button>

            <p className="tracking-tight text-neutral-500">
              Pour effectuer un don sous forme de virement ou obtenir des
              informations complémentaires sur la réception de celui-ci,
              n&apos;hésitez pas à contacter l&apos;administration.
            </p>

            <div className="flex w-full gap-4">
              <Button variant="secondary" className="flex-1">
                Discord
              </Button>
              <Button variant="secondary" className="flex-1">
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
