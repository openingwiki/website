import { type JSX, type JSXElement, type VoidProps } from "solid-js";

interface InputProps extends VoidProps {
  type: "text" | "password";
  placeholder: string;
  value?: string;
  onInput?: JSX.EventHandlerUnion<HTMLInputElement, InputEvent>;
}

export default function Input(props: InputProps): JSXElement {
  return (
    <input
      class="w-full rounded-lg bg-ctp-base px-4 py-2 text-ctp-text caret-ctp-blue outline-none placeholder:text-ctp-subtext0"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      // eslint-disable-next-line solid/reactivity
      onInput={props.onInput}
    />
  );
}
