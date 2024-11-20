import "@heroicons/react";
import MoveCard from "../MoveCard";

interface Move {
  name: string;
  type: string;
  damage: number;
}

interface MoveSetComponentProps {
  moveset: Move[];
}

export default function MoveSetComponent({ moveset }: MoveSetComponentProps) {
  return (
    <div className="grid grid-cols-2 w-full h-full border border-black gap-4 p-4 rounded-lg shadow-lg overflow-auto" >
      {moveset.map((move, index) => (
        <MoveCard key={index} move={move} />
      ))}
    </div>
  );
}
