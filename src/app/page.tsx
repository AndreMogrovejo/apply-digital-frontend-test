export const dynamic = "force-dynamic";
import GameList from "@/components/organisms/GameList";
import Navbar from "@/components/organisms/Navbar";
import { fetchGameService } from "@/services/gameServices";
import HomeButton from "@/components/molecules/HomeButton";

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
      <Navbar
        availableFilters={availableFilters}
        showFilters
        title="Top Sellers"
      />
      <section className="my-12 flex flex-col gap-8">
        <GameList games={games} />
        <HomeButton />
      </section>
    </main>
  );
}
