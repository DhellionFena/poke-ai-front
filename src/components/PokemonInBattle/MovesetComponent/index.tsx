import "@heroicons/react";
import MoveCard from "../MoveCard";
import { Attack } from "@/types/pokemonForm";
import { AtaqueEscolhido } from "..";

interface Move {
  name: string;
  type: string;
  damage: number;
}

interface MoveSetComponentProps {
  moveset: Attack[];
  ataqueEscolhido: string | null;
  escolherAtaque: (ataque: string) => void
  statusAtaques: AtaqueEscolhido[]
}

export default function MoveSetComponent({ moveset, ataqueEscolhido, escolherAtaque, statusAtaques }: MoveSetComponentProps) {

  return (
    <div className="grid grid-cols-2 w-full h-full border border-black gap-4 p-4 rounded-lg shadow-lg overflow-auto bg-zinc-200" >
      {moveset.map((move, index) => (
        <MoveCard key={index} statusAtaques={statusAtaques.find((value, index) => value.nomeAtaque === move.nome)} ataqueEscolhido={ataqueEscolhido} escolherAtaque={escolherAtaque} move={move} />
      ))}
    </div>
  );
}
