import { type JSXElement } from "solid-js";
import { BrandedTitle } from "~/lib/meta";

export default function Error(): JSXElement {
  return (
    <>
      {/* TODO: i18n */}
      <BrandedTitle page="Error" />

      {/* TODO: i18n */}
      <main>Something went wrong…</main>
    </>
  );
}
