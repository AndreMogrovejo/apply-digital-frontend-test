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
    >
      <Navbar availableFilters={[]} />
    </main>
  );
};

export default Loading;
