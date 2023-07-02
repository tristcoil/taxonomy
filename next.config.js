
//original config, for next.config.mjs

// import { withContentlayer } from "next-contentlayer"

// import "./env.mjs"

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["avatars.githubusercontent.com"],
//   },
//   experimental: {
//     appDir: true,
//     serverComponentsExternalPackages: ["@prisma/client"],
//   },
// }

// export default withContentlayer(nextConfig)




// approach from github, next.config.mjs renamed to next.config.mjs
// https://github.com/shadcn/taxonomy/issues/100
// https://github.com/contentlayerdev/contentlayer/issues/129#issuecomment-1116879647

// import { createContentlayerPlugin } from "next-contentlayer"
const { createContentlayerPlugin } = require("next-contentlayer");

// import "./env.mjs"
import("./env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

// export default withContentlayer(nextConfig)
module.exports = withContentlayer(nextConfig);