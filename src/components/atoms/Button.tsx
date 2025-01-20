"use client";
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { label, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border rounded hover:bg-gray-100"
    >
      {label}
    </button>
  );
};

export default Button;
