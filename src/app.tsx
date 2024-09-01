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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // 15 minutes
        staleTime: 1000 * 60 * 15,
      },
    },
  });

  return (
    <Suspense>
      <I18nProvider>
        <QueryClientProvider client={queryClient}>
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
