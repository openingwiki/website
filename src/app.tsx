import "@fontsource-variable/wix-madefor-text";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type JSXElement } from "solid-js";
import Default from "~/layouts/Default";
import { I18n } from "~/lib/i18n";
import { BrandedTitle } from "~/lib/meta";
import "./app.css";

export default function App(): JSXElement {
  return (
    <I18n>
      <MetaProvider>
        {/* TODO */}
        <BrandedTitle />
        <Router root={Default}>
          <FileRoutes />
        </Router>
      </MetaProvider>
    </I18n>
  );
}
