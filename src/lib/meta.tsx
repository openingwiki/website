import { Title } from "@solidjs/meta";
import { type JSXElement, Show, type VoidProps } from "solid-js";
import { useT } from "~/lib/i18n";

interface BrandedTitleProps {
  page?: string;
}

export function BrandedTitle(props: VoidProps<BrandedTitleProps>): JSXElement {
  const t = useT();

  return (
    <Title>
      <Show when={props.page !== undefined} fallback={t("app-name")}>
        {t("title", { page: props.page })}
      </Show>
    </Title>
  );
}
