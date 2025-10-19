import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const linkVariants = cva("text-primary aria-disabled:text-disabled", {
  variants: {},
  defaultVariants: {},
});

export type LinkProps = VariantProps<typeof linkVariants> & {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, href, disabled, className, ...rest }: LinkProps) => {
  return (
    <a
      href={disabled ? undefined : href}
      className={`${linkVariants()} ${className || ""}`}
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
