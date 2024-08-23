import { Trans } from "@mbarzda/solid-i18next";
import { cache, createAsync, RouteDefinition } from "@solidjs/router";
import { For, type JSXElement } from "solid-js";
import Heading from "~/components/Heading";
import OpeningCard from "~/components/OpeningCard";
import { useApiOpenings } from "~/lib/api";

const getOpenings = cache(async () => {
  "use server";
  return await useApiOpenings(2);
}, "openings");

export const route = {
  load: () => getOpenings(),
} satisfies RouteDefinition;

export default function Home(): JSXElement {
  const openings = createAsync(() => getOpenings());

  return (
    <>
      <main class="flex flex-col p-6">
        <section class="flex flex-col gap-8">
          <Heading level={2}>
            <Trans key="best-of-all-time" />
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
  );
}
