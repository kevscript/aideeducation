import { Button } from "@/components/button";
import { PageHeader } from "@/components/page-header";

export default function MentionsLegalesPage() {
  return (
    <main className="pb-24">
      <PageHeader>
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between lg:w-full lg:items-end gap-8 xl:gap-16">
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="up-title-light">Mentions</h3>
              <h5 className="title-light">Mentions Légales</h5>
            </div>
          </div>
        </div>
      </PageHeader>
      <div className="wrapper my-12 lg:my-16 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-navy-900 tracking-tight">
            AideEducation
          </h3>
          <ul className="flex flex-col list-disc list-inside">
            <li>
              Maison des Associations, 1018 quartier du Grand Parc 14200
              Hérouville-Saint-Clair
            </li>
            <li>contact@aideeducation.fr</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-navy-900 tracking-tight">
            Directeur de publication
          </h3>
          <ul className="flex flex-col list-disc list-inside">
            <li>Mathieu LE TUTOUR</li>
            <li>mathieu@aideeducation.fr</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-navy-900 tracking-tight">
            Hébergeur
          </h3>
          <ul className="flex flex-col list-disc list-inside">
            <li>ONETSOLUTIONS - Société par action simplifiée</li>
            <li>1 Allée de l&apos;Ecluse 33370 YVRAC</li>
            <li>Société enregistrée au RCS de Bordeaux</li>
            <li>SIRET : 533 905 659</li>
            <li>Code APE : 6201Z</li>
            <li>Numéro de TVA : FR27 533905659</li>
            <li>Déclaration CNIL : 1524760v0</li>
            <li>
              Site Internet:{" "}
              <a
                href="https://onetsolutions.net/"
                target="_blank"
                className="text-navy-900"
              >
                https://onetsolutions.net/
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-navy-900 tracking-tight">
            Réglement générale sur la protection des données.
          </h3>
          <div className="flex flex-col gap-4 max-w-prose">
            <p>
              Les informations recueillies par AideEducation lors de l’adhésion
              ou d’une relation contractuelle sont enregistrées dans une base de
              donnée informatique par le pole administratif d’AideEducation. La
              base légale du traitement est l’obligation légale pour la gestion
              administrative et la tenue de la comptabilité de l’association
              pour les personnes membres de l’association. La base légale est le
              contrat pour la gestion des commandes, des livraisons ou du
              service pour les partenaires ou prestataires de l’association.
            </p>
            <p>
              Les données marquées par un astérisque doivent obligatoirement
              être fournies. Dans le cas contraire, la gestion de l’adhésion ou
              de la relation contractuelle ne pourra pas être traitée et
              enregistrée au sein de l’association.
            </p>
            <p>
              Les données collectées seront communiquées au seul destinataire
              suivant : Le pôle administratif d’AideEducation.
            </p>
            <p>
              Elles seront conservées pendant pour la durée nécessaire à des
              archives courantes (le temps de leur utilisation) ou
              intermédiaires (si cela présente un intérêt administratif).
            </p>
            <p>
              Les renseignements que vous fournissez feront l’objet d’un
              traitement automatisé dans le respect de la{" "}
              <a
                className="text-navy-900"
                target="_blank"
                href="https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006068624/"
              >
                Loi n° 78-17 du 6 janvier 1978 relative à l&apos;informatique,
                aux fichiers et aux libertés
              </a>
              . Vous pouvez faire une demande d&apos;accès, de rectification, de
              suppression ou de portabilité des données, mais également de
              limitation ou d&apos;opposition de leurs traitements si
              nécessaire.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question sur le traitement
              de vos données dans ce dispositif, vous pouvez prendre contact
              avec l’administration par mail par le biais de l’adresse suivante
              : contact@aideeducation.fr
            </p>
            <p>
              Pour plus d’informations sur vos droits, nous vous invitons à
              consulter le site{" "}
              <a
                className="text-navy-900"
                target="_blank"
                href="https://cnil.fr/"
              >
                CNIL.fr
              </a>
              . Si vous estimez, après nous avoir contactés, que vos droits «
              Informatique et Libertés » ne sont pas respectés, vous pouvez
              adresser une réclamation à la CNIL.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
