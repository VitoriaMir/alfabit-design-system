export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-primary rounded-md px-lg py-2xs text-white cursor-pointer transition-colors hover:bg-primary/80 border-none ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
