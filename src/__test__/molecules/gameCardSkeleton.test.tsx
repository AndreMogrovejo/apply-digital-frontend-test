import React from "react";
import { render, screen } from "@testing-library/react";
import GameCardSkeleton from "@/components/molecules/GameCard/GameCardSkeleton";

describe("GameCardSkeleton Component", () => {
  it("renders the skeleton container with correct classes", () => {
    render(<GameCardSkeleton />);
    const containerElement = screen.getByRole("status");

    expect(containerElement).toBeDefined();
  });
});
