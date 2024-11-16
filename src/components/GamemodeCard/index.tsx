import "@heroicons/react";
import Link from "next/link";

export default function GamemodeCard({
  icon,
  text,
  mode,
}: Readonly<{
  icon: React.ReactNode;
  text: string;
  mode: string;
}>) {
  return (
    <Link
      href={{
        pathname: "/pokemon-creation",
        query: mode,
      }}
      className="mx-12 h-full w-full rounded border-4 border-black bg-white px-8 py-8 text-black hover:border-red-600 hover:text-red-600"
    >
      <div className="flex flex-col items-center text-xl hover:text-red-600">
        {icon}
        {text}
      </div>
    </Link>
  );
}
