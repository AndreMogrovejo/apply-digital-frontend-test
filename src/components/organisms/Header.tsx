"use client";
import React from "react";
import ShoppingCartButton from "../atoms/ShoppingCartButton";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <section className="flex justify-between items-center px-[6%] bg-surface-secondary h-[64px]">
    <h1 className="text-2xl font-bold">GamerShop</h1>
    <ShoppingCartButton />
  </section>
);

export default Header;
