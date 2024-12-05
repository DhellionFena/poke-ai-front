import type { Metadata } from "next";
import localFont from "next/font/local";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import PokedexLayout from "@/components/PokedexLayout";
import { Suspense } from "react";

const PressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PokeAI!",
  description: "Crie seus próprios Pocket Monsters utilizando a IA da OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${PressStart2P.className} min-h-screen antialiased`}
      >
        <PokedexLayout>
          <div className="flex min-h-full w-full flex-col rounded-md bg-green-300">
            <Suspense>
              {children}
            </Suspense>
          </div>
        </PokedexLayout>
      </body>
    </html>
  );
}
