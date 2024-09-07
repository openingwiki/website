import { onMount, type JSX, type JSXElement, type VoidProps } from "solid-js";
import { createStore } from "solid-js/store";
import Button from "~/components/button";
import { postRegister } from "~/lib/api/routes/(auth)/register";
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

type Credentials = {
  username: string;
  password: string;
};

export default function Login(): JSXElement {
  const t = useT();

  const [credentials, setCredentials] = createStore<Credentials>({
    username: "",
    password: "",
  });

  let form!: HTMLFormElement;

  const updateField = (field: keyof Credentials) => (ev: InputEvent) => {
    const inputElement = ev.currentTarget as HTMLTextAreaElement;
    setCredentials({ [field]: inputElement.value });
  };

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
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={async (ev) => {
            ev.preventDefault();
            try {
              const accessToken = await postRegister(
                credentials.username,
                credentials.password,
              );
              alert(`Success! Token: '${accessToken.token}'.`);
               
            } catch (_err) {
              alert(_err);
            }
          }}
        >
          <Input
            type="text"
            placeholder={t("sign-in.username")}
            value={credentials.username}
            onInput={updateField("username")}
          />

          <Input
            type="password"
            placeholder={t("sign-in.password")}
            value={credentials.password}
            onInput={updateField("password")}
          />

          <Button class="w-full" type="submit" text={t("sign-in.log-in")} />
        </form>
      </main>
    </>
  );
}
