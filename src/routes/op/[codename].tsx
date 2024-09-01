import { Navigate, useParams, type RouteDefinition } from "@solidjs/router";
import { createQuery, useQueryClient } from "@tanstack/solid-query";
import { Show, type JSXElement } from "solid-js";
import { QueryBoundary } from "~/components/query-boundary";
import { getOpening } from "~/lib/api/routes/openings/[codename]";
import { useT } from "~/lib/i18n";
import { BrandedTitle } from "~/lib/meta";

export const route: RouteDefinition = {
  preload: async ({ params }) => {
    "use server";

    const codename = params.codename.toLowerCase();

    const queryClient = useQueryClient();
    await queryClient.prefetchQuery({
      queryKey: ["opening", codename],
      queryFn: () => getOpening(codename),
    });

    // TODO
  },
};

export default function Opening(): JSXElement {
  const params = useParams();
  const t = useT();

  const codename = params.codename.toLowerCase();

  const query = createQuery(() => ({
    queryKey: ["opening", codename],
    queryFn: () => getOpening(codename),
  }));

  return (
    <QueryBoundary
      query={query}
      errorFallback={() =>
        // TODO
        t("error.message")
      }
    >
      {(opening) => (
        <>
          <Show when={params.codename !== opening.codename}>
            <Navigate href={`../${opening.codename}`} />
          </Show>

          <BrandedTitle page={opening.name} />

          <iframe
            class="aspect-video w-240 self-center rounded-xl shadow-lg"
            title={opening.name}
            src={opening.youtubeEmbedLink.toString()}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />

          <section class="flex flex-row items-center gap-4 self-center">
            <img
              class="aspect-square size-32 rounded-lg"
              src={opening.thumbnailLink.toString()}
              alt={t("opening-card.thumbnail", { of: opening.name })}
            />
            <div class="flex flex-col gap-2">
              <h2 class="text-3xl font-semibold text-ctp-green">
                {opening.name}
              </h2>
              <span class="text-ctp-subtext0">{opening.animeName}</span>
            </div>
          </section>
        </>
      )}
    </QueryBoundary>
  );
}
