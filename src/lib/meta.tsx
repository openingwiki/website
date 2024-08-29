import { Title } from "@solidjs/meta";
import { type JSXElement, Show, type VoidProps } from "solid-js";
import { useT } from "~/lib/i18n";

interface BrandedTitleProps extends VoidProps {
  page?: string;
}

export function BrandedTitle(props: BrandedTitleProps): JSXElement {
  const t = useT();

  return (
    <Title>
      <Show when={props.page !== undefined} fallback={t("app-name")}>
        {t("util.title", { page: props.page })}
      </Show>
    </Title>
  );
}
