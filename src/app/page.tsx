export const dynamic = "force-dynamic";
import { Game } from "@/utils/endpoint";
import GameList from "@/components/organisms/GameList";
import Navbar from "@/components/organisms/Navbar";
import Button from "@/components/atoms/Button";

interface GameServiceResponse {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
}

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/games`, {
    next: { revalidate: 0 },
  });
  const data: GameServiceResponse = await res.json();
  const { games, availableFilters, currentPage, totalPages } = data ?? {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar availableFilters={availableFilters} />
      <div className="my-8 flex flex-col gap-8">
        <GameList games={games} />
        <Button text="SEE MORE" className="w-[140px] h-[56px] self-start" />
      </div>
    </main>
  );
}
