import Link from "next/link";
import {
  Badge,
  Image,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconFileTypePdf } from "@tabler/icons-react";

export function ProjectSection() {
  return (
    <Stack gap="md">
      <Group justify="space-between" align="flex-end" wrap="wrap">
        <Title order={2}>Portfolio</Title>
        <Text c="dimmed" mt={6}>
          Ongoing work, living documents, iterative releases.
        </Text>
      </Group>

      <Card withBorder radius="lg" padding="lg">
        <Stack gap="sm">
          <Group justify="space-between">
            <Title order={3}>The Miranova Matrix</Title>
            <Badge variant="light">Published</Badge>
          </Group>

          <Text c="dimmed">
            An operational framework for studying how persistent structure may
            arise from minimal irreversible update rules — modelled as discrete
            “Ticks”, with read/gate/write participation across a ledger.
          </Text>

          <Group mt="xs" wrap="wrap">
            <Button component={Link} href="/miranova" variant="gradient">
              View project
            </Button>
            <Button
              component="a"
              href="/docs/miranova-matrix-v1.4.0.pdf"
              variant="default"
              target="_blank"
              rel="noreferrer"
              leftSection={<IconFileTypePdf />}
            >
              Read PDF
            </Button>
          </Group>

          <a href="https://doi.org/10.5281/zenodo.18158338" target="_blank">
            <Image
              h={20}
              w="auto"
              fit="contain"
              src="https://zenodo.org/badge/DOI/10.5281/zenodo.18158338.svg"
            />
          </a>

          <Text size="sm" c="dimmed">
            Published under the name <strong>Claire Mira Shaw</strong>.
          </Text>
        </Stack>
      </Card>

      <Card withBorder radius="lg" padding="lg">
        <Stack gap="sm">
          <Group justify="space-between">
            <Title order={3}>The Commons</Title>
            <Badge variant="outline">Coming soon</Badge>
          </Group>

          <Text c="dimmed">
            A governed, multi-participant cognitive substrate built on the
            Miranova ledger model. Shared rules, shared charge budget, and no
            committal claim without a Receipt.
          </Text>

          <Group mt="xs" wrap="wrap">
            <Button component={Link} href="/commons" variant="gradient">
              View premise
            </Button>
            <Button
              component="a"
              href="/docs/the-commons-v0.3.pdf"
              variant="default"
              target="_blank"
              rel="noreferrer"
            >
              Read primer
            </Button>
          </Group>
        </Stack>
      </Card>
    </Stack>
  );
}
