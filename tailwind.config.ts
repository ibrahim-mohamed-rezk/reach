import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DmSans: ["DM Sans", "system-ui"],
        Inter: ["Inter", "system-ui"],
        LeagueSpartan: ["League Spartan", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
