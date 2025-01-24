import { GameListSkeleton } from "@/components/molecules/GameListSkeleton";
import React from "react";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <GameListSkeleton />
    </main>
  );
};

export default Loading;
