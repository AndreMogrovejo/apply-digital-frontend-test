"use client";
import React from "react";
import Dropdown from "../atoms/Dropdown";

interface FiltersProps {
  availableFilters?: string[];
}

const Filters: React.FC<FiltersProps> = (props) => {
  const { availableFilters = [] } = props;
  const handleSelect = (option: string) => {
    console.log("Selected:", option);
  };

  return (
    <div className="flex items-center self-end px-[6%] h-[64px]">
      <h1 className="text-xl font-bold text-text-primary">Genre</h1>
      <div className="h-[22px] w-[1px] bg-gray-medium mx-6" />
      <Dropdown
        options={["All", ...availableFilters]}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default Filters;
