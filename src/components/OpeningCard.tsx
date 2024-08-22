import { Trans, useTransContext } from "@mbarzda/solid-i18next";
import { useNavigate } from "@solidjs/router";

export interface OpeningCardProps {
  codename: string;
  name: string;
  animeName: string;
  thumbnailLink: URL;
}

export default function OpeningCard(props: OpeningCardProps) {
  const navigate = useNavigate();
  const [t] = useTransContext();

  return (
    <article class="group flex w-64 flex-col gap-2 rounded-2xl text-center transition-all hover:scale-105 hover:bg-color-surface-0 hover:shadow">
      <img
        class="aspect-square rounded-2xl"
        src={props.thumbnailLink.toString()}
        alt={t("thumbnail", { of: props.animeName })}
      />
      <div class="flex flex-col gap-1 px-4 pb-4">
        <h1 class="text-lg font-medium text-color-green group-hover:font-semibold">
          {props.name}
        </h1>

        <div class="hidden flex-col gap-4 group-hover:flex">
          <span>{props.animeName}</span>
          <button
            class="w-full rounded-lg border-2 border-solid border-color-blue text-color-blue transition hover:bg-color-blue/25 hover:font-medium active:bg-color-blue active:font-medium active:text-color-light"
            onClick={() => {
              navigate(`/op/${props.codename}`);
            }}
          >
            <Trans key="more" />
          </button>
        </div>
      </div>
    </article>
  );
}
