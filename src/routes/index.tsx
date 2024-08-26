import { cache, createAsync, type RouteDefinition } from "@solidjs/router";
import { For, Show, type JSXElement } from "solid-js";
import Header from "~/components/Header";
import Heading from "~/components/Heading";
import OpeningCard from "~/components/OpeningCard";
import { getOpenings } from "~/lib/api/routes/openings";
import { useT } from "~/lib/i18n";

const loadOpenings = cache(async () => {
  return await getOpenings(20, 0);
}, "openings");

export const route = {
  load: () => loadOpenings(),
} satisfies RouteDefinition;

export default function Home(): JSXElement {
  const t = useT();
  const openings = createAsync(() => loadOpenings());

  const error = () => openings() === undefined;
  return (
    <Show
      when={error()}
      fallback={
        <>
          <div class="sticky top-0 z-10">
            <Header />
          </div>

          <main class="flex flex-col p-6">
            <section class="flex flex-col gap-8">
              <Heading text={t("home.all-openings")} level={2} />
              <ul class="flex flex-row gap-6">
                <For each={openings()}>
                  {(item) => (
                    <li>
                      <OpeningCard
                        codename={item.codename}
                        name={item.name}
                        animeName={item.animeName}
                        thumbnailLink={item.thumbnailLink}
                      />
                    </li>
                  )}
                </For>
              </ul>
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
