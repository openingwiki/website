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

  return (
    <article class="group flex w-64 flex-col gap-2 rounded-2xl text-center transition-all hover:scale-105 hover:bg-ctp-surface0 hover:shadow">
      <img
        class="aspect-square rounded-2xl"
        src={props.thumbnailLink.toString()}
        alt={t("opening-card.thumbnail", { of: props.animeName })}
      />
      <div class="flex flex-col gap-1 px-4 pb-4">
        <h1 class="text-lg font-medium text-ctp-green group-hover:font-semibold">
          {props.name}
        </h1>

        <div class="hidden flex-col gap-4 group-hover:flex">
          <span>{props.animeName}</span>
          <Button
            text={t("opening-card.more")}
            onClick={() => {
              navigate(`/op/${props.codename}`);
            }}
          />
        </div>
      </div>
    </article>
  );
}
