import "@heroicons/react";

interface HealthBarProps {
  life: number;
}

export default function HealthBar({ life }: HealthBarProps) {
  const healthColor = life <= 20 ? "bg-red-600" : "bg-green-600";

  return (
    <div className="h-10 w-4/5 bg-green-300 relative">
      <div
        className={`h-full ${healthColor} border border-black`}
        style={{ width: `${life}%` }}
      />
      
      <span className="absolute inset-0 flex items-center justify-center text-center">
        {life}
      </span>
    </div>
  );
}
