import { ButtonProps } from ".";

export function SecondaryButton({
  theme = "light",
  variant = "secondary",
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
      className={`bg-inherit relative px-6 h-[3.125rem] shadow-[inset_0px_0px_0px_1px] tracking-tighter rounded-tr-lg rounded-bl-lg font-semibold text-transparent flex justify-center items-center ${
        theme === "light" ? "shadow-navy-900" : "shadow-white"
      } ${className}`}
    >
      <div className="w-full h-full flex justify-center items-center invisible gap-4 pointer-events-none">
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </div>

      <div
        className={`px-6 group hover:translate-x-1 gap-4 hover:-translate-y-1 absolute top-0 left-0 w-full h-full shadow-[inset_0px_0px_0px_2px] rounded-tr-lg rounded-bl-lg flex justify-center items-center [transition:background-color_0s_ease-out_0.3s,transform_0.3s] hover:[transition:background-color_0s,transform_0.3s] ${
          theme === "light"
            ? "bg-transparent shadow-navy-900 text-navy-900 hover:bg-white"
            : `bg-transparent shadow-white text-white hover:bg-inherit`
        } ${className}`}
      >
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </div>
    </button>
  );
}
