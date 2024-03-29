import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="border-4 w-full border-red-500 h-screen p-8">
      <div className="flex p-4 gap-4">
        <Button>Rejoindre notre Discord</Button>
        <Button variant="secondary">Rejoindre notre Discord</Button>
      </div>
      <div className="flex bg-navy-900 p-4 gap-4">
        <Button theme="dark">Rejoindre notre Discord</Button>
        <Button theme="dark" variant="secondary">
          Rejoindre notre Discord
        </Button>
      </div>
    </main>
  );
}
