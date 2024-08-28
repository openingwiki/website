import { type JSXElement, type ParentProps } from "solid-js";
import Header from "~/components/Header";

export default function Default(props: ParentProps): JSXElement {
  return (
    <>
      <div class="sticky top-0 z-10">
        <Header />
      </div>

      <main class="flex flex-col gap-12 p-6">{props.children}</main>
    </>
  );
}
