import { useTransContext } from "@mbarzda/solid-i18next";
import { Title } from "@solidjs/meta";
import { JSX, Show, type VoidProps } from "solid-js";

export interface BrandedTitleProps {
  page?: string;
}

export function BrandedTitle(props: VoidProps<BrandedTitleProps>): JSX.Element {
  const [t] = useTransContext();

  return (
    <Title>
      <Show when={props.page !== undefined} fallback={t("app-name")}>
        {t("title", { page: props.page })}
      </Show>
    </Title>
  );
}
