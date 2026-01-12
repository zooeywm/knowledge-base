// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import d2 from "astro-d2";

// https://astro.build/config
export default defineConfig({
  base: "/knowledge-base/",
  integrations: [
    starlight({
      title: "zooeywm 知识库",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/zooeywm" }],
      sidebar: [
        { label: "杂项", autogenerate: { directory: "misc" } },
        { label: "编程语言", autogenerate: { directory: "languages" } },
        { label: "安卓", autogenerate: { directory: "android" } },
        { label: "Linux", autogenerate: { directory: "linux" } },
        { label: "Windows", autogenerate: { directory: "windows" } },
        { label: "项目", autogenerate: { directory: "projects" } },
      ],
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
    }),
    d2(),
  ],
});
