/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
  cache,
  createAsync,
  Navigate,
  useParams,
  type RouteDefinition,
} from "@solidjs/router";
import { Show, type JSXElement } from "solid-js";
import { getOpening } from "~/lib/api/routes/openings";
import { useT } from "~/lib/i18n";
import { BrandedTitle } from "~/lib/meta";

const loadOpening = cache(async (codename: string) => {
  "use server";
  return await getOpening(codename);
}, "opening");

export const route = {
  load: ({ params }) => loadOpening(params.codename),
} satisfies RouteDefinition;

export default function Opening(): JSXElement {
  const params = useParams();
  const opening = createAsync(() => loadOpening(params.codename));
  const t = useT();

  const error = () => opening() === undefined;
  return (
    <Show
      when={error()}
      fallback={
        <>
          <Show when={params.codename !== opening()!.codename}>
            <Navigate href={`/op/${opening()!.codename}`} />
          </Show>

          <BrandedTitle page={opening()!.name} />

          <main class="flex flex-col items-center gap-8 p-12">
            <iframe
              title={opening()!.name}
              class="aspect-video w-240 rounded-xl shadow-lg"
              src={opening()!.youtubeEmbedLink.toString()}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />

            <section class="flex flex-row items-center gap-4">
              <img
                class="aspect-square size-32 rounded-lg"
                src={opening()!.thumbnailLink.toString()}
                alt={t("thumbnail", { of: opening()!.name })}
              />
              <div class="flex flex-col gap-2">
                <h2 class="text-3xl font-semibold text-color-green">
                  {opening()!.name}
                </h2>
                <span class="text-color-subtext-0">{opening()!.animeName}</span>
              </div>
            </section>
          </main>
        </>
      }
    >
      {/* TODO */}
      {"…"}
    </Show>
  );
}
