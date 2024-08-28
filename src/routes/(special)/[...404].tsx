import { type JSXElement } from "solid-js";
import { useT } from "~/lib/i18n";

export default function NotFound(): JSXElement {
  const t = useT();
  return <p>{t("error.message")}</p>;
}
