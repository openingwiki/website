export type Color =
  | "rosewater"
  | "flamingo"
  | "pink"
  | "mauve"
  | "red"
  | "maroon"
  | "peach"
  | "yellow"
  | "green"
  | "teal"
  | "sky"
  | "sapphire"
  | "blue"
  | "lavender"
  | "text"
  | "subtext1"
  | "subtext0"
  | "overlay2"
  | "overlay1"
  | "overlay0"
  | "surface2"
  | "surface1"
  | "surface0"
  | "base"
  | "mantle"
  | "crust";

function body(): HTMLBodyElement {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return document.getElementById("body")! as HTMLBodyElement;
}

export function setLightMode(): void {
  body().className = "ctp-latte";
}

export function setDarkMode(): void {
  body().className = "ctp-macchiato";
}

export function currentMode(): "light" | "dark" {
  const className = body().className;

  switch (className) {
    case "ctp-latte": {
      return "light";
    }
    case "ctp-macchiato": {
      return "dark";
    }
    default: {
      throw new Error(`unknown classname for body (${className})`);
    }
  }
}

export function switchMode(): void {
  const current = currentMode();

  switch (current) {
    case "light": {
      setDarkMode();
      break;
    }
    case "dark": {
      setLightMode();
      break;
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = current;
    }
  }
}
