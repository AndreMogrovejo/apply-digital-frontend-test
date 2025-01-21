import React, { Suspense } from "react";
import { Game } from "@/utils/endpoint";
import GameCard from "./GameCard";
import Loading from "@/app/loading";

interface GameCardProps {
  props: {
    games: Game[];
    availableFilters: string[];
    totalPages: number;
    currentPage: number;
  };
}

export async function getServerSideProps(): Promise<GameCardProps> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/games`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error(`Failed to fetch, status: ${res.status}`);
    const data = await res.json();
    return { props: { ...data } };
  } catch (error) {
    console.error("Error fetching games:", error);
    return {
      props: { games: [], availableFilters: [], totalPages: 1, currentPage: 1 },
    }; // Return empty array as fallback
  }
}

const GameList = async () => {
  const { props } = await getServerSideProps();
  const { games } = props;

  return (
    <Suspense fallback={<Loading className="h-full w-full" />}>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
        {games?.map((game: Game) => (
          <GameCard
            key={game.id}
            id={game.id}
            imageSrc={game.image}
            alt={game.name}
            genre={game.genre}
            productName={game.name}
            price={game.price}
            isNew={game.isNew}
          />
        ))}
      </section>
    </Suspense>
  );
};

export default GameList;
