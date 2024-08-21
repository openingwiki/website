export interface OpeningCardProps {
  name: string;
  animeName: string;
  sourceLink: URL;
  thumbnailLink: URL;
}

export default function OpeningCard(props: OpeningCardProps) {
  return (
    <article class="flex flex-col bg-color-surface-0">
      <img
        src={props.thumbnailLink.toString()}
        alt={`Thumbnail of ${props.animeName}`}
      />
      <h1>{props.name}</h1>
      <h1>{props.animeName}</h1>
      <button>More</button>
    </article>
  );
}
