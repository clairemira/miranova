"use client";

import { Container } from "@mantine/core";
import classes from "./Article.module.css";
import ScrollToTopButton from "../../ScrollToTopButton/ScrollToTopButton";
import { PropsWithChildren } from "react";

export type ArticleProps = PropsWithChildren & {
  //
};

export default function Article({ children }: ArticleProps) {
  return (
    <Container id="mdx" size="sm" className={classes.article}>
      <ScrollToTopButton />
      {children}
    </Container>
  );
}
