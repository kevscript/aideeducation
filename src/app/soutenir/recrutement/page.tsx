import { getJobs, getSocials } from "@/cms/api";
import { Button } from "@/components/button";
import { BulbIcon } from "@/components/icons/bulb";
import { CalendarIcon } from "@/components/icons/calendar";
import { DiscordIcon } from "@/components/icons/discord";
import { LaptopIcon } from "@/components/icons/laptop";
import { MicrophoneIcon } from "@/components/icons/microphone";
import { PeaceIcon } from "@/components/icons/peace";
import { PageHeader } from "@/components/page-header";
import { JobGrid } from "@/components/recrutement/job-grid";
import { JobSlider } from "@/components/recrutement/job-slider";

export default async function RecrutementPage() {
  const jobs = await getJobs();
  const socials = await getSocials();
  const discord = socials.find((s) => s.name.toLowerCase() === "discord");

  return (
    <main className="pb-24">
      <PageHeader>
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between lg:w-full lg:items-end gap-8 xl:gap-16">
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="up-title-light">Recrutement</h3>
              <h5 className="title-light">
                Participez à l&apos;aventure AideEducation!
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

      <div className="wrapper mt-12 lg:mt-16">
        <div className="flex flex-col-reverse lg:flex-row lg:flex-nowrap lg:justify-start w-full gap-8 xl:gap-16 h-fit">
          <div className="w-fit">
            <div className="flex flex-col gap-4 max-w-prose ">
              <h3 className="text-2xl text-navy-900 font-semibold tracking-tighter">
                Devenir bénévole
              </h3>
              <p className="leading-[1.75] max-w-prose">
                AideEducation fonctionne grâce à une équipe de bénévoles qui
                assurent tous une multitude de tâches variées. De conseiller
                éducatif à développeur, en passant par graphiste ou encore
                modérateur, nombreux sont les postes que vous pouvez occuper au
                sein de notre association. Ainsi, quelles que soient vos
                compétences, elles peuvent être utiles à notre équipe.
              </p>
              <p className="leading-[1.75] max-w-prose">
                Vous pouvez consulter l&apos;organigramme afin de voir quel
                poste pourrait vous intéresser ou pour prendre contact avec le
                support sur notre serveur Discord.
              </p>

              <h3 className="text-2xl text-navy-900 font-semibold tracking-tighter mt-8">
                Votre candidature
              </h3>
              <p className="leading-[1.75] max-w-prose">
                Une présentation rapide de vous-même (vos informations
                personnelles telles que votre adresse ou encore votre numéro de
                téléphone ne nous sont pas utiles). Le ou les poste souhaité(s),
                votre expérience, compétences, disponibilités et vos motivations
                doivent être énoncés clairement dans la candidature.
              </p>
              <p className="leading-[1.75] max-w-prose">
                Plus la candidature est complète plus elle est valorisante,
                n&apos;hésitez pas aussi à en travailler la forme. En effet, une
                candidature agréable visuellement est des plus appréciables à
                lire. Une orthographe sans faute montrera votre motivation et
                donnera de la valeur à votre candidature.
              </p>
              <p className="leading-[1.75] max-w-prose">
                Pour envoyer votre candidature cliquez sur le lien Discord
                ci-dessous, puis allez au salon Candidature. Si vous voulez
                parler avec un responsable ou un bénévole aller au salon
                Support. Sinon vous pouvez toujours envoyer un mail.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  startIcon={<DiscordIcon className="w-5 h-5 fill-white" />}
                  is="anchor"
                  href={discord?.link || "/"}
                >
                  Rejoindre Discord
                </Button>
                <Button variant="secondary" is="link" href="/contact">
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-[1px] bg-neutral-100"></div>
          <div className="flex flex-col items-center mb-8 lg:mb-0">
            <ul className="w-full lg:w-fit grid grid-cols-2 gap-8 xl:gap-16 lg:mx-8">
              <li className="flex-col gap-2 flex items-center">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex justify-center items-center overflow-hidden">
                  <PeaceIcon className="w-8 fill-navy-900" />
                </div>
                <span className="font-semibold tracking-tight">Motivation</span>
              </li>
              <li className="flex-col gap-2 flex items-center">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex justify-center items-center overflow-hidden">
                  <CalendarIcon className="w-7 fill-navy-900" />
                </div>
                <span className="font-semibold tracking-tight">
                  Disponibilité
                </span>
              </li>
              <li className="flex-col gap-2 flex items-center">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex justify-center items-center overflow-hidden">
                  <BulbIcon className="w-9 fill-navy-900" />
                </div>
                <span className="font-semibold tracking-tight">
                  Savoir-Faire
                </span>
              </li>
              <li className="flex-col gap-2 flex items-center">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex justify-center items-center overflow-hidden">
                  <LaptopIcon className="w-8 fill-navy-900" />
                </div>
                <span className="font-semibold tracking-tight">Ordinateur</span>
              </li>
              <li className="flex-col gap-2 flex items-center">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex justify-center items-center overflow-hidden">
                  <MicrophoneIcon className="w-8 fill-navy-900" />
                </div>
                <span className="font-semibold tracking-tight">Microphone</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-16 lg:hidden">
        <JobSlider jobs={jobs} />
      </div>

      <div className="wrapper mt-12 lg:mt-24 hidden lg:block">
        <JobGrid jobs={jobs} />
      </div>
    </main>
  );
}
