import { useNavigate } from "@solidjs/router";
import { onMount, type JSXElement } from "solid-js";
import { createStore } from "solid-js/store";
import Button from "~/components/button";
import Input from "~/components/input";
import { postAuthorize } from "~/lib/api/routes/(auth)/auth";
import { useT } from "~/lib/i18n";
import { BrandedTitle } from "~/lib/meta";
import { updateToken } from "~/lib/session";

type Credentials = {
  username: string;
  password: string;
};

export default function Login(): JSXElement {
  const navigate = useNavigate();
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
      <BrandedTitle page={t("login.title")} />

      <main class="flex grow flex-col items-center justify-center gap-4 self-center">
        <form
          class="flex w-72 flex-col items-center gap-4 rounded-2xl bg-ctp-mantle p-6"
          ref={form}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={async (ev) => {
            ev.preventDefault();
            try {
              const accessToken = await postAuthorize(
                credentials.username,
                credentials.password,
              );
              localStorage.setItem("token", accessToken.token);
              updateToken();
              navigate("/");
            } catch (_err) {
              alert(_err);
            }
          }}
        >
          <Input
            type="text"
            placeholder={t("login.form.username")}
            value={credentials.username}
            onInput={updateField("username")}
          />
          <Input
            type="password"
            placeholder={t("login.form.password")}
            value={credentials.password}
            onInput={updateField("password")}
          />
          <Button class="w-full" type="submit" text={t("login.form.button")} />
        </form>

        <div class="flex w-72 flex-col items-center gap-2 px-6">
          <span>{t("login.create-account.message")}</span>
          <Button
            class="w-full"
            onClick={() => {
              navigate("/register");
            }}
            text={t("login.create-account.button")}
          />
        </div>
      </main>
    </>
  );
}
