import { type JSXElement } from "solid-js";
import Button from "~/components/Button";
import { useT } from "~/lib/i18n";
import { switchMode } from "~/lib/style";

export default function Header(): JSXElement {
  const t = useT();
  return (
    <header class="flex h-12 flex-row items-center justify-between bg-ctp-mantle p-6">
      {t("app-name")}

      <Button text="Sign in" onClick={switchMode} />
    </header>
  );
}
