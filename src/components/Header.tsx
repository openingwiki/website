import { type JSXElement } from "solid-js";
import Button from "~/components/Button";
import { useT } from "~/lib/i18n";

export default function Header(): JSXElement {
  const t = useT();
  return (
    <header class="flex h-12 flex-row items-center justify-between bg-color-mantle p-6">
      {t("app-name")}

      <Button text="Sign in" color="blue" />
    </header>
  );
}
