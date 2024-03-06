import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "560px",
        sm: "640px",
        md: "768px",
        mds: "780px",
        ml: "810px",
        mls: "844px",
        mlg: "896px",
        mlx: "926px",
        lg: "1024px",
        sml: "1100px",
        xl: "1280px",
        mxl: "1400px",
        mxxl: "1600px",
      },
    },
  },
  plugins: [],
};
export default config;
