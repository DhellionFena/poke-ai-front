import "@heroicons/react";
import PokemonImage from "./PokemonImage";
import MoveSetComponent from "./MovesetComponent";
import HealthBar from "./HealthBar";

interface Move {
  name: string;
  type: string;
  damage: number;
}

interface PokemonProps {
  nome: string;
  vida: number;
  type1: string;
  type2: string;
  imageUrl: string
  moveset: Move[];
}

interface PokemonInBattleProps {
  pokemon: PokemonProps;
}

export default function PokemonInBattle({ pokemon }: PokemonInBattleProps) {
  return (
    <div className="h-[95%] w-2/5 border border-black  p-4 rounded-lg shadow-lg">
      <div className="flex h-1/5 flex-col items-center justify-center text-center gap-2">
        <p>{pokemon.nome}</p>
        <HealthBar life={pokemon.vida} />
      </div>
      <div className="h-2/5">
        <PokemonImage image={pokemon.imageUrl} />
      </div>
      <div className="h-2/5">
        <MoveSetComponent moveset={pokemon.moveset} />
      </div>
    </div>
  );
}
