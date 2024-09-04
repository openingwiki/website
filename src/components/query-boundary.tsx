import { type CreateQueryResult } from "@tanstack/solid-query";
import {
  ErrorBoundary,
  Match,
  Switch,
  type JSXElement,
  type VoidProps,
} from "solid-js";

interface QueryBoundaryProps<T> extends VoidProps {
  query: CreateQueryResult<T>;
  show: (data: T) => JSXElement;
  pending: JSXElement;
  fallback: (err: Error | null) => JSXElement;
}

export default function QueryBoundary<T>(
  props: QueryBoundaryProps<T>,
): JSXElement {
  return (
    <ErrorBoundary fallback={(err: Error) => props.fallback(err)}>
      <Switch>
        <Match when={props.query.data === undefined && props.query.isError}>
          {props.fallback(props.query.error)}
        </Match>
        <Match when={props.query.data === undefined && props.query.isPending}>
          {props.pending}
        </Match>
        <Match when={props.query.isSuccess}>
          {props.show(props.query.data as T)}
        </Match>
      </Switch>
    </ErrorBoundary>
  );
}
