import "@fontsource-variable/wix-madefor-text";
import { TransProvider } from "@mbarzda/solid-i18next";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type JSXElement, Suspense } from "solid-js";
import { BrandedTitle } from "~/lib/meta";
import resources from "../locales";
import "./app.css";

export default function App(): JSXElement {
  const DEFAULT_LANGUAGE: string = "en-US";

  return (
    <TransProvider lng={DEFAULT_LANGUAGE} options={{ resources }}>
      <MetaProvider>
        <BrandedTitle />
        <Router root={(props) => <Suspense>{props.children}</Suspense>}>
          <FileRoutes />
        </Router>
      </MetaProvider>
    </TransProvider>
  );
}
