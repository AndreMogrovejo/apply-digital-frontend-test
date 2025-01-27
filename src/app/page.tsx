export const dynamic = "force-dynamic";

import React from "react";
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
  try {
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
          {games.length > 0 ? (
            <>
              <GameList games={games} />
              <HomeButton currentPage={currentPage} totalPages={totalPages} />
            </>
          ) : (
            <div className="text-center text-text-primary">
              No games available at the moment. Please try again later.
            </div>
          )}
        </section>
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch game data:", error);

    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-center">
          <p className="mt-2 text-text-primary">
            Something went wrong while loading the games. Please try again
            later.
          </p>
        </div>
      </main>
    );
  }
}
