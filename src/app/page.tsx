import HomeButton from "@/components/HomeButton";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col place-items-center bg-green-300 px-8">
      <h1 className="my-8 text-center text-4xl">Poké-AI</h1>
      <HomeButton
        text="Iniciar"
        navigation="/gamemode"
        navigationParams={null}
      />
      <HomeButton
        text="Como jogar"
        navigation="/how-to-play"
        navigationParams={null}
      />
      <HomeButton
        text="Sobre a equipe"
        navigation="/about"
        navigationParams={null}
      />
    </main>
  );
}
