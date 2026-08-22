import { readFile } from "node:fs/promises";
import path from "node:path";

const content = [
  "commons.mdx",
  "matrix.mdx",
];

export async function GET() {
  const contentDir = path.join(process.cwd(), "content");

  const sections = await Promise.all(
    content.map(async (filename) => {
      const markdown = await readFile(
        path.join(contentDir, filename),
        "utf8"
      );

      return `# ${filename}\n\n${markdown}`;
    })
  );

  return new Response(sections.join("\n\n---\n\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
