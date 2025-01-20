import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

it("should render without crashing", async () => {
  render(await Page());
  expect(
    screen.getByRole("heading", { level: 1, name: "Games List" })
  ).toBeDefined();
});
