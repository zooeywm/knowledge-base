// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import d2 from "astro-d2";

// https://astro.build/config
export default defineConfig({
  base: '/knowledge-base/',
  integrations: [
    starlight({
      title: "zooeywm 知识库",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/zooeywm" }],
      sidebar: [
        {
          label: "mdx 小抄",
          autogenerate: { directory: "misc" },
        },
        { label: "编程语言", autogenerate: { directory: "languages" } },
      ],
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
    }),
    d2(),
  ],
});
