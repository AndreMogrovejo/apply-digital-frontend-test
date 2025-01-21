"use client";
import React from "react";

interface ButtonProps {
  text: string;
  type?: "primary" | "secondary";
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

// Helper function to generate button class names
const getButtonClassNames = (
  type: "primary" | "secondary",
  isLoading: boolean,
  isDisabled: boolean
) => {
  // Base classes that are shared across all states
  const baseClasses =
    "flex items-center justify-center gap-2 w-[332px] h-[56px] py-[var(--Spacing4)] px-[var(--Spacing6)] rounded-lg border-[1px]";

  // Conditional classes based on state
  let conditionalClasses = "";

  if (isLoading) {
    conditionalClasses = "bg-blue-400 text-white cursor-wait opacity-50"; // Loading state
  } else if (isDisabled) {
    conditionalClasses =
      "bg-gray-400 text-gray-500 border-gray-400 cursor-not-allowed opacity-50"; // Disabled state
  } else {
    if (type === "primary") {
      conditionalClasses =
        "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"; // Primary state
    } else {
      conditionalClasses = "text-gray-600 border-gray-300 hover:bg-gray-300"; // Secondary state
    }
  }

  // Return the combined class string
  return `${baseClasses} ${conditionalClasses}`;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { text, onClick, type = "primary", isLoading = false } = props;
  const { isDisabled = false, iconLeft, iconRight } = props;
  const buttonClassNames = getButtonClassNames(type, isLoading, isDisabled);

  return (
    <button
      className={buttonClassNames}
      onClick={!isDisabled && !isLoading ? onClick : undefined}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? (
        <span>Loading...</span> // Placeholder for a loading spinner
      ) : (
        <>
          {iconLeft && <span className="flex items-center">{iconLeft}</span>}
          <span>{text}</span>
          {iconRight && <span className="flex items-center">{iconRight}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
