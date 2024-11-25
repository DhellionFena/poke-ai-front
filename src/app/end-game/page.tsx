"use client";

import { useSearchParams } from "next/navigation";

export default function EndGame() {
  const query = useSearchParams();

  const lastPokemonInBattle = JSON.parse(
    query.get("pokemon")?.toString() ?? "",
  );

  var first = lastPokemonInBattle[0];
  var sec = lastPokemonInBattle[1];

  return (
    <main className="flex h-full flex-col">
      {first.nome + " "}
      {sec.nome}
    </main>
  );
}
