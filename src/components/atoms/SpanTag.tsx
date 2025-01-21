import React from "react";

interface SpanTagProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
}

const SpanTag: React.FC<SpanTagProps> = (props) => {
  const { children = "", className } = props;
  const { width = "w-[58px]", height = "h-[32px]" } = props;
  return (
    <div
      className={`bg-stone-100 text-center flex items-center justify-center rounded-md ${width} ${height} ${className}`}
    >
      <span className="text-text-primary text-[16px] font-normal sm:text-[14px]">
        {children}
      </span>
    </div>
  );
};

export default SpanTag;
