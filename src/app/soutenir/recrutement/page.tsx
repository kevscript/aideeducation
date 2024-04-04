import { Button } from "@/components/button";
import { DiscordIcon } from "@/components/icons/discord";
import { RecrutementSlider } from "@/components/recrutement/slider";

const jobs = [
  {
    id: "1",
    role: "Consultant Pédagogique",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, incidunt voluptas perspiciatis corporis tempora architecto veniam quaerat rem saepe beatae id expedita quibusdam suscipit eligendi nesciunt repudiandae in repellendus dicta.",
    available: false,
  },
  {
    id: "2",
    role: "Consultant Pédagogique",
    description:
      "Consequuntur, incidunt voluptas perspiciatis corporis tempora architecto veniam quaerat rem saepe beatae id expedita quibusdam suscipit eligendi nesciunt repudiandae in repellendus dicta.",
    available: true,
  },
  {
    id: "3",
    role: "Consultant Pédagogique",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, incidunt voluptas perspiciatis corporis tempora architecto veniam quaerat rem saepe beatae id expedita quibusdam suscipit eligendi nesciunt repudiandae in repellendus dicta.",
    available: true,
  },
  {
    id: "4",
    role: "Consultant Pédagogique",
    description:
      "Consequuntur, incidunt voluptas perspiciatis corporis tempora architecto veniam quaerat rem saepe beatae id expedita quibusdam suscipit eligendi nesciunt repudiandae in repellendus dicta.",
    available: false,
  },
  {
    id: "5",
    role: "Consultant Pédagogique",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    available: false,
  },
  {
    id: "6",
    role: "Consultant Pédagogique",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, incidunt voluptas perspiciatis corporis tempora architecto veniam quaerat rem saepe beatae id expedita quibusdam suscipit eligendi nesciunt repudiandae in repellendus dicta.",
    available: true,
  },
  {
    id: "7",
    role: "Consultant Pédagogique",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, incidunt voluptas perspiciatis corporis tempora architecto veniam quaerat rem saepe beatae id expedita quibusdam suscipit eligendi nesciunt repudiandae in repellendus dicta.",
    available: true,
  },
];

export default function RecrutementPage() {
  return (
    <main className="py-24">
      <div className="wrapper flex flex-col gap-2">
        <h1>Recrutement</h1>
        <h3 className="text-2xl font-semibold tracking-tighter">
          Participez à l&apos;aventure
          <span className="px-0.5 bg-clip-text text-transparent bg-gradient-to-r from-navy-700 to-navy-900">
            AE
          </span>
          .
        </h3>
      </div>

      <div className="mt-12 lg:wrapper">
        <RecrutementSlider jobs={jobs} />
      </div>

      <div className="wrapper mt-12">
        <div className="grid grid-cols-1">
          <ul className="grid grid-cols-2 gap-8">
            {Array.from({ length: 5 }).map((x, i) => (
              <li key={i} className="flex-col gap-2 flex items-center">
                <div className="w-16 h-16 rounded-full bg-neutral-100"></div>
                <span className="font-semibold tracking-tight">Motivation</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-12 mt-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-navy-900 font-semibold tracking-tighter">
              Devenir bénévole
            </h3>
            <div className="flex flex-col gap-4">
              <p>
                AideEducation fonctionne grâce à une équipe de bénévoles qui
                assurent tous une multitude de tâches variées. De conseiller
                éducatif à développeur, en passant par graphiste ou encore
                modérateur, nombreux sont les postes que vous pouvez occuper au
                sein de notre association. Ainsi, quelles que soient vos
                compétences, elles peuvent être utiles à notre équipe.
              </p>
              <p>
                Vous pouvez consulter l&apos;organigramme afin de voir quel
                poste pourrait vous intéresser ou pour prendre contact avec le
                support sur notre serveur Discord.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-navy-900 font-semibold tracking-tighter">
              Votre candidature
            </h3>
            <div className="flex flex-col gap-4">
              <p>
                Une présentation rapide de vous-même (vos informations
                personnelles telles que votre adresse ou encore votre numéro de
                téléphone ne nous sont pas utiles). Le ou les poste souhaité(s),
                votre expérience, compétences, disponibilités et vos motivations
                doivent être énoncés clairement dans la candidature.
              </p>
              <p>
                Plus la candidature est complète plus elle est valorisante,
                n&apos;hésitez pas aussi à en travailler la forme. En effet, une
                candidature agréable visuellement est des plus appréciables à
                lire. Une orthographe sans faute montrera votre motivation et
                donnera de la valeur à votre candidature.
              </p>
              <p>
                Pour envoyer votre candidature cliquez sur le lien Discord
                ci-dessous, puis allez au salon Candidature. Si vous voulez
                parler avec un responsable ou un bénévole aller au salon
                Support. Sinon vous pouvez toujours envoyer un mail.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <Button
                startIcon={<DiscordIcon className="w-5 h-5 fill-white" />}
              >
                Rejoindre notre Discord
              </Button>
              <Button variant="secondary">Envoyer un email</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
