import React from "react";
import ShoppingCartButton from "../atoms/ShoppingCartButton";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <section className="flex justify-between items-center px-[6%] bg-surface-secondary h-[64px]">
    <Link href="/">
      <h1 className="text-2xl text-gray-light font-bold">GamerShop</h1>
    </Link>
    <ShoppingCartButton />
  </section>
);

export default Header;
