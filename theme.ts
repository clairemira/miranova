"use client";

import { createTheme, DEFAULT_THEME } from "@mantine/core";

export const theme = createTheme({
  fontFamily: `Inter, ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: `JetBrains Mono, ${DEFAULT_THEME.fontFamilyMonospace}`,
  headings: {
    fontFamily: `Inter, ${DEFAULT_THEME.fontFamily}`,
    fontWeight: "700",
  },
  radius: {
    md: "10px",
  },
});
