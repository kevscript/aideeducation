import { getSocials } from "@/cms/api";
import { DiscordIcon } from "../icons/discord";
import { VideoBlob } from "./video-blob";
import { isIcon } from "@/cms/typeguards";
import { Button } from "@/components/button";
import { TriangleSVG } from "../triangle";

export async function HeroSection() {
  const socials = await getSocials();
  const discord = socials.find((s) => s.name.toLowerCase() === "discord");

  return (
    <section className="relative z-0 overflow-hidden lg:min-h-[90vh] bg-navy-900 bg-gradient-to-br from-navy-700 to-navy-900 py-16 md:py-24 lg:flex justify-center">
      <TriangleSVG
        className="absolute -top-[80%] -left-[10%] lg:top-[70%] lg:-left-[20%] -z-20 stroke-navy-900 rotate-45 w-1/2"
        variant="outline"
      />
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
              is="anchor"
              href={discord?.link || "/"}
              startIcon={<DiscordIcon className="w-5 h-5 fill-navy-900" />}
            >
              Rejoindre notre Discord
            </Button>

            <Button
              theme="dark"
              is="link"
              href="/soutenir/recrutement"
              variant="secondary"
            >
              Devenir Bénévole
            </Button>
          </div>
          {socials && (
            <ul className="flex gap-4 mt-12">
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
        </div>
      </div>
    </section>
  );
}
