import PokemonImage from "../PokemonInBattle/PokemonImage";

interface CardPodioProps {
    sprite: string;
    titulo: string
}
export default function CardPodio({sprite, titulo}: CardPodioProps){
    return (
        <div 
            className="flex flex-col"
        >
            <PokemonImage image={sprite} />
            <h2 className="text-2xl text-center text-white">{titulo}</h2>
        </div>
    );
}