import { cn } from "../utils/utils";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}
export default function Button({
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "rounded-primary border-2 px-2 sm:px-4 font-bold transition-colors";
  const primaryClasses =
    "bg-primary text-white border-primary hover:bg-primaryHover hover:border-primaryHover";
  const secondaryClasses =
    "bg-white text-primary border-primary hover:text-primaryHover hover:border-primaryHover";

  return (
    <button
      className={cn(
        baseClasses,
        variant === "primary" ? primaryClasses : secondaryClasses,
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
