import "@heroicons/react";
import Image from "next/image";

interface PokemonImageProps {
  image: string;
}

export default function PokemonImage({ image }: PokemonImageProps) {
  return (
    <div className="flex h-full w-full items-center justify-center relative">
      <Image
        className="h-3/5 w-3/5 animate-slowBounce object-contain transition-transform"
        src={image}
        alt="Pokemon"
        width={100}
        height={100}
      />
    </div>
  );
}
