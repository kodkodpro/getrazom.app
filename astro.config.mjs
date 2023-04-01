import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      },
    }),
  ]
});
