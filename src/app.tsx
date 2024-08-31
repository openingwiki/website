import "@fontsource-variable/wix-madefor-text";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import { Suspense, type JSXElement } from "solid-js";
import Default from "~/layouts/default";
import { I18nProvider } from "~/lib/i18n";
import "./app.css";

export default function App(): JSXElement {
  return (
    <Suspense>
      <I18nProvider>
        <QueryClientProvider client={new QueryClient()}>
          <MetaProvider>
            {/* TODO */}
            <Router root={Default}>
              <FileRoutes />
            </Router>
          </MetaProvider>

          <SolidQueryDevtools />
        </QueryClientProvider>
      </I18nProvider>
    </Suspense>
  );
}
