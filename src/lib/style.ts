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

type Colorscheme = "light" | "dark" | "os";

type Class = "ctp-latte" | "ctp-macchiato" | "ctp-latte dark:ctp-macchiato";

export function setColorscheme(colorscheme: Colorscheme): void {
  document.body.className = colorschemeToClass(colorscheme);
}

export function currentColorscheme(): Colorscheme {
  return classToColorscheme(document.body.className as Class);
}

export function switchColorscheme(): void {
  const colorscheme = currentColorscheme();

  switch (colorscheme) {
    case "light": {
      setColorscheme("dark");
      break;
    }
    case "dark": {
      setColorscheme("os");
      break;
    }
    case "os": {
      setColorscheme("light");
      break;
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = colorscheme;
    }
  }
}

function classToColorscheme(className: Class): Colorscheme {
  switch (className) {
    case "ctp-latte": {
      return "light";
    }
    case "ctp-macchiato": {
      return "dark";
    }
    case "ctp-latte dark:ctp-macchiato": {
      return "os";
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = className;
      throw new Error(`unknown class for body (${className as string})`);
    }
  }
}

function colorschemeToClass(colorscheme: Colorscheme): Class {
  switch (colorscheme) {
    case "light": {
      return "ctp-latte";
    }
    case "dark": {
      return "ctp-macchiato";
    }
    case "os": {
      return "ctp-latte dark:ctp-macchiato";
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = colorscheme;
      throw new Error(`unknown mode (${colorscheme as string})`);
    }
  }
}
