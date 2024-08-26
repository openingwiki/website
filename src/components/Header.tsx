import { useNavigate } from "@solidjs/router";
import { type JSXElement } from "solid-js";
import Button from "~/components/Button";
import { useT } from "~/lib/i18n";
import { switchColorscheme } from "~/lib/style";

export default function Header(): JSXElement {
  const t = useT();
  const navigate = useNavigate();

  return (
    <header class="flex h-16 flex-row items-center justify-between border-b border-ctp-surface0 bg-ctp-base/95 p-6 backdrop-blur-md">
      <button
        class="text-xl font-semibold transition duration-75 hover:text-ctp-blue active:font-bold"
        onClick={() => {
          navigate("/");
        }}
      >
        {t("app-name")}
      </button>
      <Button text="Sign in" onClick={switchColorscheme} />
    </header>
  );
}
