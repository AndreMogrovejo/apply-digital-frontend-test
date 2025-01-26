import React from "react";
import { render, screen } from "@testing-library/react";
import CardHeader from "@/components/molecules/GameCard/CardHeader";

describe("CardHeader Component", () => {
  const props = {
    image: "",
    alt: "Game Image",
    isNew: true,
    imageWidth: 332,
    imageHeight: 240,
  };

  it("renders the image with correct attributes", () => {
    render(<CardHeader {...props} />);
    const imageElement = screen.getByAltText(props.alt) as HTMLImageElement;

    expect(imageElement).toBeDefined();
    expect(imageElement.src).toContain(props.image);
    expect(imageElement.alt).toBe(props.alt);
    expect(imageElement.width).toBe(props.imageWidth);
    expect(imageElement.height).toBe(props.imageHeight);
    expect(imageElement.className).toContain("rounded-t-2xl");
    expect(imageElement.className).toContain("max-h-[240px]");
    expect(imageElement.className).toContain("object-cover");
  });

  it("renders the 'New' tag when isNew is true", () => {
    render(<CardHeader {...props} />);
    const newTagElement = screen.getByText("New");

    expect(newTagElement).toBeDefined();
    expect(newTagElement.className).toContain(
      "text-text-primary text-[16px] font-normal sm:text-[14px]"
    );
  });

  it("does not render the 'New' tag when isNew is false", () => {
    render(<CardHeader {...props} isNew={false} />);
    const newTagElement = screen.queryByText("New");

    expect(newTagElement).toBeNull();
  });

  it("renders the container with correct class", () => {
    render(<CardHeader {...props} />);
    const containerElement = screen.getByAltText(props.alt).closest("div");

    expect(containerElement).toBeDefined();
    expect(containerElement?.className).toContain("relative");
  });
});
