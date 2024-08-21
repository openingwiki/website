import { Trans } from "@mbarzda/solid-i18next";
import { For } from "solid-js";
import Heading from "~/components/Heading";
import type { OpeningCardProps } from "~/components/OpeningCard";
import OpeningCard from "~/components/OpeningCard";

function retrieve(): OpeningCardProps[] {
  return [
    {
      name: "Great Days",
      animeName: "JoJo's Bizarre Adventure: Diamond is Unbreakable",
      sourceLink: new URL("https://google.com"),
      thumbnailLink: new URL(
        "https://static.wikia.nocookie.net/jjba/images/8/8a/JoJo_OP7.png/revision/latest?cb=20161018200049",
      ),
    },
    {
      name: "Unravel",
      animeName: "Tokyo Ghoul",
      sourceLink: new URL("https://google.com"),
      thumbnailLink: new URL("https://google.com"),
    },
  ];
}

export default function Home() {
  return (
    <main>
      <section class="flex flex-col gap-4">
        <Heading level={2}>
          <Trans key="best-of-all-time" />
        </Heading>

        <ul class="flex flex-row gap-4">
          <For each={retrieve()}>
            {(item) => (
              <li>
                <OpeningCard
                  name={item.name}
                  animeName={item.animeName}
                  sourceLink={item.sourceLink}
                  thumbnailLink={item.thumbnailLink}
                />
              </li>
            )}
          </For>
        </ul>
      </section>
    </main>
  );
}
