export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, disabled, ...rest }: ButtonProps) => {
  const generalStyle = "rounded-md px-6 py-2";

  const Btn = (classes: string) => {
    return (
      <button
        className={`${generalStyle} ${classes} ${className || ""}`}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  };

  const getVariant = (variant: ButtonProps["variant"] = "primary") => {
    switch (variant) {
      case "primary":
        return disabled ? "bg-disabled text-disabled" : "bg-primary text-white";
      case "secondary":
        return disabled
          ? "bg-disabled text-disabled"
          : "bg-quaternary text-primary";
      case "tertiary":
      default:
        return disabled ? "text-disabled" : "text-primary";
    }
  };

  return Btn(getVariant(rest.variant));
};

export default Button;
