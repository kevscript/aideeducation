import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#E0F5FA",
          100: "#B1E4F3",
          300: "#4EBFE5",
          500: "#30B1E0",
          700: "#1E8FBF",
          900: "#115E8A",
        },
      },
      fontFamily: {
        text: ["Red Hat Text", ...defaultTheme.fontFamily.sans],
        display: ["Red Hat Display", ...defaultTheme.fontFamily.sans],
        comfortaa: ["Comfortaa", ...defaultTheme.fontFamily.sans],
        mono: ["Red Hat Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
export default config;
