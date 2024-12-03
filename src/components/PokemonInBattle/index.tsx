import "@heroicons/react";
import PokemonImage from "./PokemonImage";
import MoveSetComponent from "./MovesetComponent";
import HealthBar from "./HealthBar";
import { Pokemon } from "@/types/pokemonForm";

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
  imageUrl: string
  moveset: Move[];
}

interface PokemonInBattleProps {
  pokemon: Pokemon;
  ataqueEscolhido: string | null;
  escolherAtaque: (ataque: string) => void;
  mode: string | null;
  setPodeAcabarAPartida: (pode: boolean) => void
  podeAcabarAPartida: boolean;
}

export default function PokemonInBattle({ pokemon, ataqueEscolhido, escolherAtaque, podeAcabarAPartida, mode, setPodeAcabarAPartida }: PokemonInBattleProps) {
  return (
    <div
      className="min-h-full w-full border-2 border-black md:p-4 shadow-lg bg-[url('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/204364595/original/86db6005cd51b4f60e71cca277f603a82cf5646a/draw-a-pixel-pokemon-battle-background.png')] bg-cover bg-center"
    >
      <div className="flex h-[10%] xl:h-[20%] flex-col items-center justify-center text-center gap-2">
        <p className="text-white">{pokemon.nome}</p>
        <HealthBar podeAcabarAPartida={podeAcabarAPartida} setPodeAcabarAPartida={setPodeAcabarAPartida} lifeMax={pokemon.hpMax} lifeNow={pokemon.hp}/>
      </div>
      <div className="h-[30%] xl:h-[40%]">
        <PokemonImage image={pokemon.sprite} />
      </div>
      {mode === "PVP" ? 
      (
        <div className="xl:h-[40%] h-[60%]">
          <MoveSetComponent ataqueEscolhido={ataqueEscolhido} escolherAtaque={escolherAtaque} moveset={pokemon.movimento} />
        </div>
      ) : null}
      
    </div>
  );
}
