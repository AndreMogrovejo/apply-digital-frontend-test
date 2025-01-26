import React from "react";
import { render, screen } from "@testing-library/react";
import OrderSummaryBody from "../../components/molecules/OrderSummary/OrderSummaryBody";
import { mockCartList } from "@/utils/game.mock";

const cartList = mockCartList();

describe("OrderSummaryBody Component", () => {
  it("renders the OrderSummaryBody with default props", () => {
    render(<OrderSummaryBody cartList={cartList} />);
    const firstItem = screen.getByText("NBA 2K21");
    const secondItem = screen.getByText("Guild Wars 2");

    expect(firstItem).toBeDefined();
    expect(secondItem).toBeDefined();
  });

  it("displays the correct prices for each item", () => {
    render(<OrderSummaryBody cartList={cartList} />);
    const firstItemPrice = screen.getByText("$59.99");
    const secondItemPrice = screen.getByText("$70.00");

    expect(firstItemPrice).toBeDefined();
    expect(secondItemPrice).toBeDefined();
  });
});
