import { Button } from "../button";
import { DiscordIcon } from "../icons/discord";
import { VideoBlob } from "./video-blob";

export function HeroSection() {
  return (
    <section className="relative lg:min-h-[90vh] bg-navy-900 bg-gradient-to-br from-navy-700 to-navy-900 py-16 md:py-24 lg:flex justify-center">
      <div className="wrapper flex flex-col items-center gap-12 lg:flex-row-reverse">
        <VideoBlob />

        <div className="px-4 md:px-0 w-full flex flex-col items-center lg:items-start text-center lg:text-left text-white">
          <h1 className="text-5xl lg:text-[4rem] font-bold tracking-tighter">
            AideEducation
          </h1>
          <h3 className="mt-4 lg:text-2xl lg:max-w-[32rem] lg:tracking-tight lg:mt-6 text-balance md:text-wrap">
            Car le savoir est un droit. Facile d&apos;utilisation, nous sommes
            votre plateforme d&apos;aide aux devoirs personnalisée.
          </h3>
          <div className="flex flex-col w-full gap-4 mt-8 lg:mt-12 lg:flex-row">
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
