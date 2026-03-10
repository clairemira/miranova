import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/, // optionally compile .md too
});

export default withMDX(nextConfig);
