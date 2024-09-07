import catppuccin from "@catppuccin/tailwindcss";
import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {},
    extend: {
      fontFamily: {
        sans: ["Wix Madefor Text Variable", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        "72": "18rem",
        "240": "60rem",
      },
    },
  },
  plugins: [
    catppuccin({
      prefix: "ctp",
    }),
  ],
} satisfies Config;
