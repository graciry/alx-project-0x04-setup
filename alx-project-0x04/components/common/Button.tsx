import React from "react";
import { ButtonProps } from "@/interface";

const Button = ({
  buttonLabel,
  buttonSize,
  buttonBackgroundColor,
  action,
}: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`py-2 px-4 text-white ${buttonSize} ${buttonBackgroundColor}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
