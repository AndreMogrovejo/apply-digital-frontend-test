import React from "react";
import Link from "next/link";
import Filters from "../molecules/Filters";
import LeftArrowSVG from "images/leftArrow.svg";
import OrderSummaryHeader from "../molecules/OrderSummary/OrderSummaryHeader";

interface NavbarProps {
  availableFilters?: string[];
  showFilters?: boolean;
  showCartItems?: boolean;
  showBack?: boolean;
  title?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { availableFilters, showFilters, showBack, title } = props;
  const { showCartItems } = props;
  return (
    <aside className="w-full flex flex-col justify-between items-start px-[6%] py-[2%] gap-8 bg-white">
      <div>
        {showBack ? (
          <Link href="/" className="flex items-center gap-4 mb-16">
            <LeftArrowSVG />
            <h3 className="text-text-primary text-base font-medium">
              Back to Catalog
            </h3>
          </Link>
        ) : null}
        <h1 className="text-4xl text-text-primary font-bold">{title}</h1>
        {showCartItems ? (
          <OrderSummaryHeader
            showSummaryTitle={false}
            textClassName="text-2xl mt-4"
          />
        ) : null}
      </div>
      {showFilters ? <Filters availableFilters={availableFilters} /> : null}
    </aside>
  );
};
export default Navbar;
