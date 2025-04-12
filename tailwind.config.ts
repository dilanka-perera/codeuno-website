import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Adjusted for src/app structure
    "./src/components/**/*.{js,ts,jsx,tsx}", // Adjusted for components folder
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        orbitron: ["var(--font-orbitron)"],
      },
    },
  },
  plugins: [],
};

export default config;
