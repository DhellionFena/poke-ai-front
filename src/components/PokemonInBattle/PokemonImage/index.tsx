import "@heroicons/react";

interface PokemonImageProps {
  image: string;
}

export default function PokemonImage({ image }: PokemonImageProps) {
  return (
    <div className="flex h-full w-full items-center justify-center relative">
      <img
        className="h-3/5 w-3/5 animate-slowBounce object-contain transition-transform"
        src={image}
        alt="Pokemon"
      />
    </div>
  );
}
