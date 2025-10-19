import React, { ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("text-gray-primary text-sm font-normal", {
  variants: {
    variant: {
      primary: "text-gray-primary",
      secondary: "text-gray-secondary",
      tertiary: "text-gray-tertiary",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      xl: "text-xl",
      title1: "text-txl",
      title2: "text-tlg",
      title3: "text-tmd",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type TypographyElement = Extract<
  ElementType,
  "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;

export type TypographyProps = VariantProps<typeof textVariants> & {
  children: React.ReactNode;
  element?: TypographyElement;
  className?: string;
};

const Typography = ({
  children,
  element = "p",
  className,
  ...rest
}: TypographyProps) => {
  const Element = element;
  return (
    <Element className={`${textVariants(rest)} ${className || ""}`} {...rest}>
      {children}
    </Element>
  );
};

export default Typography;
