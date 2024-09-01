import {
  createSignal,
  onMount,
  type JSX,
  type JSXElement,
  type VoidProps,
} from "solid-js";
import Button from "~/components/button";
import { useT } from "~/lib/i18n";
import { BrandedTitle } from "~/lib/meta";

interface InputProps extends VoidProps {
  type: "text" | "password";
  placeholder: string;
  value?: string;
  onInput?: JSX.EventHandlerUnion<HTMLInputElement, InputEvent>;
}

function Input(props: InputProps): JSXElement {
  return (
    <input
      class="rounded-lg bg-ctp-base px-4 py-2 text-ctp-text caret-ctp-blue outline-none placeholder:text-ctp-subtext0"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      // eslint-disable-next-line solid/reactivity
      onInput={props.onInput}
    />
  );
}

export default function Login(): JSXElement {
  const t = useT();
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  let form!: HTMLFormElement;

  onMount(() => {
    form.reset();
  });

  return (
    <>
      <BrandedTitle page={t("sign-in.title")} />

      <main class="flex grow flex-col items-center justify-center self-center">
        <form
          class="flex flex-col items-center gap-4 rounded-2xl bg-ctp-mantle p-6"
          ref={form}
          onSubmit={(e) => {
            // postAuthorize()
            alert(`The password of '${username()}' is '${password()}'.`);
            e.preventDefault();
          }}
        >
          <Input
            type="text"
            placeholder={t("sign-in.username")}
            value={username()}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              setUsername(target.value);
            }}
          />

          <Input
            type="password"
            placeholder={t("sign-in.password")}
            value={password()}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              setPassword(target.value);
            }}
          />

          <Button class="w-full" type="submit" text={t("sign-in.log-in")} />
        </form>
      </main>
    </>
  );
}
