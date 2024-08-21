import { Trans, useTransContext } from "@mbarzda/solid-i18next";

export interface OpeningCardProps {
  name: string;
  animeName: string;
  sourceLink: URL;
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
          <button class="w-full rounded-lg border-2 border-solid border-color-blue text-color-blue transition hover:bg-color-blue/25 hover:font-medium active:bg-color-blue active:font-medium active:text-color-light">
            <Trans key="more" />
          </button>
        </div>
      </div>
    </article>
  );
}
