import { createQuery } from "@tanstack/solid-query";
import { For, type JSXElement } from "solid-js";
import Heading from "~/components/heading";
import OpeningCard from "~/components/opening-card";
import { QueryBoundary } from "~/components/query-boundary";
import { getOpenings } from "~/lib/api/routes/openings";
import { useT } from "~/lib/i18n";

export default function Home(): JSXElement {
  const t = useT();

  const openingsQuery = createQuery(() => getOpenings(20, 0));

  return (
    <QueryBoundary
      query={openingsQuery}
      errorFallback={() =>
        // TODO
        t("error.message")
      }
    >
      {(openings) => (
        <div class="flex flex-col gap-20">
          <For each={[undefined, undefined]}>
            {() => (
              <section class="flex flex-col gap-8">
                <Heading text={t("home.all-openings")} level={2} />
                <ul class="flex flex-row gap-6">
                  <For each={openings}>
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
            )}
          </For>
        </div>
      )}
    </QueryBoundary>
  );
}
