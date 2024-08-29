import { Suspense, type JSXElement, type ParentProps } from "solid-js";
import Header from "~/components/header";
import { BrandedTitle } from "~/lib/meta";

export default function Default(props: ParentProps): JSXElement {
  return (
    <>
      <BrandedTitle />

      <div class="sticky top-0 z-10">
        <Header />
      </div>

      {/* TODO */}
      <Suspense fallback={"Loading.."}>
        <main class="flex flex-col gap-12 p-6">{props.children}</main>
      </Suspense>
    </>
  );
}
