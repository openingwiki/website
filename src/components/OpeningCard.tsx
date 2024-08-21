export interface OpeningCardProps {
  name: string;
  animeName: string;
  sourceLink: URL;
  thumbnailLink: URL;
}

export default function OpeningCard(props: OpeningCardProps) {
  return (
    <article class="flex w-64 flex-col rounded-2xl bg-color-surface-0">
      <img
        src={props.thumbnailLink.toString()}
        alt={`Thumbnail of ${props.animeName}`}
        class="aspect-square rounded-2xl"
      />
      <div class="flex flex-col gap-4 p-4 text-center">
        <h1 class="font-medium text-color-green">{props.name}</h1>
        <span>{props.animeName}</span>
        <button class="w-full rounded-lg border-2 border-solid border-color-blue text-color-blue hover:bg-color-blue hover:text-color-light">
          More
        </button>
      </div>
    </article>
  );
}
