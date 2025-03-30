// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      PUBLIC_GLB_URL: envField.string({
        access: "public",
        context: "client",
      }),
    },
  },
  site: "https://portofolio-ikhwan.vercel.app",
  output: "static",
  integrations: [react(), svelte(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
