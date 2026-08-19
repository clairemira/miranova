import type { MDXComponents } from "mdx/types";
import {
  Text,
  Title,
  List,
  ListItem,
  Divider,
  Anchor,
  Blockquote,
  Code,
  Image,
} from "@mantine/core";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <Title order={1} mb="sm" {...props} />,
    h2: (props) => <Title order={2} mb="sm" {...props} />,
    h3: (props) => <Title order={3} mb="sm" {...props} />,
    p: (props) => <Text component="p" lh={1.8} {...props} />,
    ul: (props) => <List {...props} />,
    ol: (props) => <List type="ordered" {...props} />,
    li: (props) => <ListItem {...props} />,
    hr: (props) => <Divider {...props} my="xl" />,
    blockquote: (props) => <Blockquote {...props} py="xs" />,
    code: (props) => <Code {...props} />,
    img: (props) => <Image radius="md" maw={600} {...props} />,
    a: ({ href = "", ...props }) => {
      const isInternal = href.startsWith("/");
      return isInternal ? (
        <Anchor component={Link} href={href} {...props} />
      ) : (
        <Anchor href={href} target="_blank" rel="noopener noreferrer" {...props} />
      );
    },
    ...components,
  };
}
