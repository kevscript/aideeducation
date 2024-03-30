import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fr">
      <body className="relative font-text w-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
