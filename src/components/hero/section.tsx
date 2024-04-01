import { Button } from "../button";
import { DiscordIcon } from "../icons/discord";

export function HeroSection() {
  return (
    <section className="relative bg-navy-900 bg-gradient-to-br from-navy-700 to-navy-900 pt-20 pb-16 rounded-bl-2xl">
      <div className="wrapper flex flex-col items-center gap-12">
        <div className="w-40 h-40 rounded-full bg-navy-700"></div>

        <div className="w-full flex flex-col items-center text-center text-white">
          <h1 className="text-5xl font-bold tracking-tighter">AideEducation</h1>
          <h3 className="mt-4">
            Car le savoir est un droit. Facile d&apos;utilisation, nous sommes
            votre plateforme d&apos;aide aux devoirs personnalisée.
          </h3>
          <div className="flex flex-col w-full gap-4 mt-8">
            <Button
              theme="dark"
              startIcon={<DiscordIcon className="w-5 h-5 fill-navy-900" />}
            >
              Rejoindre notre Discord
            </Button>

            <Button theme="dark" variant="secondary">
              Devenir Bénévole
            </Button>
          </div>
          <ul className="flex flex-nowrap gap-4 mt-12">
            <a href="/">
              <li className="flex justify-center items-center w-8 h-8 rounded-full bg-navy-700"></li>
            </a>
            <a href="/">
              <li className="flex justify-center items-center w-8 h-8 rounded-full bg-navy-700"></li>
            </a>
            <a href="/">
              <li className="flex justify-center items-center w-8 h-8 rounded-full bg-navy-700"></li>
            </a>
            <a href="/">
              <li className="flex justify-center items-center w-8 h-8 rounded-full bg-navy-700"></li>
            </a>
            <a href="/">
              <li className="flex justify-center items-center w-8 h-8 rounded-full bg-navy-700"></li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
}
