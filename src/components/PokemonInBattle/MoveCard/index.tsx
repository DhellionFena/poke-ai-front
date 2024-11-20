interface MoveCardProps {
  move: {
    name: string;
    type: string;
    damage: number;
  };
}

const typeColors: { [key: string]: string } = {
  Electric: "bg-yellow-500",
  Fire: "bg-red-500",
  Water: "bg-blue-500",
  Grass: "bg-green-500",
  Normal: "bg-gray-500",
  Psychic: "bg-pink-500",
  Fighting: "bg-orange-500",
  Fairy: "bg-pink-300",
  Poison: "bg-purple-500",
  Ground: "bg-brown-500",
  Flying: "bg-blue-300",
  Bug: "bg-green-700",
  Rock: "bg-gray-700",
  Ghost: "bg-indigo-600",
  Steel: "bg-gray-400",
  Ice: "bg-cyan-500",
  Dragon: "bg-indigo-700",
  Dark: "bg-black",
  Shadow: "bg-gray-800",
};

export default function MoveCard({ move }: MoveCardProps) {
  const backgroundColor = typeColors[move.type] || "bg-gray-500";

  return (
    <button
      className={`w-full text-base border border-black flex items-center justify-center ${backgroundColor} rounded-lg shadow-lg transition-transform duration-200 hover:scale-[1.02]`}
    >
      <div>
        <h4 className="font-bold text-sm">{move.name}</h4>
        <p className="text-xs">Type: {move.type}</p>
        <p className="text-xs">Damage: {move.damage}</p>
      </div>
    </button>
  );
}
