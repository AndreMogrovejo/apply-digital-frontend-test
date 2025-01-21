import { it } from "vitest";
import { render } from "@testing-library/react";
import Page from "../app/page";

it("should render without crashing", async () => {
  render(await Page());
});
