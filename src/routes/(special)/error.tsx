import { type JSXElement } from "solid-js";
import { useT } from "~/lib/i18n";
import { BrandedTitle } from "~/lib/meta";

export default function Error(): JSXElement {
  const t = useT();

  return (
    <>
      <BrandedTitle page={t("error.title")} />

      <p>{t("error.message")}</p>
    </>
  );
}
