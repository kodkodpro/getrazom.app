import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"
import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
})
