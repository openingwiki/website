import { JSX, Match, Switch, type ParentProps } from "solid-js";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  class?: string;
  level?: number;
}

export default function Heading(props: ParentProps<HeadingProps>): JSX.Element {
  const level = () => props.level ?? 1;

  return (
    <Switch>
      <Match when={level() === 2}>
        <h2 class={twMerge("text-6xl font-bold", props.class)}>
          {props.children}
        </h2>
      </Match>
    </Switch>
  );
}
