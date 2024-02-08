import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  site: "https://nimr77.github.io",
  base: "/my-portfolio/",
  integrations: [tailwind(), react()],
});
