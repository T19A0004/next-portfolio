const {nextui} = require("@nextui-org/react");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "dark-gradient": "linear-gradient(to right, #0F2027, #203a43, #0E0E48)", // Example dark gradient
          "light-gradient": "linear-gradient(90deg, #e9defa 0%, #fbfcdb 100%)", // Example light gradient
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
