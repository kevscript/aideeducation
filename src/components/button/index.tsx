import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { PrimaryButton } from "./primary-button";
import { SecondaryButton } from "./secondary-button";
import Link from "next/link";

type ButtonBaseProps = HTMLAttributes<HTMLButtonElement> & {
  theme?: "light" | "dark";
  variant?: "primary" | "secondary";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
};

type ButtonAsAnchorProps = {
  as: "anchor";
  href: string;
};

type ButtonAsLinkProps = {
  as: "link";
  href: string;
};

type ButtonAsButtonProps = {
  as?: "button";
};

export type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsLinkProps | ButtonAsButtonProps);

export function Button({ variant = "primary", ...props }: ButtonProps) {
  if (props.as === "anchor") {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener"
        className="bg-inherit"
      >
        {variant === "secondary" ? (
          <SecondaryButton {...props} />
        ) : (
          <PrimaryButton {...props} />
        )}
      </a>
    );
  }

  if (props.as === "link") {
    return (
      <Link href={props.href} passHref className="bg-inherit">
        {variant === "secondary" ? (
          <SecondaryButton {...props} />
        ) : (
          <PrimaryButton {...props} />
        )}
      </Link>
    );
  }

  return variant === "secondary" ? (
    <SecondaryButton {...props} />
  ) : (
    <PrimaryButton {...props} />
  );
}
