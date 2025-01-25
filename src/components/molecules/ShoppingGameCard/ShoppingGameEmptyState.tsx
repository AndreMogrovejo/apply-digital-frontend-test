import Button from "@/components/atoms/Button";
import Link from "next/link";
import React from "react";

const ShoppingGameEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full text-center">
      <div className="text-text-primary text-2xl font-semibold">
        Your cart is empty
      </div>
      <p className="text-text-primary max-w-[80%]">
        Explore the catalog to add some games to your cart.
      </p>
      <Link href="/">
        <Button className="mt-4 px-4 ">Back to catalog</Button>
      </Link>
    </div>
  );
};

export default ShoppingGameEmptyState;
