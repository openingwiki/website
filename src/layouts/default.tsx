import { type JSXElement, type ParentProps } from "solid-js";
import Header from "~/components/header";

export default function Default(props: ParentProps): JSXElement {
  return (
    <>
      <Header />

      {props.children}
    </>
  );
}
