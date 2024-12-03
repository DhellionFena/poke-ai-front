import "@heroicons/react";
import MoveCard from "../MoveCard";
import { Attack } from "@/types/pokemonForm";

interface Move {
  name: string;
  type: string;
  damage: number;
}

interface MoveSetComponentProps {
  moveset: Attack[];
  ataqueEscolhido: string | null;
  escolherAtaque: (ataque: string) => void
}

export default function MoveSetComponent({ moveset, ataqueEscolhido, escolherAtaque }: MoveSetComponentProps) {
  return (
    <div className="grid grid-cols-2 w-full h-full border border-black gap-4 p-4 rounded-lg shadow-lg overflow-auto bg-zinc-200" >
      {moveset.map((move, index) => (
        <MoveCard key={index} ataqueEscolhido={ataqueEscolhido} escolherAtaque={escolherAtaque} move={move} />
      ))}
    </div>
  );
}
