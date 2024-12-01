import HomeButton from "../components/HomeButton";

export default function Home() {
  return (
    <main className="w-fill flex h-fit flex-col place-items-center bg-green-300 px-8 py-2">
      <h1 className="mx-4 my-8 text-clip text-center text-4xl">Poké-AI</h1>
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
