interface MoveCardProps {
  move: {
    name: string;
    type: string;
    damage: number;
  };
}

const typeColors: { [key: string]: string } = {
  Electric: "border-yellow-500",
  Fire: "border-red-500",
  Water: "border-blue-500",
  Grass: "border-green-500",
  Normal: "border-gray-500",
  Psychic: "border-pink-500",
  Fighting: "border-orange-500",
  Fairy: "border-pink-300",
  Poison: "border-purple-500",
  Ground: "border-brown-500",
  Flying: "border-blue-300",
  Bug: "border-green-700",
  Rock: "border-gray-700",
  Ghost: "border-indigo-600",
  Steel: "border-gray-400",
  Ice: "border-cyan-500",
  Dragon: "border-indigo-700",
  Dark: "border-black",
  Shadow: "border-gray-800",
};

export default function MoveCard({ move }: MoveCardProps) {
  const borderColor = typeColors[move.type] || "border-gray-500";

  return (
    <button
      className={`w-full text-base border-8 ${borderColor} flex items-center justify-center rounded-lg shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl bg-[#dceaa2] md:p-4`}
    >
      <div>
      <h4
          className="font-bold text-sm break-words text-center"
          style={{ overflowWrap: "anywhere" }}
        >
          {move.name}
        </h4>
        <p className="text-xs">Type: {move.type}</p>
      </div>
    </button>
  );
}
