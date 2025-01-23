import { GameListSkeleton } from "@/components/organisms/GameListSkeleton";
import React from "react";

interface LoadingProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const { className } = props;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${className}`}
    >
      <GameListSkeleton />
    </main>
  );
};

export default Loading;
