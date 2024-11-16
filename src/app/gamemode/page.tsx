import GamemodeCard from "@/components/GamemodeCard";
import { ComputerDesktopIcon, UserIcon } from "@heroicons/react/24/solid";
import { text } from "stream/consumers";

export default function Gamemode() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-center text-2xl text-black">
        Selecione o modo de jogo desejado
      </h1>
      <section className="my-14 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <GamemodeCard
          icon={<UserIcon height={72} />}
          text="Player vs Player"
          mode="pvp"
        />

        <GamemodeCard
          icon={<ComputerDesktopIcon height={72} />}
          text="Player vs PC"
          mode="pvpc"
        />
      </section>
    </main>
  );
}
