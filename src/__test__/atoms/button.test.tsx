import Button, { getButtonClassNames } from "@/components/atoms/Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button Component", () => {
  it("renders the button with default props", () => {
    render(<Button text="Click Me" />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeTruthy();
    expect(button.className).toContain("bg-gray-light");
    expect(button.className).toContain("hover:bg-gray-dark");
  });

  it("renders a secondary button", () => {
    render(<Button text="Secondary" type="secondary" />);
    const button = screen.getByRole("button", { name: /secondary/i });
    const textElement = screen.getByText(/secondary/i); // Target the text span

    expect(button.className).toContain("hover:bg-stone-100"); // Button class
    expect(textElement.className).toContain("text-text-primary"); // Text class
  });

  it("shows a loading state", () => {
    render(<Button text="Click Me" isLoading />);
    const button = screen.getByRole("button", { name: /loading.../i });
    expect(button.getAttribute("disabled")).toBe("");
    expect(button.className).toContain("cursor-wait");
    expect(button.className).toContain("opacity-60");
  });

  it("disables the button when `isDisabled` is true", () => {
    render(<Button text="disabled" isDisabled />);
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button.getAttribute("disabled")).toBe("");
    expect(button.className).toContain("cursor-not-allowed");
    expect(button.className).toContain("opacity-60");
  });

  it("triggers `onClick` when clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="click button" onClick={handleClick} />);
    const button = screen.getByRole("button", { name: /click button/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("does not trigger `onClick` when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button text="click button disabled" isDisabled onClick={handleClick} />
    );
    const button = screen.getByRole("button", {
      name: /click button disabled/i,
    });
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with left and right icons", () => {
    const IconLeft = <span data-testid="icon-left">LeftIcon</span>;
    const IconRight = <span data-testid="icon-right">RightIcon</span>;

    render(
      <Button text="With Icons" iconLeft={IconLeft} iconRight={IconRight} />
    );

    const iconLeft = screen.getByTestId("icon-left");
    const iconRight = screen.getByTestId("icon-right");

    expect(iconLeft).toBeTruthy();
    expect(iconRight).toBeTruthy();
  });

  it("applies the correct classes based on the `type` prop", () => {
    render(<Button text="Primary Button" type="primary" />);
    const primaryButton = screen.getByRole("button", {
      name: /primary button/i,
    });
    expect(primaryButton.className).toContain("bg-gray-light");
    expect(primaryButton.className).toContain("hover:bg-gray-dark");

    render(<Button text="Secondary Button" type="secondary" />);
    const secondaryButton = screen.getByRole("button", {
      name: /secondary button/i,
    });
    expect(secondaryButton.className).toContain("hover:bg-stone-100");
  });
});

describe("getButtonClassNames", () => {
  // Returns correct base classes for primary button type
  it("should return base classes with primary button styles when type is primary", () => {
    const result = getButtonClassNames("primary", false, false);

    expect(result).toBe(
      "flex items-center justify-center gap-2 w-full h-[56px] rounded-lg border-[1px] border-stroke-primary transition bg-gray-light hover:bg-gray-dark"
    );
  });

  // Handles undefined or null type parameter
  it("should use default styles when type parameter is undefined", () => {
    const result = getButtonClassNames(undefined as any, false, false);

    expect(result).toBe(
      "flex items-center justify-center gap-2 w-full h-[56px] rounded-lg border-[1px] border-stroke-primary transition hover:bg-stone-100"
    );
  });
});
