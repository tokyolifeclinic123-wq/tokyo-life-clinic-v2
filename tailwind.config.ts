import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          sky:          '#5BC8E8',
          'sky-light':  '#E8F8FD',
          'sky-mid':    '#A8DFF2',
          navy:         '#1A3A4A',
          text:         '#2C3E50',
          'text-light': '#7A8F9A',
          border:       '#D6EEF7',
          gold:         '#C9A96E',
          line:         '#06C755',
        },
      },
    },
  },
  plugins: [],
};
export default config;
