import { type JSXElement, type ParentProps } from "solid-js";
import Header from "~/components/header";

export default function Default(props: ParentProps): JSXElement {
  return (
    <>
      {/* <BrandedTitle /> */}

      <Header />

      {props.children}
      {/* <main class="flex flex-col gap-12 p-6"></main> */}
    </>
  );
}
