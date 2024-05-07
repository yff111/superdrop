import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dndrxjs",
  description: "low level drag & drop library based on rxjs",
  srcDir: "./docs/",
  base: "/dndrxjs/",
  head: [
    ["link", { rel: "shortcut icon", href: "favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }],
  ],
  themeConfig: {
    logo: "/logo-small.svg",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/installation" },
    ],

    sidebar: [
      { text: "Information", link: "/information" },
      { text: "Installation", link: "/installation" },
      { text: "Types", link: "/types" },
      {
        text: "Examples",
        items: [
          { text: "Tree", link: "/tree" },
          { text: "Vertical List", link: "/vertical-list" },
          { text: "Horizontal List", link: "/horizontal-list" },
          { text: "Grid", link: "/grid" },
          { text: "Table", link: "/table" },
          { text: "Multiple Lists", link: "/multiple-lists" },
        ],
      },
      {
        text: "Middleware",
        items: [
          { text: "Auto-Scroll", link: "/auto-scroll" },
          { text: "Indicator", link: "/indicator" },
          { text: "Add CSS Classes", link: "/add-classes" },
          { text: "Drag Image", link: "/drag-image" },
          { text: "Ghost Element", link: "/ghost-element" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/yff111/dndrxjs/" },
    ],
  },
})
