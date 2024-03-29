import { ButtonProps } from ".";

export function PrimaryButton({
  theme = "light",
  variant = "primary",
  className,
  startIcon,
  endIcon,
  children,
  as,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`flex-shrink-0 relative px-6 h-[3.125rem] shadow-[inset_0px_0px_0px_2px] tracking-tighter rounded-tr-lg rounded-bl-lg font-semibold text-transparent justify-center items-center flex ${
        theme === "light" ? "shadow-navy-900" : "shadow-white"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center invisible gap-4 pointer-events-none">
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </div>

      <div
        className={`group hover:translate-x-1 hover:-translate-y-1 absolute top-0 left-0 w-full h-full rounded-tr-lg rounded-bl-lg flex gap-4 justify-center items-center transition-all duration-300 ease-out ${
          theme === "light"
            ? "bg-navy-900 text-white"
            : "bg-white text-navy-900"
        } ${className}`}
      >
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </div>
    </button>
  );
}
