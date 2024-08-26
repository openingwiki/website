import { TransProvider, useTransContext } from "@mbarzda/solid-i18next";
import { type JSXElement, type ParentProps } from "solid-js";
import resources from "../../locales";

export const DEFAULT_LOCALE = "en-US";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultLocale = resources[DEFAULT_LOCALE].translation;

// https://stackoverflow.com/a/58436959/16464166
type Leaves<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never ? "" : `.${Leaves<T[K]>}`}`;
    }[keyof T]
  : never;

type Key = Leaves<typeof defaultLocale>;

export function I18n(props: ParentProps): JSXElement {
  return (
    <TransProvider lng={DEFAULT_LOCALE} options={{ resources }}>
      {props.children}
    </TransProvider>
  );
}

export function useT(): (
  key: Key,
  options?: Record<string, unknown>,
) => string {
  const [t] = useTransContext();
  return (key, options) => t(key, options);
}
