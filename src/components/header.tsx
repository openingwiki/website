import { useNavigate } from "@solidjs/router";
import { createSignal, onMount, Show, type JSXElement } from "solid-js";
import Button from "~/components/button";
import { useT } from "~/lib/i18n";
import { token, updateToken } from "~/lib/session";
import { switchColorscheme } from "~/lib/style";

export default function Header(): JSXElement {
  const t = useT();
  const navigate = useNavigate();

  const [colorscheme, setColorscheme] = createSignal("Colorscheme: os");

  onMount(() => {
    updateToken();
  });

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

      <div class="flex flex-row items-center gap-2">
        <Button
          text={colorscheme()}
          onClick={() => {
            setColorscheme(`Colorscheme: ${switchColorscheme()}`);
          }}
        />

        <Show
          when={token() === undefined}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          fallback={<span>Token: {token()!.slice(0, 15)}…</span>}
        >
          <Button
            text={t("header.sign-in")}
            onClick={() => {
              navigate("/login");
            }}
          />
        </Show>
      </div>
    </header>
  );
}
