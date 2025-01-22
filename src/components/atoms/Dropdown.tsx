"use client";
import React, { useState } from "react";
import ChevronDownSVG from "images/chevronDown.svg";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    options[0]
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center w-[240px] h-[56px] justify-between text-xl font-normal text-text-primary focus:outline-none"
      >
        {selectedOption}
        <ChevronDownSVG />
      </button>

      {isOpen && (
        <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
