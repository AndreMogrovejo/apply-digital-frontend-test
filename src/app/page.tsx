import GameList from "@/components/organisms/GameList";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <GameList />
    </main>
  );
}
