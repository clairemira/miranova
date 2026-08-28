import createMDX from "@next/mdx";
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
    remarkPlugins: ["remark-math", "remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      "rehype-katex",
      [
        "rehype-mermaid",
        {
          launchOptions: isVercel
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
