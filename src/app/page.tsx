export const dynamic = "force-dynamic";
import GameList from "@/components/organisms/GameList";
import Navbar from "@/components/organisms/Navbar";
import Button from "@/components/atoms/Button";
import { fetchGameService } from "@/services/gameServices";

interface GameServiceParams {
  genre?: string;
  page?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: GameServiceParams;
}) {
  const data = await fetchGameService(searchParams.genre, searchParams.page);
  const { games, availableFilters, currentPage, totalPages } = data ?? {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar availableFilters={availableFilters} />
      <div className="my-12 flex flex-col gap-8">
        <GameList games={games} />
        <Button text="SEE MORE" className="max-w-[140px] h-[56px] self-start" />
      </div>
    </main>
  );
}
