import { Button } from "@/components/button";
import { DiscordIcon } from "@/components/icons/discord";

export default function Home() {
  return (
    <main className="border-4 w-full border-red-500 h-screen p-8">
      <div className="flex p-4 gap-4 flex-col">
        <Button
          startIcon={<DiscordIcon className="w-5 h-5 fill-white" />}
          endIcon={<DiscordIcon className="w-5 h-5 fill-white" />}
        >
          Rejoindre notre Discord
        </Button>
        <Button
          variant="secondary"
          startIcon={<DiscordIcon className="w-5 h-5 fill-navy-900" />}
        >
          Rejoindre notre Discord
        </Button>
      </div>
      <div className="flex bg-red-900 p-4 gap-4 flex-col items-start">
        <Button
          theme="dark"
          endIcon={<DiscordIcon className="w-5 h-5 fill-navy-900" />}
          as="link"
          href="/hello"
          className="text-red-900"
        >
          Rejoindre notre Discord
        </Button>
        <Button
          theme="dark"
          variant="secondary"
          as="anchor"
          href="https://google.com"
        >
          Rejoindre notre Discord
        </Button>
      </div>
    </main>
  );
}
