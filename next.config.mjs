import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeMermaid from "rehype-mermaid";
import chromium from "@sparticuz/chromium";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

const isVercel = process.env.VERCEL === "1";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypeMermaid,
        {
          strategy: "inline-svg",
          launchOptions:
            isVercel
              ? {
                  executablePath: await chromium.executablePath(),
                  args: chromium.args,
                }
              : {},
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
