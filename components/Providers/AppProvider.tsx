"use client";

import { MantineProvider } from "@mantine/core";
import { theme } from "../../theme";
import { PropsWithChildren } from "react";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {children}
    </MantineProvider>
  );
}
