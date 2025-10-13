export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-[#2D5BFF] rounded-[8px] px-[32px] py-[12px] text-white cursor-pointer transition-colors hover:bg-[#1a41d8] border-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
