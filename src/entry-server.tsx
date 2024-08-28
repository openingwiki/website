// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { DEFAULT_LOCALE } from "~/lib/i18n";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      // TODO: match with the current locale
      <html lang={DEFAULT_LOCALE}>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* TODO: make the favicon vector */}
          <link rel="icon" type="image/png" href="/favicon.png" />
          {assets}
        </head>

        <body class="ctp-latte dark:ctp-macchiato">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
