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

function nextColorscheme(colorscheme: Colorscheme): Colorscheme {
  switch (colorscheme) {
    case "light": {
      return "dark";
    }
    case "dark": {
      return "os";
    }
    case "os": {
      return "light";
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = colorscheme;
      throw new Error(`unknown mode (${colorscheme as string})`);
    }
  }
}

export function switchColorscheme(): Colorscheme {
  const current = currentColorscheme();
  const next = nextColorscheme(current);

  setColorscheme(next);

  return next;
}

function currentColorscheme(): Colorscheme {
  return classToColorscheme(document.body.className as Class);
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
