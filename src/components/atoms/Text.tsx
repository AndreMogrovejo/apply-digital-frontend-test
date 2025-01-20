import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = (props) => {
  const { children, className } = props;
  return <span className={className}>{children}</span>;
};

export default Text;
