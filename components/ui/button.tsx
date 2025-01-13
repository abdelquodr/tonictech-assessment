"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

type ButtonType = {
  label: string;
  className?: string;
  variant: "solid" | "outlined" | "default";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
};

const Button: FC<ButtonType> = (props) => {
  const { label, className, variant, type, onClick, href } = props;
  const router = useRouter();

  if (label === null) {
    throw new Error("label cannot be null");
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    }
  };

  const buttonClassName = `
    text-zinc-700 text-xs rounded-full font-normal md:text-sm lg:text-base
    ${
      variant === "solid"
        ? "bg-[#65E4A3] text-[#0A2640] font-semibold py-2 px-6 max-w-sm"
        : variant === "outlined"
        ? "border-2 border-[#0A2640] py-2 px-6 align-center md:px-7 text-zinc-800 max-w-sm"
        : variant === "default"
        ? "bg-grey-light text-grey-400 sm:px-4 py-2 rounded-full max-w-sm"
        : ""
    }
    ${className}
  `;

  return (
    <button className={buttonClassName} type={type} onClick={handleClick}>
      <p className="flex justify-center align-baseline">
        <span className="md:pt-0 text-[#0A2640] font-bold">{label}</span>
      </p>
    </button>
  );
};

export default Button;
