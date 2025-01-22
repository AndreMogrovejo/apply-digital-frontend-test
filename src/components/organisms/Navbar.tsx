import React from "react";
import Filters from "../molecules/Filters";

interface NavbarProps {
  availableFilters?: string[];
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { availableFilters } = props;
  return (
    <aside className="w-full flex flex-col justify-between items-start px-[6%] py-[2%] gap-8 bg-white border-y-2">
      <h1 className="text-4xl text-text-primary font-bold">Top Sellers</h1>
      <Filters availableFilters={availableFilters} />
    </aside>
  );
};
export default Navbar;
