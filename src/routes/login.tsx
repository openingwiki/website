import { type JSXElement } from "solid-js";
import { BrandedTitle } from "~/lib/meta";

export default function Login(): JSXElement {
  return (
    <>
      <BrandedTitle
        // TODO: add i18n
        page="Sign in"
      />
      <main>Hello</main>
    </>
  );
}
