import { useTransContext } from "@mbarzda/solid-i18next";
import { cache, createAsync, Params, useParams } from "@solidjs/router";
import { useApiOpening } from "~/lib/api";
import { BrandedTitle } from "~/lib/meta";

const getOpening = cache(async (codename: string) => {
  "use server";
  return await useApiOpening(codename);
}, "opening");

export const route = {
  load: (params: Params) => getOpening(params.codename),
};

export default function Opening() {
  const params = useParams();
  const opening = createAsync(() => getOpening(params.codename));
  const [t] = useTransContext();

  return (
    <>
      <BrandedTitle page={opening()?.name} />

      <main class="flex flex-col items-center gap-8 p-12">
        <iframe
          title={opening()?.name}
          class="aspect-video w-240 rounded-xl shadow-lg"
          src={opening()?.youtubeEmbedLink.toString()}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />

        <section class="flex flex-row items-center gap-4">
          <img
            class="aspect-square size-32 rounded-lg"
            src={opening()?.thumbnailLink.toString()}
            alt={t("thumbnail", { of: opening()?.name })}
          />
          <div class="flex flex-col gap-2">
            <h2 class="text-3xl font-semibold text-color-green">
              {opening()?.name}
            </h2>
            <span class="text-color-subtext-0">{opening()?.animeName}</span>
          </div>
        </section>
      </main>
    </>
  );
}
