import GameCard from "@/components/organisms/GameCard";
import { Game } from "@/utils/endpoint";

export default async function Home() {
  const res = await fetch(`http://localhost:3000/api/games`, {
    next: { revalidate: 0 }, // Ensures data is fetched fresh every time
  });

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await res.json();
  const { games } = data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-bold text-4xl text-blue-600">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {games.map((game: Game) => (
          <GameCard
            key={game.id}
            imageSrc={game.image}
            alt={game.name}
            genre={game.genre}
            productName={game.name}
            price={game.price}
            isNew={game.isNew}
          />
        ))}
      </section>
    </main>
  );
}
