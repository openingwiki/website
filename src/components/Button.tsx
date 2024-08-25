import { JSX, type JSXElement, VoidProps } from "solid-js";
import { twMerge } from "tailwind-merge";
import { type Color } from "~/lib/style";

type ButtonProps = {
  class?: string;
  color?: Color;
  text: string;
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
};

export default function Button(props: VoidProps<ButtonProps>): JSXElement {
  const hardButtonClass =
    "text-nowrap rounded-lg border-2 border-solid px-3 py-1 transition hover:font-medium active:font-medium";

  const buttonClass = () => {
    let color: Color;
    if (props.color !== undefined) {
      color = props.color;
    } else {
      color = "blue";
    }

    return twMerge(hardButtonClass, props.class, colorVariant(color));
  };

  return (
    <button
      class={buttonClass()}
      // eslint-disable-next-line solid/reactivity
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

function colorVariant(color: Color): string[] {
  const colorVariants = {
    rosewater: [
      "border-color-rosewater",
      "text-color-rosewater",
      "hover:bg-color-rosewater/25",
      "active:bg-color-rosewater",
      "active:text-color-dark",
    ],
    flamingo: [
      "border-color-flamingo",
      "text-color-flamingo",
      "hover:bg-color-flamingo/25",
      "active:bg-color-flamingo",
      "active:text-color-dark",
    ],
    pink: [
      "border-color-pink",
      "text-color-pink",
      "hover:bg-color-pink/25",
      "active:bg-color-pink",
      "active:text-color-dark",
    ],
    mauve: [
      "border-color-mauve",
      "text-color-mauve",
      "hover:bg-color-mauve/25",
      "active:bg-color-mauve",
      "active:text-color-dark",
    ],
    red: [
      "border-color-red",
      "text-color-red",
      "hover:bg-color-red/25",
      "active:bg-color-red",
      "active:text-color-dark",
    ],
    maroon: [
      "border-color-maroon",
      "text-color-maroon",
      "hover:bg-color-maroon/25",
      "active:bg-color-maroon",
      "active:text-color-dark",
    ],
    peach: [
      "border-color-peach",
      "text-color-peach",
      "hover:bg-color-peach/25",
      "active:bg-color-peach",
      "active:text-color-dark",
    ],
    yellow: [
      "border-color-yellow",
      "text-color-yellow",
      "hover:bg-color-yellow/25",
      "active:bg-color-yellow",
      "active:text-color-dark",
    ],
    green: [
      "border-color-green",
      "text-color-green",
      "hover:bg-color-green/25",
      "active:bg-color-green",
      "active:text-color-dark",
    ],
    teal: [
      "border-color-teal",
      "text-color-teal",
      "hover:bg-color-teal/25",
      "active:bg-color-teal",
      "active:text-color-dark",
    ],
    sky: [
      "border-color-sky",
      "text-color-sky",
      "hover:bg-color-sky/25",
      "active:bg-color-sky",
      "active:text-color-dark",
    ],
    sapphire: [
      "border-color-sapphire",
      "text-color-sapphire",
      "hover:bg-color-sapphire/25",
      "active:bg-color-sapphire",
      "active:text-color-dark",
    ],
    blue: [
      "border-color-blue",
      "text-color-blue",
      "hover:bg-color-blue/25",
      "active:bg-color-blue",
      "active:text-color-dark",
    ],
    lavender: [
      "border-color-lavender",
      "text-color-lavender",
      "hover:bg-color-lavender/25",
      "active:bg-color-lavender",
      "active:text-color-dark",
    ],
    text: [
      "border-color-text",
      "text-color-text",
      "hover:bg-color-text/25",
      "active:bg-color-text",
      "active:text-color-base",
    ],
    "subtext-1": [
      "border-color-subtext-1",
      "text-color-subtext-1",
      "hover:bg-color-subtext-1/25",
      "active:bg-color-subtext-1",
      "active:text-color-dark",
    ],
    "subtext-0": [
      "border-color-subtext-0",
      "text-color-subtext-0",
      "hover:bg-color-subtext-0/25",
      "active:bg-color-subtext-0",
      "active:text-color-dark",
    ],
    "overlay-2": [
      "border-color-overlay-2",
      "text-color-overlay-2",
      "hover:bg-color-overlay-2/25",
      "active:bg-color-overlay-2",
      "active:text-color-dark",
    ],
    "overlay-1": [
      "border-color-overlay-1",
      "text-color-overlay-1",
      "hover:bg-color-overlay-1/25",
      "active:bg-color-overlay-1",
      "active:text-color-dark",
    ],
    "overlay-0": [
      "border-color-overlay-0",
      "text-color-overlay-0",
      "hover:bg-color-overlay-0/25",
      "active:bg-color-overlay-0",
      "active:text-color-dark",
    ],
    "surface-2": [
      "border-color-surface-2",
      "text-color-surface-2",
      "hover:bg-color-surface-2/25",
      "active:bg-color-surface-2",
      "active:text-color-dark",
    ],
    "surface-1": [
      "border-color-surface-1",
      "text-color-surface-1",
      "hover:bg-color-surface-1/25",
      "active:bg-color-surface-1",
      "active:text-color-dark",
    ],
    "surface-0": [
      "border-color-surface-0",
      "text-color-surface-0",
      "hover:bg-color-surface-0/25",
      "active:bg-color-surface-0",
      "active:text-color-dark",
    ],
    base: [
      "border-color-base",
      "text-color-base",
      "hover:bg-color-base/25",
      "active:bg-color-base",
      "active:text-color-text",
    ],
    mantle: [
      "border-color-mantle",
      "text-color-mantle",
      "hover:bg-color-mantle/25",
      "active:bg-color-mantle",
      "active:text-color-text",
    ],
    crust: [
      "border-color-crust",
      "text-color-crust",
      "hover:bg-color-crust/25",
      "active:bg-color-crust",
      "active:text-color-text",
    ],
    light: [
      "border-color-light",
      "text-color-light",
      "hover:bg-color-light/25",
      "active:bg-color-light",
      "active:text-color-dark",
    ],
    dark: [
      "border-color-dark",
      "text-color-dark",
      "hover:bg-color-dark/25",
      "active:bg-color-dark",
      "active:text-color-light",
    ],
  };

  return colorVariants[color];
}
