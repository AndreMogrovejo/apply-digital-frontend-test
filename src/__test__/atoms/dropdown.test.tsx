import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "@/components/atoms/Dropdown";

describe("Dropdown Component", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const onSelect = jest.fn();

  it("renders the Dropdown with default props", () => {
    render(<Dropdown options={options} onSelect={onSelect} />);
    const buttonElement = screen.getByText(options[0]);

    expect(buttonElement).toBeDefined();
    expect(buttonElement.className).toContain("w-[240px]");
    expect(buttonElement.className).toContain("h-[56px]");
  });

  it("toggles the dropdown menu when button is clicked", () => {
    render(<Dropdown options={options} onSelect={onSelect} />);
    const buttonElement = screen.getByText(options[0]);

    fireEvent.click(buttonElement);
    const dropdownMenu = screen.getByRole("list");

    expect(dropdownMenu).toBeDefined();
  });

  it("selects an option and calls onSelect", () => {
    render(<Dropdown options={options} onSelect={onSelect} />);
    const buttonElement = screen.getByText(options[0]);

    fireEvent.click(buttonElement);
    const optionElement = screen.getByText(options[1]);
    fireEvent.click(optionElement);

    expect(onSelect).toHaveBeenCalledWith(options[1]);
    expect(buttonElement.textContent).toBe(options[1]);
  });

  it("closes the dropdown menu after selecting an option", () => {
    render(<Dropdown options={options} onSelect={onSelect} />);
    const buttonElement = screen.getByText(options[0]);

    fireEvent.click(buttonElement);
    const optionElement = screen.getByText(options[1]);
    fireEvent.click(optionElement);

    const dropdownMenu = screen.queryByRole("list");
    expect(dropdownMenu).toBeNull();
  });
});
