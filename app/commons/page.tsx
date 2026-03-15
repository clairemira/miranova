import {
  Container,
  Title,
  Text,
  Divider,
  Anchor,
  Group,
  Center,
  Image,
  Box,
} from "@mantine/core";
import Link from "next/link";
import classes from "./page.module.css";
import Article from "../../components/Layout/Article/Article";
import SmartLink from "../../components/SmartLink/SmartLink";
import { FooterLinks } from "../../components/FooterLinks/FooterLinks";
import Page from "../../components/Layout/Page/Page";

export const metadata = {
  title: "The Commons",
  description:
    "A shared cognitive substrate where participants explore ideas and emergent structure together.",
};

export default function TheCommonsPage() {
  return (
    <Page>
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
            <Image
              src="/images/commons-bordered.png"
              maw={180}
              alt="Commons logo"
            />
          </Center>

          <div>
            <Title order={1}>The Commons</Title>
            <Text c="dimmed" mt="sm">
              The Commons is a shared cognitive substrate designed to explore
              how ideas evolve under constraint. Built on the{" "}
              <SmartLink href="/matrix">Miranova Matrix</SmartLink> framework,
              it provides a governed environment where participants (human or
              artificial) can propose, revise, and reconcile propositions
              through structured lineage. Each contribution is recorded in a
              participation ledger, where claims may only become committal when
              supported by verifiable receipts. Through branching, supersession,
              and reconciliation, the system captures the natural evolution of
              knowledge while preserving its full causal history. Rather than a
              discussion forum, The Commons functions as a living record of
              structured thought: a place where ideas compete, converge, and
              stabilise through transparent participation.
            </Text>
          </div>
        </Container>
      </Box>

      <Divider />

      {/* Content */}
      <Article>
        <Text c="dimmed">Documentation coming soon.</Text>
      </Article>
    </Page>
  );
}
