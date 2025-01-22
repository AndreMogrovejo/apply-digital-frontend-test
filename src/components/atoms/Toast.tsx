import React from "react";
import CheckSVG from "images/checkIcon.svg";
import ErrorSVG from "images/errorIcon.svg";
import WarningSVG from "images/warningIcon.svg";
import CloseSVG from "images/closeIcon.svg";

interface ToastProps {
  text: string;
  type: "success" | "error" | "warning";
  className?: string;
}

const Toast: React.FC<ToastProps> = (props) => {
  const { className, text, type } = props;
  return (
    <div
      id="toast-success"
      className={`flex items-center fixed bottom-5 right-5 w-full max-w-xs p-4 mb-4 bg-white rounded-lg border-[1px] border-white shadow dark:text-stone-100 dark:bg-gray-dark ${className}`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
        {type === "success" && <CheckSVG />}
        {type === "error" && <ErrorSVG />}
        {type === "warning" && <WarningSVG />}
        <span className="sr-only">{`${type}-icon`}</span>
      </div>
      <div className="ms-3 text-sm font-normal">{text}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 text-white rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:text-white dark:hover:text-stone-100"
        data-dismiss-target={`#toast-${type}`}
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <CloseSVG />
      </button>
    </div>
  );
};

export default Toast;
