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
    <div
      className="min-h-full w-full border-2 border-black p-4 rounded-lg shadow-lg bg-[url('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/204364595/original/86db6005cd51b4f60e71cca277f603a82cf5646a/draw-a-pixel-pokemon-battle-background.png')] bg-cover bg-center"
    >
      <div className="flex h-[10%] xl:h-[20%] flex-col items-center justify-center text-center gap-2">
        <p>{pokemon.nome}</p>
        <HealthBar life={pokemon.vida} />
      </div>
      <div className="h-[30%] xl:h-[40%]">
        <PokemonImage image={pokemon.imageUrl} />
      </div>
      <div className="xl:h-[40%] h-[60%]">
        <MoveSetComponent moveset={pokemon.moveset} />
      </div>
    </div>
  );
}
