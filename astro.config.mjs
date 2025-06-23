import { defineConfig } from "astro/config";
import partytown from '@astrojs/partytown';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://innovapaz.com",
  base: "./",
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
  },
  integrations: [partytown({ config: { forward: ['dataLayer.push'] } }), react(), markdoc(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
});