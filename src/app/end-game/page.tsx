"use client";

import HomeButton from "@/components/HomeButton";
import PokemonImage from "@/components/PokemonInBattle/PokemonImage";
import { useSearchParams } from "next/navigation";

interface Move {
  name: string;
  type: string;
  damage: number;
}

interface PokemonProps {
  nome: string;
  vidaMax: number;
  vidaAtual: number;
  type1: string;
  type2: string;
  imageUrl: string;
  moveset: Move[];
}

export default function EndGame() {
  const query = useSearchParams();

  const lastPokemonInBattle: PokemonProps[] = JSON.parse(
    query.get("pokemon")?.toString() ?? "",
  );

  var first = lastPokemonInBattle[0];
  var second = lastPokemonInBattle[1];

  return (
    <main className="flex h-full flex-col">
      <div className="flex flex-row">
        <PokemonImage image={first.imageUrl} />
        <h1 className="content-center text-7xl text-white">VS</h1>
        <PokemonImage image={second.imageUrl} />
      </div>
      <div className="flex w-fit flex-col self-center">
        <HomeButton
          text="BATALHAR NOVAMENTE COM OS MESMOS POKÉMON"
          navigation=""
          navigationParams={null}
        />
        <HomeButton
          text="BATALHAR COM NOVOS POKÉMON"
          navigation=""
          navigationParams={null}
        />
      </div>
    </main>
  );
}
