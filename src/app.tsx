import { TransProvider } from "@mbarzda/solid-i18next";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { getCookie } from "vinxi/http";

import "@fontsource-variable/wix-madefor-text";
import {
  ColorModeProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from "@kobalte/core";
import { isServer } from "solid-js/web";
import resources from "../locales";
import "./app.css";

function getServerCookies(): string {
  "use server";
  const colorMode = getCookie("kb-color-mode");
  return colorMode ? `kb-color-mode=${colorMode}` : "";
}

export default function App() {
  const storageManager = cookieStorageManagerSSR(
    isServer ? getServerCookies() : document.cookie,
  );

  const DEFAULT_LANGUAGE: string = "en-US";

  return (
    <TransProvider lng={DEFAULT_LANGUAGE} options={{ resources }}>
      <Router
        root={(props) => (
          <>
            <ColorModeScript storageType={storageManager.type} />
            <ColorModeProvider storageManager={storageManager}>
              <Suspense>{props.children}</Suspense>
            </ColorModeProvider>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </TransProvider>
  );
}
