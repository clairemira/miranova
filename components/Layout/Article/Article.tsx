import { Box, Container, Divider, Title, Text, MantineSize } from "@mantine/core";
import classes from "./Article.module.css";
import { ReactNode } from "react";
import HomeLink from "../../HomeLink/HomeLink";
import DotsWrapper from "../DotsWrapper/DotsWrapper";
import { MDXContent } from "mdx/types";

export type ArticleProps = {
  title: string;
  description?: string | ReactNode;
  content: MDXContent[];
  header?: ReactNode;
  footer?: ReactNode;
  size?: number | string | MantineSize;
};

export default function Article({
  title,
  description,
  content,
  header,
  footer,
  size = "sm",
}: ArticleProps) {
  return (
    <>
      <Box py="xl" className={classes.header}>
        <DotsWrapper>
          <Container size={size}>
            <HomeLink />

            {/* Header */}
            {header}

            <Box>
              <Title order={1}>{title}</Title>
              {typeof description === "string" ? (
                <Text c="dimmed" mt="sm">
                  {description}
                </Text>
              ) : (
                description
              )}
            </Box>
          </Container>
        </DotsWrapper>
      </Box>

      <Divider />

      {/* Content */}
      <Container id="mdx" size={size} className={classes.article}>
        {/* Only using index here as the array itself remains static */}
        {content.map((ContentElement, index) => (
          <ContentElement key={index} />
        ))}
      </Container>

      {/* Footer */}
      <Container size={size} p="lg">
        {footer}
      </Container>
    </>
  );
}
