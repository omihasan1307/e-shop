import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        baseBgColor: "#38BDF8", // Common background color
      },
      colors: {
        baseTextColor: "#38BDF8", // Common background color
      },
    },
  },
  plugins: [],
};
export default config;
