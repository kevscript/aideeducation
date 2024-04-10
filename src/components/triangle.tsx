import { SVGProps } from "react";

type TriangleSVGProps = SVGProps<SVGSVGElement> & {
  variant?: "fill" | "outline";
};

export function TriangleSVG({ variant = "fill", ...props }: TriangleSVGProps) {
  if (variant === "outline") {
    return (
      <svg
        width="462"
        height="416"
        viewBox="0 0 462 416"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
      >
        <path
          d="M189.431 40C207.906 8 254.094 8 272.569 40L438.846 328C457.322 360 434.228 400 397.277 400H64.7235C27.773 400 4.67899 360 23.1542 328L189.431 40Z"
          strokeWidth="32"
        />
      </svg>
    );
  }

  return (
    <svg
      width="462"
      height="416"
      viewBox="0 0 462 416"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M175.575 32C200.208 -10.6666 261.792 -10.6667 286.426 32L452.703 320C477.336 362.667 446.544 416 397.277 416H64.7235C15.4562 416 -15.3358 362.667 9.29777 320L175.575 32Z" />
    </svg>
  );
}
