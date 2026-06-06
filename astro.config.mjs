import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://stevekuo.dev",
  integrations: [mdx(), sitemap()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
