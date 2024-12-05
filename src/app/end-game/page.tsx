"use client";
import HomeButton from "@/components/HomeButton";
import PokemonImage from "@/components/PokemonInBattle/PokemonImage";
import { Pokemon } from "@/types/pokemonForm";
import { useEffect, useState } from "react";

export default function EndGame() {
  const [player1, setPlayer1] = useState<Pokemon | null>(null);
  const [player2, setPlayer2] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const p1 = localStorage.getItem("PLAYER1");
      const p2 = localStorage.getItem("PLAYER2");

      if (p1 && p2) {
        setPlayer1(JSON.parse(p1) as Pokemon);
        setPlayer2(JSON.parse(p2) as Pokemon);
      }
    }
  }, []);

  return (
    <main className="flex h-full flex-col">
      <div className="flex flex-row">
        <PokemonImage image={player1?.sprite as string} />
        <h1 className="content-center text-7xl text-white">VS</h1>
        <PokemonImage image={player2?.sprite as string} />
      </div>
      <div className="flex w-fit flex-col self-center">
        <HomeButton
          text="BATALHAR NOVAMENTE COM OS MESMOS POKÉMON"
          navigation="/battle"
          onClick={() => {
            if (typeof window !== "undefined") {
              const p1 = localStorage.getItem("PLAYER1");
              const p2 = localStorage.getItem("PLAYER2");

              localStorage.setItem("PLAYER1", p1!);
              localStorage.setItem("PLAYER2", p2!);
            }
          }}
          navigationParams={null}
        />
        <HomeButton
          text="BATALHAR COM NOVOS POKÉMON"
          navigation="/pokemon-creation"
          onClick={() => {
            if (typeof window !== "undefined") {
              localStorage.removeItem("PLAYER1");
              localStorage.removeItem("PLAYER2");
              localStorage.removeItem("VENCEDOR");
              localStorage.removeItem("PERDEDOR");
            }
          }}
          navigationParams={
            typeof window !== "undefined" ? localStorage.getItem("MODE") : null
          }
        />
      </div>
    </main>
  );
}
