import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
    <html lang="fr" className="w-full overflow-x-hidden min-h-screen">
      <body className="relative flex flex-col font-text w-full overflow-x-hidden text-neutral-900 min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
