import { DocsConfig } from "types"

export const jlptConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],


  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/vocabulary",
        },
      ],
    },

    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/vocabulary/documentation",
        },
        {
          title: "Contentlayer",
          href: "/vocabulary/in-progress",
          disabled: true,
        },
        {
          title: "Components",
          href: "/vocabulary/documentation/components",
        },
        {
          title: "Code Blocks",
          href: "/vocabulary/documentation/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/vocabulary/documentation/style-guide",
        },
        {
          title: "Hanabira Vocabulary JLPT",
          href: "/vocabulary/jlpt/hanabira-vocabulary",
        },
        {
          title: "Search",
          href: "/vocabulary/in-progress",
          disabled: true,
        },
      ],
    },

    {
      title: "Blog",
      items: [
        {
          title: "Hanabira I",
          href: "/vocabulary/in-progress",
          disabled: true,
        },
        {
          title: "Hanabira II",
          href: "/vocabulary/in-progress",
          disabled: true,
        },
        {
          title: "Hanabira III",
          href: "/vocabulary/in-progress",
          disabled: true,
        },
      ],
    },

    {
      title: "Dashboard",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Layouts",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },

    {
      title: "Marketing Site",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "File Structure",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}
