import { useNavigate } from "@solidjs/router";
import { createSignal, type JSXElement } from "solid-js";
import Button from "~/components/button";
import { useT } from "~/lib/i18n";
import { switchColorscheme } from "~/lib/style";

export default function Header(): JSXElement {
  const t = useT();
  const navigate = useNavigate();

  const [colorscheme, setColorscheme] = createSignal("Colorscheme: os");

  return (
    <header class="sticky top-0 z-40 flex h-16 flex-row items-center justify-between border-b border-ctp-surface0 bg-ctp-base/95 p-6 backdrop-blur">
      <button
        class="text-xl font-semibold transition duration-75 hover:text-ctp-blue active:font-bold"
        onClick={() => {
          navigate("/");
        }}
      >
        {t("app-name")}
      </button>

      <div class="flex flex-row gap-2">
        <Button
          text={colorscheme()}
          onClick={() => {
            setColorscheme(`Colorscheme: ${switchColorscheme()}`);
          }}
        />

        <Button
          text={t("header.sign-in")}
          onClick={() => {
            navigate("/login");
          }}
        />
      </div>
    </header>
  );
}
