import "@mantine/core/styles.css";
import "katex/dist/katex.min.css";
import "./globals.css";

import React from "react";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import AppProvider from "../components/Providers/AppProvider";

export const metadata = {
  metadataBase: new URL("https://miranova.dev"),
  title: {
    default: "Claire Mira Shaw",
    template: "%s | Claire Mira Shaw",
  },
  description:
    "Software engineer focused on robust systems, clarity, and long-term maintainability. Author of The Miranova Matrix.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://miranova.dev",
    title: "Claire Mira Shaw",
    description:
      "Software engineer focused on robust systems, clarity, and long-term maintainability. Author of The Miranova Matrix.",
    siteName: "miranova.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claire Mira Shaw",
    description:
      "Software engineer focused on robust systems, clarity, and long-term maintainability. Author of The Miranova Matrix.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
