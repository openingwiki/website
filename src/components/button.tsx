import { type JSX, type JSXElement, VoidProps } from "solid-js";
import { twMerge } from "tailwind-merge";
import { type Color } from "~/lib/style";

interface ButtonProps extends VoidProps {
  class?: string;
  color?: Color;
  text: string;
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
}

export default function Button(props: ButtonProps): JSXElement {
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
        "border-ctp-rosewater",
        "text-ctp-rosewater",
        "hover:bg-ctp-rosewater/25",
        "active:bg-ctp-rosewater",
        "active:text-ctp-base",
      ];
    }
    case "flamingo": {
      return [
        "border-ctp-flamingo",
        "text-ctp-flamingo",
        "hover:bg-ctp-flamingo/25",
        "active:bg-ctp-flamingo",
        "active:text-ctp-base",
      ];
    }
    case "pink": {
      return [
        "border-ctp-pink",
        "text-ctp-pink",
        "hover:bg-ctp-pink/25",
        "active:bg-ctp-pink",
        "active:text-ctp-base",
      ];
    }
    case "mauve": {
      return [
        "border-ctp-mauve",
        "text-ctp-mauve",
        "hover:bg-ctp-mauve/25",
        "active:bg-ctp-mauve",
        "active:text-ctp-base",
      ];
    }
    case "red": {
      return [
        "border-ctp-red",
        "text-ctp-red",
        "hover:bg-ctp-red/25",
        "active:bg-ctp-red",
        "active:text-ctp-base",
      ];
    }
    case "maroon": {
      return [
        "border-ctp-maroon",
        "text-ctp-maroon",
        "hover:bg-ctp-maroon/25",
        "active:bg-ctp-maroon",
        "active:text-ctp-base",
      ];
    }
    case "peach": {
      return [
        "border-ctp-peach",
        "text-ctp-peach",
        "hover:bg-ctp-peach/25",
        "active:bg-ctp-peach",
        "active:text-ctp-base",
      ];
    }
    case "yellow": {
      return [
        "border-ctp-yellow",
        "text-ctp-yellow",
        "hover:bg-ctp-yellow/25",
        "active:bg-ctp-yellow",
        "active:text-ctp-base",
      ];
    }
    case "green": {
      return [
        "border-ctp-green",
        "text-ctp-green",
        "hover:bg-ctp-green/25",
        "active:bg-ctp-green",
        "active:text-ctp-base",
      ];
    }
    case "teal": {
      return [
        "border-ctp-teal",
        "text-ctp-teal",
        "hover:bg-ctp-teal/25",
        "active:bg-ctp-teal",
        "active:text-ctp-base",
      ];
    }
    case "sky": {
      return [
        "border-ctp-sky",
        "text-ctp-sky",
        "hover:bg-ctp-sky/25",
        "active:bg-ctp-sky",
        "active:text-ctp-base",
      ];
    }
    case "sapphire": {
      return [
        "border-ctp-sapphire",
        "text-ctp-sapphire",
        "hover:bg-ctp-sapphire/25",
        "active:bg-ctp-sapphire",
        "active:text-ctp-base",
      ];
    }
    case "blue": {
      return [
        "border-ctp-blue",
        "text-ctp-blue",
        "hover:bg-ctp-blue/25",
        "active:bg-ctp-blue",
        "active:text-ctp-base",
      ];
    }
    case "lavender": {
      return [
        "border-ctp-lavender",
        "text-ctp-lavender",
        "hover:bg-ctp-lavender/25",
        "active:bg-ctp-lavender",
        "active:text-ctp-base",
      ];
    }
    case "text": {
      return [
        "border-ctp-text",
        "text-ctp-text",
        "hover:bg-ctp-text/25",
        "active:bg-ctp-text",
        "active:text-ctp-base",
      ];
    }
    case "subtext1": {
      return [
        "border-ctp-subtext1",
        "text-ctp-subtext1",
        "hover:bg-ctp-subtext1/25",
        "active:bg-ctp-subtext1",
        "active:text-ctp-base",
      ];
    }
    case "subtext0": {
      return [
        "border-ctp-subtext0",
        "text-ctp-subtext0",
        "hover:bg-ctp-subtext0/25",
        "active:bg-ctp-subtext0",
        "active:text-ctp-base",
      ];
    }
    case "overlay2": {
      return [
        "border-ctp-overlay2",
        "text-ctp-overlay2",
        "hover:bg-ctp-overlay2/25",
        "active:bg-ctp-overlay2",
        "active:text-ctp-base",
      ];
    }
    case "overlay1": {
      return [
        "border-ctp-overlay1",
        "text-ctp-overlay1",
        "hover:bg-ctp-overlay1/25",
        "active:bg-ctp-overlay1",
        "active:text-ctp-base",
      ];
    }
    case "overlay0": {
      return [
        "border-ctp-overlay0",
        "text-ctp-overlay0",
        "hover:bg-ctp-overlay0/25",
        "active:bg-ctp-overlay0",
        "active:text-ctp-base",
      ];
    }
    case "surface2": {
      return [
        "border-ctp-surface2",
        "text-ctp-surface2",
        "hover:bg-ctp-surface2/25",
        "active:bg-ctp-surface2",
        "active:text-ctp-base",
      ];
    }
    case "surface1": {
      return [
        "border-ctp-surface1",
        "text-ctp-surface1",
        "hover:bg-ctp-surface1/25",
        "active:bg-ctp-surface1",
        "active:text-ctp-base",
      ];
    }
    case "surface0": {
      return [
        "border-ctp-surface0",
        "text-ctp-surface0",
        "hover:bg-ctp-surface0/25",
        "active:bg-ctp-surface0",
        "active:text-ctp-base",
      ];
    }
    case "base": {
      return [
        "border-ctp-base",
        "text-ctp-base",
        "hover:bg-ctp-base/25",
        "active:bg-ctp-base",
        "active:text-ctp-text",
      ];
    }
    case "mantle": {
      return [
        "border-ctp-mantle",
        "text-ctp-mantle",
        "hover:bg-ctp-mantle/25",
        "active:bg-ctp-mantle",
        "active:text-ctp-text",
      ];
    }
    case "crust": {
      return [
        "border-ctp-crust",
        "text-ctp-crust",
        "hover:bg-ctp-crust/25",
        "active:bg-ctp-crust",
        "active:text-ctp-text",
      ];
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = color;
      return [];
    }
  }
}
