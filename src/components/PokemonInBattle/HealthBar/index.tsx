import "@heroicons/react";

interface HealthBarProps {
  lifeNow: number;
  lifeMax: number;
}

export default function HealthBar({ lifeNow, lifeMax}: HealthBarProps) {
  const healthColor = lifeNow*100/lifeMax <= 20 ? "bg-red-600" : "bg-green-600";

  return (
    <div className="h-10 w-4/5 bg-green-300 relative">
      <div
        className={`h-full ${healthColor} border border-black`}
        style={{ width: `${lifeNow}%` }}
      />
      
      <span className="absolute inset-0 flex items-center justify-center text-center">
        {lifeNow}/{lifeMax}
      </span>
    </div>
  );
}
