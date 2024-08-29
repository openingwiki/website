import { cache, createAsync, type RouteDefinition } from "@solidjs/router";
import { For, Match, Switch, type JSXElement } from "solid-js";
import Heading from "~/components/heading";
import OpeningCard from "~/components/opening-card";
import { getOpenings } from "~/lib/api/routes/openings";
import { useT } from "~/lib/i18n";

const preloadOpenings = cache(async (limit: number, offset: number) => {
  return await getOpenings(limit, offset);
}, "openings");

export const route: RouteDefinition = {
  preload: () => preloadOpenings(20, 0),
};

export default function Home(): JSXElement {
  const t = useT();

  const openings = createAsync(() => preloadOpenings(20, 0));

  return (
    <Switch>
      <Match when={openings()}>
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
      </Match>
    </Switch>
  );
}
