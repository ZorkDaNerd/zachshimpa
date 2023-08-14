import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(), //https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
  site: 'https://zachshimpa.com/'
});