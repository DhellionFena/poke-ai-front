"use client";

import CardPodio from "@/components/CardPodio";
import HomeButton from "@/components/HomeButton";
import PokemonImage from "@/components/PokemonInBattle/PokemonImage";
import { Pokemon } from "@/types/pokemonForm";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [vencedor, setVencedor] = useState<Pokemon | null>(null);
  const [perdedor, setPerdedor] = useState<Pokemon | null>(null);
  useEffect(() => {
    const vencedor = localStorage.getItem("VENCEDOR");
    const p1 = localStorage.getItem("PLAYER1");
    const p2 = localStorage.getItem("PLAYER2");
    if(vencedor === "PLAYER1" && p1 && p2){
      setVencedor(JSON.parse(p1) as Pokemon);
      setPerdedor(JSON.parse(p2) as Pokemon);
    }else if(vencedor === "PLAYER2" && p1 && p2){
      setVencedor(JSON.parse(p2) as Pokemon);
      setPerdedor(JSON.parse(p1) as Pokemon);
    }
  }, [])

  return (
    <main className="flex h-full flex-col">
      <div className="flex flex-row justify-center">
        <CardPodio sprite={vencedor?.sprite as string} titulo="VENCEDOR" />
        <h1 className="content-center text-7xl text-white">VS</h1>
        <CardPodio sprite={perdedor?.sprite as string} titulo="PERDEDOR" />
      </div>
      <div className="flex w-fit flex-col self-center">
        <HomeButton
          text="BATALHAR NOVAMENTE COM OS MESMOS POKÉMON"
          navigation="/battle"
          navigationParams={null}
        />
        <HomeButton
          text="BATALHAR COM NOVOS POKÉMON"
          navigation="/gamemode"
          navigationParams={null}
        />
      </div>
    </main>
  );
}
