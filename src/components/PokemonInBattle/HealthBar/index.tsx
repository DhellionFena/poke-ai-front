"use client";

import { useEffect, useState } from "react";

interface HealthBarProps {
  life: number;
}

<<<<<<< Updated upstream
export default function HealthBar({ life }: HealthBarProps) {
  const healthColor = life <= 20 ? "bg-red-600" : "bg-green-600";
=======
export default function HealthBar({ lifeNow, lifeMax }: HealthBarProps) {
  const [animatedLife, setAnimatedLife] = useState(lifeNow);

  useEffect(() => {
    if (animatedLife !== lifeNow) {
      const speedPerUnit = 35;
      const difference = Math.abs(lifeNow - animatedLife);
      const totalDuration = difference * speedPerUnit;
      const step = lifeNow > animatedLife ? 1 : -1;

      const interval = setInterval(() => {
        setAnimatedLife((prev) => {
          const nextValue = prev + step;
          if ((step > 0 && nextValue >= lifeNow) || (step < 0 && nextValue <= lifeNow)) {
            clearInterval(interval);
            return lifeNow;
          }
          return nextValue;
        });
      }, speedPerUnit);

      return () => clearInterval(interval);
    }
  }, [lifeNow, animatedLife]);

  const healthPercentage = (animatedLife / lifeMax) * 100;
  const healthColor = healthPercentage <= 20 ? "bg-red-600" : "bg-green-600";
>>>>>>> Stashed changes

  return (
    <div className="h-10 w-4/5 bg-green-300 relative overflow-hidden">
      <div
        className={`h-full ${healthColor} border border-black`}
<<<<<<< Updated upstream
        style={{ width: `${life}%` }}
      />
      
      <span className="absolute inset-0 flex items-center justify-center text-center">
        {life}
=======
        style={{
          width: `${healthPercentage}%`,
          transition: "width linear",
        }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-center font-bold text-black">
        {animatedLife}/{lifeMax}
>>>>>>> Stashed changes
      </span>
    </div>
  );
}
