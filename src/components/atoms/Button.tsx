"use client";
import React from "react";

interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  type?: "primary" | "secondary";
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

// Helper function to generate button class names
export const getButtonClassNames = (
  type: "primary" | "secondary",
  isLoading: boolean,
  isDisabled: boolean
): string => {
  const baseClasses =
    "flex items-center justify-center gap-2 w-full h-[56px] rounded-lg border-[1px] border-stroke-primary transition";

  const stateClasses = isLoading
    ? `cursor-wait opacity-60 ${
        type === "primary" ? "bg-gray-light" : "bg-white"
      }`
    : isDisabled
    ? "cursor-not-allowed opacity-60"
    : type === "primary"
    ? "bg-gray-light hover:bg-gray-dark"
    : "hover:bg-stone-100";

  return `${baseClasses} ${stateClasses}`;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { text, onClick, type = "primary", isLoading = false } = props;
  const { isDisabled = false, iconLeft, iconRight, className } = props;
  const { children } = props;
  const buttonClassNames = getButtonClassNames(type, isLoading, isDisabled);
  const textColorClass =
    type === "primary" ? "text-white" : "text-text-primary";

  return (
    <button
      className={`${buttonClassNames} ${className}`}
      onClick={!isDisabled && !isLoading ? onClick : undefined}
      disabled={isDisabled || isLoading}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      <span className={`text-center font-bold text-base ${textColorClass}`}>
        {isLoading ? "Loading..." : children ? children : text}
      </span>
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </button>
  );
};

export default Button;
