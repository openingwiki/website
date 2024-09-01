import {
  Match,
  mergeProps,
  Switch,
  type JSXElement,
  type VoidProps,
} from "solid-js";
import { twMerge } from "tailwind-merge";

interface HeadingProps extends VoidProps {
  class?: string;
  text: string;
  level?: number;
}

export default function Heading(props: HeadingProps): JSXElement {
  const merged = mergeProps({ level: 1 }, props);

  return (
    <Switch>
      <Match when={merged.level === 2}>
        <h2 class={twMerge("text-6xl font-bold", props.class)}>{props.text}</h2>
      </Match>
    </Switch>
  );
}
