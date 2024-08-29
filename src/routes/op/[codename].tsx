/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
  cache,
  createAsync,
  Navigate,
  useParams,
  type RouteDefinition,
} from "@solidjs/router";
import { Match, Show, Switch, type JSXElement } from "solid-js";
import { getOpening } from "~/lib/api/routes/openings";
import { useT } from "~/lib/i18n";
import { BrandedTitle } from "~/lib/meta";

const proloadOpening = cache(async (codename: string) => {
  "use server";
  return await getOpening(codename);
}, "opening");

export const route: RouteDefinition = {
  preload: ({ params }) => proloadOpening(params.codename),
};

export default function Opening(): JSXElement {
  const params = useParams();
  const t = useT();

  const opening = createAsync(() => proloadOpening(params.codename));

  return (
    <Switch>
      <Match when={opening() !== undefined}>
        <Show when={params.codename !== opening()!.codename}>
          <Navigate href={`/op/${opening()!.codename}`} />
        </Show>

        <BrandedTitle page={opening()!.name} />

        <iframe
          class="aspect-video w-240 self-center rounded-xl shadow-lg"
          title={opening()!.name}
          src={opening()!.youtubeEmbedLink.toString()}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />

        <section class="flex flex-row items-center gap-4 self-center">
          <img
            class="aspect-square size-32 rounded-lg"
            src={opening()!.thumbnailLink.toString()}
            alt={t("opening-card.thumbnail", { of: opening()!.name })}
          />
          <div class="flex flex-col gap-2">
            <h2 class="text-3xl font-semibold text-ctp-green">
              {opening()!.name}
            </h2>
            <span class="text-ctp-subtext0">{opening()!.animeName}</span>
          </div>
        </section>
      </Match>
    </Switch>
  );
}
