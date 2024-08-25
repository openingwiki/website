import { type JSXElement } from "solid-js";
import Button from "~/components/Button";
import { T } from "~/lib/i18n";

export default function Header(): JSXElement {
  return (
    <header class="flex h-12 flex-row items-center justify-between bg-color-mantle p-6">
      <T key="app-name" />
      <Button text="Sign in" color="blue" />
    </header>
  );
}
