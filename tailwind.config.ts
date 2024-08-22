import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Wix Madefor Text Variable", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        "240": "60rem",
      },
    },
    colors: {
      "color-rosewater": "rgb(var(--color-rosewater) / <alpha-value>)",
      "color-flamingo": "rgb(var(--color-flamingo) / <alpha-value>)",
      "color-pink": "rgb(var(--color-pink) / <alpha-value>)",
      "color-mauve": "rgb(var(--color-mauve) / <alpha-value>)",
      "color-red": "rgb(var(--color-red) / <alpha-value>)",
      "color-maroon": "rgb(var(--color-maroon) / <alpha-value>)",
      "color-peach": "rgb(var(--color-peach) / <alpha-value>)",
      "color-yellow": "rgb(var(--color-yellow) / <alpha-value>)",
      "color-green": "rgb(var(--color-green) / <alpha-value>)",
      "color-teal": "rgb(var(--color-teal) / <alpha-value>)",
      "color-sky": "rgb(var(--color-sky) / <alpha-value>)",
      "color-sapphire": "rgb(var(--color-sapphire) / <alpha-value>)",
      "color-blue": "rgb(var(--color-blue) / <alpha-value>)",
      "color-lavender": "rgb(var(--color-lavender) / <alpha-value>)",
      "color-text": "rgb(var(--color-text) / <alpha-value>)",
      "color-subtext-1": "rgb(var(--color-subtext-1) / <alpha-value>)",
      "color-subtext-0": "rgb(var(--color-subtext-0) / <alpha-value>)",
      "color-overlay-2": "rgb(var(--color-overlay-2) / <alpha-value>)",
      "color-overlay-1": "rgb(var(--color-overlay-1) / <alpha-value>)",
      "color-overlay-0": "rgb(var(--color-overlay-0) / <alpha-value>)",
      "color-surface-2": "rgb(var(--color-surface-2) / <alpha-value>)",
      "color-surface-1": "rgb(var(--color-surface-1) / <alpha-value>)",
      "color-surface-0": "rgb(var(--color-surface-0) / <alpha-value>)",
      "color-base": "rgb(var(--color-base) / <alpha-value>)",
      "color-mantle": "rgb(var(--color-mantle) / <alpha-value>)",
      "color-crust": "rgb(var(--color-crust) / <alpha-value>)",
      "color-light": "rgb(var(--color-light) / <alpha-value>)",
      "color-dark": "rgb(var(--color-dark) / <alpha-value>)",
    },
  },
} satisfies Config;
