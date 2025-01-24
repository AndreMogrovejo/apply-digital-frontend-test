"use client";

import { useEffect, useState } from "react";
import { Game } from "./endpoint";

export interface ShoppingCartGame extends Game {
  quantity: number;
}

export const useShoppingCart = () => {
  const [cart, setCart] = useState<ShoppingCartGame[]>(() => {
    // Load cart from localStorage on initial render
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("shoppingCart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Sync cart with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addItem = (item: Game) => {
    setCart((prevCart) => {
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Check if game is in cart
  const isGameInCart = (id: Game["id"]) => {
    return cart.some((item) => item.id === id);
  };

  // Remove item from cart
  const removeItem = (id: Game["id"]) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Get items price from cart
  const getItemsPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    addItem,
    removeItem,
    clearCart,
    isGameInCart,
    getItemsPrice,
  };
};
