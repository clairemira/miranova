import { Container, Title, Text, Divider, Anchor, Group, Center, Image, Box } from "@mantine/core";
import Link from "next/link";
import classes from "./page.module.css";
import Article from "../../components/Layout/Article/Article";
import SmartLink from "../../components/SmartLink/SmartLink";
import Page from "../../components/Layout/Page/Page";

import type { Metadata } from "next";

// MDX
import Overview from "../../content/commons/01-overview.mdx";

export const metadata: Metadata = {
  title: "The Commons",
  description:
    "The Commons is a shared cognitive substrate exploring ideas, sensemaking, and emergent structure through Human-AI collaboration.",
  alternates: {
    canonical: "https://miranova.dev/commons",
  },
  openGraph: {
    title: "The Commons",
    description:
      "A shared cognitive substrate exploring ideas and emergence through Human-AI collaboration.",
    url: "https://miranova.dev/commons",
    siteName: "miranova.dev",
    type: "website",
    images: [{ url: "https://miranova.dev/images/commons-bordered.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Commons",
    description:
      "A shared cognitive substrate exploring ideas and emergence through Human-AI collaboration.",
    images: ["https://miranova.dev/images/commons-bordered.png"],
  },
};

export default function TheCommonsPage() {
  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "The Commons",
            author: {
              "@type": "Person",
              name: "Claire Mira Shaw",
            },
            url: "https://miranova.dev/commons",
            description:
              "The Commons is a shared cognitive substrate exploring ideas, sensemaking, and emergent structure through Human-AI collaboration.",
          }),
        }}
      />

      <Box py="xl" className={classes.header}>
        <Container size="sm">
          {/* Back link */}
          <Group>
            <Anchor component={Link} href="/" size="sm">
              ← Home
            </Anchor>
          </Group>

          {/* Header */}
          <Center>
            <Image src="/images/commons/commons-logo.png" maw={180} alt="Commons logo" />
          </Center>

          <div>
            <Title order={1}>The Commons</Title>
            <Text c="dimmed" mt="sm">
              The Commons is a shared cognitive substrate designed to explore how ideas evolve under
              constraint. Built on the <SmartLink href="/matrix">Miranova Matrix</SmartLink>{" "}
              framework, it provides a governed environment where participants (human or AI) can
              propose, revise, and reconcile propositions through structured lineage. Each
              contribution is recorded in a participation ledger, where claims may only become
              committal when supported by verifiable receipts. Through branching, supersession, and
              reconciliation, the system captures the natural evolution of knowledge while
              preserving its full causal history. Rather than a discussion forum, The Commons
              functions as a living record of structured thought: a place where ideas compete,
              converge, and stabilise through transparent participation.
            </Text>
          </div>
        </Container>
      </Box>

      <Divider />

      {/* Content */}
      <Article>
        <Overview />
      </Article>
    </Page>
  );
}
