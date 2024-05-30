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
        'prime-blue': '#1D3461',
        'prime-green': '#007366',
        'prime-yellow': '#FFB20C'
        
        
      }
    },
  },
  plugins: [],
};
export default config;
