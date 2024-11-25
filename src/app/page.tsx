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
      {/* TODO(Felipe): APAGAR ESSE BOTÃO DEPOIS */}
      <HomeButton
        text="BOTÃO APENAS PARA TESTES"
        navigation="/end-game"
        navigationParams={{
          pokemon: JSON.stringify([
            {
              nome: "Pikachu",
              vidaAtual: 19,
              vidaMax: 200,
              type1: "Electric",
              type2: "None",
              imageUrl:
                "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
              moveset: [
                { name: "Thunderbolt", type: "Electric", damage: 40 },
                { name: "Quick Attack", type: "Normal", damage: 30 },
                { name: "Iron Tail", type: "Steel", damage: 50 },
                { name: "Electro Ball", type: "Electric", damage: 60 },
              ],
            },
            {
              nome: "Chimchar",
              vidaAtual: 73,
              vidaMax: 100,
              type1: "Fire",
              type2: "Fighting",
              imageUrl:
                "https://archives.bulbagarden.net/media/upload/2/2b/HOME0390.png",
              moveset: [
                { name: "Flamethrower", type: "Fire", damage: 40 },
                { name: "Mach Punch", type: "Fighting", damage: 30 },
                { name: "Scratch", type: "Normal", damage: 20 },
                { name: "Fire Spin", type: "Fire", damage: 50 },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
