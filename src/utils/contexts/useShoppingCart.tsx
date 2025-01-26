"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import { createContext, useCallback } from "react";
import { Game } from "../endpoint";

export interface ShoppingCartGame extends Game {
  quantity: number;
}

interface ShoppingCartContextType {
  cart: ShoppingCartGame[];
  addItem: (item: Game) => void;
  removeItem: (id: Game["id"]) => void;
  clearCart: () => void;
  isGameInCart: (id: Game["id"]) => boolean;
  getItemsPrice: number;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

export const ShoppingCartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ShoppingCartGame[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("shoppingCart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  const addItem = useCallback((item: Game) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: Game["id"]) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const isGameInCart = useCallback(
    (id: Game["id"]) => cart.some((item) => item.id === id),
    [cart]
  );

  const getItemsPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      addItem,
      removeItem,
      clearCart,
      isGameInCart,
      getItemsPrice,
    }),
    [cart, addItem, removeItem, clearCart, isGameInCart, getItemsPrice]
  );

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
