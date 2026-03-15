"use client";

import { TableOfContents } from "@mantine/core";

export default function Contents() {
  return (
    <TableOfContents
      variant="filled"
      color="blue"
      size="sm"
      radius="sm"
      scrollSpyOptions={{
        selector: "#mdx :is(h1, h2, h3, h4, h5, h6)",
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
