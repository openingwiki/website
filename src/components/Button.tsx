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
    "text-nowrap rounded-lg border-2 border-solid px-4 py-1 font-medium transition hover:font-semibold active:font-semibold";

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
  switch (color) {
    case "rosewater": {
      return [
        "border-color-rosewater",
        "text-color-rosewater",
        "hover:bg-color-rosewater/25",
        "active:bg-color-rosewater",
        "active:text-color-dark",
      ];
    }
    case "flamingo": {
      return [
        "border-color-flamingo",
        "text-color-flamingo",
        "hover:bg-color-flamingo/25",
        "active:bg-color-flamingo",
        "active:text-color-dark",
      ];
    }
    case "pink": {
      return [
        "border-color-pink",
        "text-color-pink",
        "hover:bg-color-pink/25",
        "active:bg-color-pink",
        "active:text-color-dark",
      ];
    }
    case "mauve": {
      return [
        "border-color-mauve",
        "text-color-mauve",
        "hover:bg-color-mauve/25",
        "active:bg-color-mauve",
        "active:text-color-dark",
      ];
    }
    case "red": {
      return [
        "border-color-red",
        "text-color-red",
        "hover:bg-color-red/25",
        "active:bg-color-red",
        "active:text-color-dark",
      ];
    }
    case "maroon": {
      return [
        "border-color-maroon",
        "text-color-maroon",
        "hover:bg-color-maroon/25",
        "active:bg-color-maroon",
        "active:text-color-dark",
      ];
    }
    case "peach": {
      return [
        "border-color-peach",
        "text-color-peach",
        "hover:bg-color-peach/25",
        "active:bg-color-peach",
        "active:text-color-dark",
      ];
    }
    case "yellow": {
      return [
        "border-color-yellow",
        "text-color-yellow",
        "hover:bg-color-yellow/25",
        "active:bg-color-yellow",
        "active:text-color-dark",
      ];
    }
    case "green": {
      return [
        "border-color-green",
        "text-color-green",
        "hover:bg-color-green/25",
        "active:bg-color-green",
        "active:text-color-dark",
      ];
    }
    case "teal": {
      return [
        "border-color-teal",
        "text-color-teal",
        "hover:bg-color-teal/25",
        "active:bg-color-teal",
        "active:text-color-dark",
      ];
    }
    case "sky": {
      return [
        "border-color-sky",
        "text-color-sky",
        "hover:bg-color-sky/25",
        "active:bg-color-sky",
        "active:text-color-dark",
      ];
    }
    case "sapphire": {
      return [
        "border-color-sapphire",
        "text-color-sapphire",
        "hover:bg-color-sapphire/25",
        "active:bg-color-sapphire",
        "active:text-color-dark",
      ];
    }
    case "blue": {
      return [
        "border-color-blue",
        "text-color-blue",
        "hover:bg-color-blue/25",
        "active:bg-color-blue",
        "active:text-color-dark",
      ];
    }
    case "lavender": {
      return [
        "border-color-lavender",
        "text-color-lavender",
        "hover:bg-color-lavender/25",
        "active:bg-color-lavender",
        "active:text-color-dark",
      ];
    }
    case "text": {
      return [
        "border-color-text",
        "text-color-text",
        "hover:bg-color-text/25",
        "active:bg-color-text",
        "active:text-color-base",
      ];
    }
    case "subtext-1": {
      return [
        "border-color-subtext-1",
        "text-color-subtext-1",
        "hover:bg-color-subtext-1/25",
        "active:bg-color-subtext-1",
        "active:text-color-dark",
      ];
    }
    case "subtext-0": {
      return [
        "border-color-subtext-0",
        "text-color-subtext-0",
        "hover:bg-color-subtext-0/25",
        "active:bg-color-subtext-0",
        "active:text-color-dark",
      ];
    }
    case "overlay-2": {
      return [
        "border-color-overlay-2",
        "text-color-overlay-2",
        "hover:bg-color-overlay-2/25",
        "active:bg-color-overlay-2",
        "active:text-color-dark",
      ];
    }
    case "overlay-1": {
      return [
        "border-color-overlay-1",
        "text-color-overlay-1",
        "hover:bg-color-overlay-1/25",
        "active:bg-color-overlay-1",
        "active:text-color-dark",
      ];
    }
    case "overlay-0": {
      return [
        "border-color-overlay-0",
        "text-color-overlay-0",
        "hover:bg-color-overlay-0/25",
        "active:bg-color-overlay-0",
        "active:text-color-dark",
      ];
    }
    case "surface-2": {
      return [
        "border-color-surface-2",
        "text-color-surface-2",
        "hover:bg-color-surface-2/25",
        "active:bg-color-surface-2",
        "active:text-color-dark",
      ];
    }
    case "surface-1": {
      return [
        "border-color-surface-1",
        "text-color-surface-1",
        "hover:bg-color-surface-1/25",
        "active:bg-color-surface-1",
        "active:text-color-dark",
      ];
    }
    case "surface-0": {
      return [
        "border-color-surface-0",
        "text-color-surface-0",
        "hover:bg-color-surface-0/25",
        "active:bg-color-surface-0",
        "active:text-color-dark",
      ];
    }
    case "base": {
      return [
        "border-color-base",
        "text-color-base",
        "hover:bg-color-base/25",
        "active:bg-color-base",
        "active:text-color-text",
      ];
    }
    case "mantle": {
      return [
        "border-color-mantle",
        "text-color-mantle",
        "hover:bg-color-mantle/25",
        "active:bg-color-mantle",
        "active:text-color-text",
      ];
    }
    case "crust": {
      return [
        "border-color-crust",
        "text-color-crust",
        "hover:bg-color-crust/25",
        "active:bg-color-crust",
        "active:text-color-text",
      ];
    }
    case "light": {
      return [
        "border-color-light",
        "text-color-light",
        "hover:bg-color-light/25",
        "active:bg-color-light",
        "active:text-color-dark",
      ];
    }
    case "dark": {
      return [
        "border-color-dark",
        "text-color-dark",
        "hover:bg-color-dark/25",
        "active:bg-color-dark",
        "active:text-color-light",
      ];
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = color;
      return [];
    }
  }
}
