import { Group, Center, Image, Stack, Badge } from "@mantine/core";

import Article from "../../components/Layout/Article/Article";
import Page from "../../components/Layout/Page/Page";
import SmartLink from "../../components/SmartLink/SmartLink";

// MDX
import MatrixContent from "../../content/matrix.mdx";

import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Miranova Matrix",
  description:
    "The Miranova Matrix is an operational framework for studying how persistent structure may arise from minimal irreversible update rules.",
  alternates: {
    canonical: "https://miranova.dev/matrix",
  },
  openGraph: {
    title: "The Miranova Matrix",
    description:
      "An operational framework exploring emergence, constraint, and coherence in complex systems.",
    url: "https://miranova.dev/matrix",
    siteName: "miranova.dev",
    type: "article",
    images: [{ url: "https://miranova.dev/images/miranova-matrix-logo-bordered.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Miranova Matrix",
    description:
      "An operational framework exploring emergence, constraint, and coherence in complex systems.",
    images: ["https://miranova.dev/images/miranova-matrix-logo-bordered.png"],
  },
};

export default function TheMiranovaMatrixPage() {
  return (
    <Page hideDots>
      <Head>
        <link rel="alternate" type="text/markdown" href="https://miranova.dev/matrix.md" />
        <link rel="describedby" href="https://miranova.dev/llms.txt" />
      </Head>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            headline: "The Miranova Matrix",
            author: {
              "@type": "Person",
              name: "Claire Mira Shaw",
            },
            url: "https://miranova.dev/matrix",
            publisher: {
              "@type": "Organization",
              name: "miranova.dev",
            },
          }),
        }}
      />

      <Article
        title="The Miranova Matrix"
        header={
          <Center>
            <Image
              src="/images/miranova-matrix-logo-bordered.png"
              maw={180}
              alt="Miranova Matrix logo"
            />
          </Center>
        }
        description={`
            The Miranova Matrix is an operational framework for studying how persistent structure
            may arise from minimal irreversible update rules. System progression is modelled as
            discrete “Ticks”: closed traversals in which defined Degrees of Freedom are read, gated,
            and written under admissibility constraints. The resulting Participation Ledger
            specifies a minimal grammar through which commitment, compatibility, directional bias,
            and closure can be expressed without presupposing geometry or external time. Miranova is
            presented not as a physical theory, but as a simulation-oriented formalism for exploring
            constraint propagation and emergent organisation under physically compatible principles.
        `}
        content={[MatrixContent]}
        footer={
          <Stack gap="xs" justify="flex-end" align="flex-end">
            <Group gap="xs">
              <Badge variant="filled" color="blue">
                1.4.1
              </Badge>
              <SmartLink href="https://doi.org/10.5281/zenodo.18158338">
                <Image src="/images/zenodo.18158338.svg" alt="10.5281/zenodo.18158338" />
              </SmartLink>
            </Group>

            <Group gap="xs">
              <SmartLink
                href="/pdf/miranova/The Miranova Matrix (1.4.1).pdf"
                target="_blank"
                size="sm"
              >
                Download Latest (PDF)
              </SmartLink>
            </Group>
          </Stack>
        }
      />
    </Page>
  );
}
