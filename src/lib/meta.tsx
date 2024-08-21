import { useTransContext } from "@mbarzda/solid-i18next";
import { Title } from "@solidjs/meta";
import { Show } from "solid-js";

export interface BrandedTitleProps {
  page?: string;
}

export function BrandedTitle(props: BrandedTitleProps) {
  const [t] = useTransContext();

  return (
    <Title>
      <Show when={props.page !== undefined} fallback={t("app-name")}>
        {t("title", { page: props.page })}
      </Show>
    </Title>
  );
}
