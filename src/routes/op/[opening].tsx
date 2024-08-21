import { useParams } from "@solidjs/router";
import { BrandedTitle } from "~/lib/meta";

export default function Opening() {
  const params = useParams();

  const op = params.opening;

  return (
    <>
      <BrandedTitle page={op} />

      <iframe
        title={op}
        class="aspect-video h-96"
        src="https://www.youtube.com/embed/ly36kn0ug4k"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </>
  );
}
