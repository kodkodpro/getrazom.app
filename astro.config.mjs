import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"
import mdx from "@astrojs/mdx"
import i18next from "astro-i18next"

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    i18next(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
})
