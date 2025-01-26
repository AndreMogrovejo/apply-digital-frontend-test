import SpanTag from "@/components/atoms/SpanTag";
import { render, screen } from "@testing-library/react";

describe("SpanTag Component", () => {
  it("renders the SpanTag with default props", () => {
    render(<SpanTag>Default Text</SpanTag>);
    const spanElement = screen.getByText(/default text/i);
    const container = spanElement.closest("div");

    expect(spanElement).toBeTruthy();
    expect(spanElement.className).toContain("text-text-primary");
    expect(container).toBeTruthy();
    expect(container?.className).toContain("bg-stone-100");
    expect(container?.className).toContain("w-[58px]");
    expect(container?.className).toContain("h-[32px]");
  });

  it("applies custom class names", () => {
    render(<SpanTag className="custom-class">Custom Class</SpanTag>);
    const container = screen.getByText(/custom class/i).closest("div");

    expect(container?.className).toContain("custom-class");
  });

  it("applies custom width and height", () => {
    render(
      <SpanTag width="w-[100px]" height="h-[50px]">
        Custom Size
      </SpanTag>
    );
    const container = screen.getByText(/custom size/i).closest("div");

    expect(container?.className).toContain("w-[100px]");
    expect(container?.className).toContain("h-[50px]");
  });

  it("renders children text correctly", () => {
    render(<SpanTag>SpanTag Content</SpanTag>);
    const spanElement = screen.getByText(/spantag content/i);

    expect(spanElement.textContent).toBe("SpanTag Content");
  });
});
