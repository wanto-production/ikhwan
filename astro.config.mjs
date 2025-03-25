// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react(), svelte(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
