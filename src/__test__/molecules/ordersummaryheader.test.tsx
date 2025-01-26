import React from "react";
import { render, screen } from "@testing-library/react";
import { ShoppingCartProvider } from "@/utils/contexts/useShoppingCart";
import OrderSummaryHeader from "@/components/molecules/OrderSummary/OrderSummaryHeader";

describe("OrderSummaryHeader", () => {
  it("should render without crashing", () => {
    render(
      <ShoppingCartProvider>
        <OrderSummaryHeader />
      </ShoppingCartProvider>
    );

    expect(screen.getByText("Order Summary")).toBeDefined();
  });

  it("should display the correct number of items in the cart", () => {
    render(
      <ShoppingCartProvider>
        <OrderSummaryHeader />
      </ShoppingCartProvider>
    );

    expect(screen.getByText(/0 items/)).toBeDefined();
  });

  it("should render the summary title if showSummaryTitle is true", () => {
    render(
      <ShoppingCartProvider>
        <OrderSummaryHeader showSummaryTitle={true} />
      </ShoppingCartProvider>
    );

    expect(screen.getByText("Order Summary")).toBeDefined();
  });

  it("should not render the summary title if showSummaryTitle is false", () => {
    render(
      <ShoppingCartProvider>
        <OrderSummaryHeader showSummaryTitle={false} />
      </ShoppingCartProvider>
    );

    expect(screen.queryByText("Order Summary")).toBeNull();
  });
});
