import React from "react";
import { render, screen } from "@testing-library/react";
import CardBody from "../../components/molecules/GameCard/CardBody";

describe("CardBody Component", () => {
  const props = {
    genre: "Action",
    name: "Game Name",
    price: 59.99,
  };

  it("renders the genre in uppercase", () => {
    render(<CardBody {...props} />);
    const genreElement = screen.getByText(props.genre.toUpperCase());

    expect(genreElement).toBeDefined();
    expect(genreElement.className).toContain("text-neutral-500");
    expect(genreElement.className).toContain("text-base");
    expect(genreElement.className).toContain("font-bold");
  });

  it("renders the game name", () => {
    render(<CardBody {...props} />);
    const nameElement = screen.getByText(props.name);

    expect(nameElement).toBeDefined();
    expect(nameElement.className).toContain("text-lg");
    expect(nameElement.className).toContain("font-bold");
    expect(nameElement.className).toContain("text-text-primary");
  });

  it("renders the game price", () => {
    render(<CardBody {...props} />);
    const priceElement = screen.getByText(`$${props.price}`);

    expect(priceElement).toBeDefined();
    expect(priceElement.className).toContain("text-xl");
    expect(priceElement.className).toContain("font-bold");
    expect(priceElement.className).toContain("text-text-primary");
  });

  it("renders the layout correctly", () => {
    render(<CardBody {...props} />);
    const containerElement = screen
      .getByText(props.genre.toUpperCase())
      .closest("div");

    expect(containerElement).toBeDefined();
    expect(containerElement?.className).toContain("flex");
    expect(containerElement?.className).toContain("flex-col");
    expect(containerElement?.className).toContain("justify-between");
  });
});
