import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Anchor, Blockquote, Code, List, Text, Title } from "@mantine/core";

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    h1: (props) => <Title order={1} mt="md" {...props} />,
    h2: (props) => <Title order={2} mt="md" {...props} />,
    h3: (props) => <Title order={3} mt="md" {...props} />,
    p: (props) => <Text mt="sm" {...props} />,
    ul: (props) => <List mt="sm" withPadding {...props} />,
    ol: (props) => <List mt="sm" withPadding type="ordered" {...props} />,
    blockquote: (props) => <Blockquote mt="sm" {...props} />,
    code: (props) => <Code {...props} />,

    // Use Mantine Anchor + Next Link
    a: ({ href = "", ...rest }) => {
      const isExternal = /^https?:\/\//.test(href);
      if (isExternal) {
        return <Anchor href={href} target="_blank" rel="noopener" {...rest} />;
      }
      return <Anchor component={Link} href={href} {...rest} />;
    },

    ...components,
  };
}
