import "@fontsource-variable/wix-madefor-text";
import { TransProvider } from "@mbarzda/solid-i18next";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import resources from "../locales";
import "./app.css";
import { BrandedTitle } from "./lib/meta";

export default function App() {
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
