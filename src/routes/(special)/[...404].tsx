import { type JSXElement } from "solid-js";
import { T } from "~/lib/i18n";

export default function NotFound(): JSXElement {
  return (
    <main>
      <T key="error.message" />
    </main>
  );
}
