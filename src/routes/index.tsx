import { Trans } from "@mbarzda/solid-i18next";
import { For } from "solid-js";
import Heading from "~/components/Heading";
import OpeningCard from "~/components/OpeningCard";

function retrieve() {
  return [
    {
      id: "Great_Days",
      name: "Great Days",
      animeName: "JoJo's Bizarre Adventure: Diamond is Unbreakable",
      youtubeEmbedLink: new URL("https://www.youtube.com/embed/mU3vgXUKeFM"),
      thumbnailLink: new URL(
        "https://static.jojowiki.com/images/8/8a/latest/20210831055754/JoJo_OP7.png",
      ),
    },
    {
      id: "Unravel",
      name: "Unravel",
      animeName: "Tokyo Ghoul",
      youtubeEmbedLink: new URL("https://www.youtube.com/embed/7aMOurgDB-o"),
      thumbnailLink: new URL(
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79479f19016951.562d38d2394d3.png",
      ),
    },
  ];
}

export default function Home() {
  return (
    <>
      <main>
        <section class="flex flex-col gap-4">
          <Heading level={2}>
            <Trans key="best-of-all-time" />
          </Heading>

          <ul class="flex flex-row gap-6">
            <For each={retrieve()}>
              {(item) => (
                <li>
                  <OpeningCard
                    name={item.name}
                    animeName={item.animeName}
                    youtubeEmbedLink={item.youtubeEmbedLink}
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
