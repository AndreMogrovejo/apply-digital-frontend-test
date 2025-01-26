import GameCardSkeleton from "./GameCard/GameCardSkeleton";

export const GameListSkeleton = () => (
  <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-6 my-12 ">
    {Array.from({ length: 6 }, (_, index) => (
      <GameCardSkeleton key={index} />
    ))}
  </section>
);
