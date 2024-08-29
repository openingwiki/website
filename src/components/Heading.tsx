import { Match, Switch, type JSXElement, type VoidProps } from "solid-js";
import { twMerge } from "tailwind-merge";

interface HeadingProps extends VoidProps {
  class?: string;
  text: string;
  level?: number;
}

export default function Heading(props: HeadingProps): JSXElement {
  const level = () => props.level ?? 1;

  return (
    <Switch>
      <Match when={level() === 2}>
        <h2 class={twMerge("text-6xl font-bold", props.class)}>{props.text}</h2>
      </Match>
    </Switch>
  );
}
