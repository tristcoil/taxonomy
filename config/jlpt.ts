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
          title: "Verb: 飛ぶ (tobu) - to fly",
          href: "/vocabulary/jlpt/verb-飛ぶ-tobu-to-fly",
        },
        {
          title: "Hanabira Vocabulary JLPT",
          href: "/vocabulary/jlpt/hanabira-vocabulary",
        },

        {
          title: "安心する JLPT",
          href: "/vocabulary/jlpt/verb-安心する-あんしんする-to-be-relieved-to-feel-secure",
        },
        {
          title: "愛用する JLPT",
          href: "/vocabulary/jlpt/愛用する",
        },
        {
          title: "案内する JLPT",
          href: "/vocabulary/jlpt/案内する",
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
