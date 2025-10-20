import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("rounded-md px-6 py-2", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      secondary: "bg-quaternary text-primary",
      tertiary: "text-primary",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      className: "disabled:bg-disabled disabled:text-disabled",
    },
    {
      variant: "secondary",
      className: "disabled:bg-disabled disabled:text-disabled",
    },
    {
      variant: "tertiary",
      className: "disabled:text-disabled",
    },
  ],
  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, variant, ...rest }: ButtonProps) => {
  return (
    <button
      className={`bg-primary rounded-[8px] px-[32px] py-[12px] text-white cursor-pointer transition-colors hover:bg-primary/80 border-none ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
