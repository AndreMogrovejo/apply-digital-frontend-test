"use client";
import React from "react";
import Dropdown from "../atoms/Dropdown";
import { useRouter } from "next/navigation";

interface FiltersProps {
  availableFilters?: string[];
}

const Filters: React.FC<FiltersProps> = (props) => {
  const { availableFilters = [] } = props;
  const router = useRouter();

  const handleSelect = (option: string) => {
    if (option === "All") {
      router.push("/");
      return;
    }
    router.push(`?genre=${option}`);
  };

  return (
    <div className="flex items-center self-end px-0 sm:px-[6%] h-[64px]">
      <h1 className="text-xl font-bold text-text-primary">Genre</h1>
      <div className="h-[22px] w-[1px] bg-gray-medium mx-4 sm:mx-6" />
      <Dropdown
        options={["All", ...availableFilters]}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default Filters;
