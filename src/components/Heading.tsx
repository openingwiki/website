import { Match, Switch, type ParentComponent } from "solid-js";
import { twMerge } from "tailwind-merge";

interface Props {
  class?: string;
  level?: number;
}

const Heading: ParentComponent<Props> = (props) => {
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
};

export default Heading;
