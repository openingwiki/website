import { useNavigate } from "@solidjs/router";
import { type JSXElement, type VoidProps } from "solid-js";
import Button from "~/components/button";
import { useT } from "~/lib/i18n";

interface OpeningCardProps extends VoidProps {
  codename: string;
  name: string;
  animeName: string;
  thumbnailLink: URL;
}

export default function OpeningCard(props: OpeningCardProps): JSXElement {
  const navigate = useNavigate();
  const t = useT();

  const openOpening = () => {
    navigate(`/op/${props.codename}`);
  };

  return (
    <article class="group relative flex w-64 flex-col gap-2 rounded-t-2xl text-center transition hover:z-10 hover:scale-105 hover:bg-ctp-surface0/95 hover:shadow hover:backdrop-blur-sm">
      <button class="aspect-square" onClick={openOpening}>
        <img
          class="size-full rounded-2xl"
          src={props.thumbnailLink.toString()}
          alt={t("opening-card.thumbnail", { of: props.animeName })}
        />
      </button>
      <div class="pointer-events-none absolute top-full flex w-full flex-col gap-1 self-center rounded-b-2xl px-4 pb-4 pt-2 transition group-hover:pointer-events-auto group-hover:bg-ctp-surface0/95 group-hover:backdrop-blur-sm">
        <h1 class="pointer-events-auto text-lg font-medium text-ctp-green group-hover:font-semibold">
          {props.name}
        </h1>

        <div class="flex flex-col gap-4 opacity-0 group-hover:opacity-100">
          <span>{props.animeName}</span>
          <Button text={t("opening-card.more")} onClick={openOpening} />
        </div>
      </div>
    </article>
  );
}
