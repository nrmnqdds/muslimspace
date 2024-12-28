import { defineConfig, type HtmlConfig } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

const meta: HtmlConfig["meta"] = {
  title: "MuslimSpace",
  description: "Aggregator for Muslim content creators.",
  viewport: "width=device-width, initial-scale=1",
  charset: {
    charset: "UTF-8",
  },
};

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      babelLoaderOptions(opts) {
        opts.plugins?.unshift("babel-plugin-react-compiler");
      },
    }),
    pluginTypeCheck(),
    pluginImageCompress(),
    pluginNodePolyfill(),
  ],

  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
  },

  html: {
    title: "MuslimSpace",
    meta: meta,
  },
});
