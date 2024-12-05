"use client";

import HomeButton from "@/components/HomeButton";
import { Pokemon } from "@/types/pokemonForm";
import { useEffect, useState } from "react";

export default function Congratulations() {
  const [vencedor, setVencedor] = useState<Pokemon | null>(null);

  useEffect(() => {
    const vencedor = localStorage.getItem("VENCEDOR");

    const p1 = localStorage.getItem("PLAYER1");
    const p2 = localStorage.getItem("PLAYER2");

    if (vencedor === "PLAYER1" && p1 && p2) {
      setVencedor(JSON.parse(p1) as Pokemon);
    } else if (vencedor === "PLAYER2" && p1 && p2) {
      setVencedor(JSON.parse(p2) as Pokemon);
    }
  }, []);

  return (
    <main className="flex h-full flex-col">
      <div className="flex w-fit flex-col self-center">
        <h1>PARABÉNS AO VENCEDOR</h1>
        <h2>{vencedor?.nome}</h2>
      </div>

      <img src={vencedor?.sprite} />

      <HomeButton
        text="Próximo"
        navigation="/end-game"
        navigationParams={null}
      />
    </main>
  );
}
