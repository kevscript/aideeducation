import { Button } from "../button";
import { DiscordIcon } from "../icons/discord";
import { PageTitle } from "../page-title";
import { FaqAccordeon } from "./accordeon";

export function FaqSection() {
  return (
    <section className="relative w-full md:py-24">
      <div className="wrapper">
        <div className="flex flex-nowrap justify-between gap-16">
          <div className="flex flex-col w-full max-w-[32rem] shrink-0">
            <h3 className="uppercase text-xs text-navy-700 font-semibold">
              FAQ
            </h3>
            <h5 className="font-display tracking-tight text-5xl font-semibold mt-4 text-balance">
              Les questions qu’on nous pose.
            </h5>

            <p className="text-neutral-500 leading-[1.75] mt-8 max-w-96">
              Pour toute autre question ou problème, connectez vous directement
              à notre serveur Discord et veuillez ouvrir un ticket de support.
              Vous pouvez également nous contacter par mail.
            </p>

            <div className="flex gap-4 mt-12">
              <Button
                theme="light"
                startIcon={<DiscordIcon className="w-5 h-5 fill-white" />}
              >
                Rejoindre Discord
              </Button>
              <Button variant="secondary">Contactez-nous</Button>
            </div>
          </div>
          <FaqAccordeon
            faqs={[
              { id: "1", question: "question", answer: "answer" },
              { id: "2", question: "question", answer: "answer" },
              { id: "3", question: "question", answer: "answer" },
              { id: "4", question: "question", answer: "answer" },
              { id: "5", question: "question", answer: "answer" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
