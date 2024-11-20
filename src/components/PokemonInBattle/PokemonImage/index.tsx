import "@heroicons/react";

interface PokemonImageProps {
    image: string;
}

export default function PokemonImage({image}: PokemonImageProps) {
  return (
    <div className="h-full w-full  flex items-center justify-center">
      <img
        className="h-3/5 object-contain"
        src={image}
        alt="Pokemon"
      />
    </div>
  );
}
