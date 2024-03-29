import { ButtonHTMLAttributes, HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  theme?: "light" | "dark";
  variant?: "primary" | "secondary";
};

export function Button({
  theme = "light",
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  if (variant === "primary") {
    return (
      <button
        {...props}
        className={`relative px-6 h-[3.125rem] shadow-[inset_0px_0px_0px_2px] tracking-tighter rounded-tr-lg rounded-bl-lg font-semibold text-transparent ${
          theme === "light" ? "shadow-navy-900" : "shadow-white"
        }`}
      >
        {children}
        <div
          className={`hover:translate-x-1 hover:-translate-y-1 absolute top-0 left-0 w-full h-full rounded-tr-lg rounded-bl-lg flex justify-center items-center transition-all duration-300 ease-out ${
            theme === "light"
              ? "bg-navy-900 text-white"
              : "bg-white text-navy-900"
          }`}
        >
          {children}
        </div>
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        {...props}
        className={`relative px-6 h-[3.125rem] shadow-[inset_0px_0px_0px_2px] tracking-tighter rounded-tr-lg rounded-bl-lg font-semibold text-transparent ${
          theme === "light" ? "shadow-navy-900" : "shadow-white"
        }`}
      >
        {children}
        <div
          className={`hover:translate-x-1 hover:-translate-y-1 absolute top-0 left-0 w-full h-full shadow-[inset_0px_0px_0px_2px] rounded-tr-lg rounded-bl-lg flex justify-center items-center [transition:background-color_0.15s_ease-out_0.3s,transform_0.3s] hover:[transition:background-color_0s,transform_0.3s] ${
            theme === "light"
              ? "bg-transparent shadow-navy-900 text-navy-900 hover:bg-white"
              : "bg-transparent shadow-white text-white hover:bg-navy-900"
          }`}
        >
          {children}
        </div>
      </button>
    );
  }

  return null;
}
