import { createQuery } from "@tanstack/solid-query";
import { For, type JSXElement } from "solid-js";
import Heading from "~/components/heading";
import OpeningCard from "~/components/opening-card";
import { QueryBoundary } from "~/components/query-boundary";
import { getOpenings } from "~/lib/api/routes/(openings)/openings/(openings)";
import { useT } from "~/lib/i18n";
import { BrandedTitle } from "~/lib/meta";

export default function Home(): JSXElement {
  const t = useT();

  const openingsQuery = createQuery(() => getOpenings(20, 0));

  return (
    <>
      <BrandedTitle />

      <QueryBoundary
        query={openingsQuery}
        errorFallback={() => (
          <main>
            {
              // TODO: add something
              t("error.message")
            }
          </main>
        )}
      >
        {(openings) => (
          <main class="flex flex-col gap-20 p-6">
            <For each={[undefined, undefined]}>
              {() => (
                <section class="flex flex-col gap-8">
                  <Heading text={t("home.all-openings")} level={2} />
                  {
                    // FIXME: add overflow
                  }
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
          </main>
        )}
      </QueryBoundary>
    </>
  );
}
