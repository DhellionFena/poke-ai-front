import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PokedexLayout from "@/components/PokedexLayout";

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
        className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased`}
      >
        <PokedexLayout>
          <div className="h-full w-full bg-green-300">{children}</div>
        </PokedexLayout>
      </body>
    </html>
  );
}
