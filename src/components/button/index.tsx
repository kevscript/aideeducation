import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLProps } from "react";

type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: "light" | "dark";
  variant?: "primary" | "secondary";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
};

type ButtonAsAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "anchor";
};

type ButtonAsLinkProps = LinkProps &
  HTMLProps<HTMLAnchorElement> & {
    as: "link";
    href: string;
  };

type ButtonAsButtonProps = {
  as?: "button";
};

export type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsLinkProps | ButtonAsButtonProps);

export function Button({
  startIcon,
  endIcon,
  variant = "primary",
  theme = "light",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = `group transition rounded-tr-lg rounded-bl-lg overflow-hidden px-6 h-[3.125rem] tracking-tighter flex justify-center items-center font-semibold`;

  const primaryStyles = `${
    theme === "light" ? "bg-navy-900 text-white" : "bg-white text-navy-900"
  }`;
  const secondaryStyles = `${
    theme === "light"
      ? "shadow-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
      : "shadow-white text-white hover:bg-white hover:text-navy-900"
  } shadow-[inset_0px_0px_0px_2px]`;

  const activeStyles = `${baseStyles} ${
    variant === "secondary" ? secondaryStyles : primaryStyles
  } ${className}`;

  if (props.as === "anchor") {
    return (
      <a target="_blank" className={activeStyles} {...props}>
        <div className="w-full h-full flex justify-center items-center gap-4">
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </div>
      </a>
    );
  }

  if (props.as === "link") {
    return (
      <Link className={activeStyles} {...props}>
        <div className="w-full h-full flex justify-center items-center  gap-4">
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </div>
      </Link>
    );
  }

  return (
    <button className={activeStyles} {...props}>
      <div className="w-full h-full flex justify-center items-center gap-4">
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </div>
    </button>
  );
}
