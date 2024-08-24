import { cache, createAsync, type RouteDefinition } from "@solidjs/router";
import { For, Show, type JSXElement } from "solid-js";
import Heading from "~/components/Heading";
import OpeningCard from "~/components/OpeningCard";
import { getOpenings } from "~/lib/api/routes/openings";
import { T } from "~/lib/i18n";

const loadOpenings = cache(async () => {
  return await getOpenings(20, 0);
}, "openings");

export const route = {
  load: () => loadOpenings(),
} satisfies RouteDefinition;

export default function Home(): JSXElement {
  const openings = createAsync(() => loadOpenings());

  const error = () => openings() === undefined;
  return (
    <Show
      when={error()}
      fallback={
        <>
          <main class="flex flex-col p-6">
            <section class="flex flex-col gap-8">
              <Heading level={2}>
                <T key="home.best-of-all-time" />
              </Heading>
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
