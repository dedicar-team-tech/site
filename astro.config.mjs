import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:"http://www.equipededicar.com/",
  build: {
    format: "file"
  },
  experimental: {
    integrations: true,
  },
  integrations: [tailwind(), react(), sitemap()]
});