import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useShoppingCart } from "@/utils/contexts/useShoppingCart";
import { ShoppingCartProvider } from "@/utils/contexts/useShoppingCart";

import { mockCartList } from "@/utils/game.mock";

const cartList = mockCartList();

const TestComponent: React.FC = () => {
  const { cart, addItem, removeItem, clearCart, isGameInCart, getItemsPrice } =
    useShoppingCart();

  return (
    <div>
      <button onClick={() => addItem(cartList[0])}>Add Mock Game</button>
      <button onClick={() => addItem(cartList[1])}>
        Add Another Mock Game
      </button>
      <button onClick={() => removeItem(cartList[0].id)}>
        Remove Mock Game
      </button>
      <button onClick={clearCart}>Clear Cart</button>
      <div>Cart Items: {JSON.stringify(cart)}</div>
      <div>Total Price: {getItemsPrice}</div>
      <div>
        Is Mock Game in Cart: {isGameInCart(cartList[0].id) ? "Yes" : "No"}
      </div>
    </div>
  );
};

describe("ShoppingCartProvider and useShoppingCart", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render without crashing", () => {
    render(
      <ShoppingCartProvider>
        <div>Shopping Cart Provider</div>
      </ShoppingCartProvider>
    );

    expect(screen.getByText("Shopping Cart Provider")).toBeDefined();
  });

  it("should add an item to the cart", () => {
    render(
      <ShoppingCartProvider>
        <TestComponent />
      </ShoppingCartProvider>
    );

    const addButton = screen.getByText("Add Mock Game");

    act(() => {
      addButton.click();
    });

    expect(screen.getByText(/Cart Items:/).textContent).toContain(
      JSON.stringify([{ ...cartList[0], quantity: 1 }])
    );
  });

  it("should remove an item from the cart", () => {
    render(
      <ShoppingCartProvider>
        <TestComponent />
      </ShoppingCartProvider>
    );

    const addButton = screen.getByText("Add Mock Game");
    const removeButton = screen.getByText("Remove Mock Game");

    act(() => {
      addButton.click();
      removeButton.click();
    });

    expect(screen.getByText(/Cart Items:/).textContent).toContain("[]");
  });

  it("should clear the cart", () => {
    render(
      <ShoppingCartProvider>
        <TestComponent />
      </ShoppingCartProvider>
    );

    const addButton = screen.getByText("Add Mock Game");
    const clearButton = screen.getByText("Clear Cart");

    act(() => {
      addButton.click();
      clearButton.click();
    });

    expect(screen.getByText(/Cart Items:/).textContent).toContain("[]");
  });

  it("should calculate the total price", () => {
    render(
      <ShoppingCartProvider>
        <TestComponent />
      </ShoppingCartProvider>
    );

    const addMockGameButton = screen.getByText("Add Mock Game");
    const addAnotherGameButton = screen.getByText("Add Another Mock Game");

    act(() => {
      addMockGameButton.click();
      addAnotherGameButton.click();
    });

    expect(screen.getByText(/Total Price:/).textContent).toContain("129.99");
  });

  it("should check if a game is in the cart", () => {
    render(
      <ShoppingCartProvider>
        <TestComponent />
      </ShoppingCartProvider>
    );

    const addButton = screen.getByText("Add Mock Game");

    act(() => {
      addButton.click();
    });

    expect(screen.getByText(/Is Mock Game in Cart:/).textContent).toContain(
      "Yes"
    );
  });

  it("should sync the cart with localStorage", () => {
    render(
      <ShoppingCartProvider>
        <TestComponent />
      </ShoppingCartProvider>
    );

    const addButton = screen.getByText("Add Mock Game");

    act(() => {
      addButton.click();
    });

    const storedCart = JSON.parse(localStorage.getItem("shoppingCart") || "[]");
    expect(storedCart).toEqual([{ ...cartList[0], quantity: 1 }]);
  });
});
