import type { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ variant = "primary", children, onClick, className = "" }: ButtonProps) => {
  const baseStyles = "cursor-pointer h-12 px-8 rounded-lg font-bold transition-colors flex items-center gap-2";

  const variantStyles = {
    primary: "bg-primary hover:bg-primary-dark text-neutral-dark transition-transform active:scale-95",
    secondary:
      "border-2 border-neutral-dark dark:border-gray-500 text-neutral-dark dark:text-white hover:bg-neutral-dark hover:text-white dark:hover:bg-white dark:hover:text-neutral-dark",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
