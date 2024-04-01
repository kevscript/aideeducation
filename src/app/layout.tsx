import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "AideEducation",
  description: "Votre plateforme d'aide aux devoirs personnalisée.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="w-full overflow-x-hidden">
      <body className="relative flex flex-col font-text w-full overflow-x-hidden text-neutral-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
