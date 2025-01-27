import { GameListSkeleton } from "@/components/molecules/GameListSkeleton";
import Navbar from "@/components/organisms/Navbar";
import React from "react";

interface LoadingProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const { className } = props;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${className}`}
      aria-busy="true"
      aria-live="polite"
    >
      <Navbar title="Loading..." availableFilters={[]} />
      <section className="my-12 flex flex-col gap-8">
        <GameListSkeleton />

        <div className="text-center text-text-primary" aria-hidden="true">
          Preparing the list of top-selling games...
        </div>
      </section>
    </main>
  );
};

export default Loading;
