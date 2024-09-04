// https://github.com/TanStack/query/blob/main/examples/solid/solid-start-streaming/src/components/query-boundary.tsx

import { type CreateQueryResult } from "@tanstack/solid-query";
import {
  ErrorBoundary,
  Match,
  Suspense,
  Switch,
  type JSXElement,
} from "solid-js";

export interface QueryBoundaryProps<T = unknown> {
  query: CreateQueryResult<T>;

  /**
   * Triggered when the data is initially loading.
   */
  loadingFallback?: JSXElement;

  /**
   * Triggered when fetching is complete, but the returned data was falsey.
   */
  notFoundFallback?: JSXElement;

  /**
   * Triggered when the query results in an error.
   */
  errorFallback?: (err: Error, retry: () => Promise<void>) => JSXElement;

  /**
   * Triggered when fetching is complete, and the returned data is not falsey.
   */
  children: (data: Exclude<T, null | false | undefined>) => JSXElement;
}

/**
 * Convenience wrapper that handles suspense and errors for queries. Makes the results of query.data available to
 * children (as a render prop) in a type-safe way.
 */
export function QueryBoundary<T>(props: QueryBoundaryProps<T>): JSXElement {
  return (
    <Suspense fallback={props.loadingFallback}>
      <ErrorBoundary
        fallback={(err: Error, reset) =>
          props.errorFallback ? (
            // eslint-disable-next-line solid/reactivity
            props.errorFallback(err, async () => {
              await props.query.refetch();
              reset();
            })
          ) : (
            <div>
              <div class="mt-4 text-ctp-red">{err.message}</div>
              <button
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={async () => {
                  await props.query.refetch();
                  reset();
                }}
              >
                retry
              </button>
            </div>
          )
        }
      >
        <Switch>
          <Match when={!props.query.isFetching && !props.query.data}>
            {props.notFoundFallback ? (
              props.notFoundFallback
            ) : (
              <div>not found</div>
            )}
          </Match>

          <Match when={props.query.data}>
            {props.children(
              props.query.data as Exclude<T, null | false | undefined>,
            )}
          </Match>
        </Switch>
      </ErrorBoundary>
    </Suspense>
  );
}
