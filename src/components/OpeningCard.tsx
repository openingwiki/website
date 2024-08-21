import { Trans, useTransContext } from "@mbarzda/solid-i18next";
import { A } from "@solidjs/router";

export interface OpeningCardProps {
  codename: string;
  name: string;
  animeName: string;
  thumbnailLink: URL;
}

export default function OpeningCard(props: OpeningCardProps) {
  const [t] = useTransContext();

  return (
    <article class="group flex w-64 flex-col gap-2 rounded-2xl text-center transition-all hover:scale-105 hover:bg-color-surface-0">
      <img
        src={props.thumbnailLink.toString()}
        alt={t("thumbnail", { of: props.animeName })}
        class="aspect-square rounded-2xl"
      />
      <div class="flex flex-col px-4 pb-4">
        <h1 class="font-medium text-color-green">{props.name}</h1>
        <div class="hidden flex-col gap-3 group-hover:flex">
          <span>{props.animeName}</span>
          <A
            href={`/op/${props.codename}`}
            class="w-full rounded-lg border-2 border-solid border-color-blue text-color-blue transition hover:bg-color-blue/25 hover:font-medium active:bg-color-blue active:font-medium active:text-color-light"
          >
            <Trans key="more" />
          </A>
        </div>
      </div>
    </article>
  );
}
