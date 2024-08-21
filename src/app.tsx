import { TransProvider } from "@mbarzda/solid-i18next";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "@fontsource-variable/wix-madefor-text";

import resources from "../locales";
import "./app.css";

export default function App() {
  const DEFAULT_LANGUAGE: string = "en-US";

  return (
    <TransProvider lng={DEFAULT_LANGUAGE} options={{ resources }}>
      <Router root={(props) => <Suspense>{props.children}</Suspense>}>
        <FileRoutes />
      </Router>
    </TransProvider>
  );
}
