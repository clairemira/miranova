import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export function EmploymentSection() {
  return (
    <Stack gap="md">
      <Group justify="space-between" align="flex-end" wrap="wrap">
        <Title order={2}>Professional Work</Title>
        <Text c="dimmed" mt={6}>
          Ongoing work, living documents, iterative releases.
        </Text>
      </Group>

      <Card withBorder radius="lg" padding="lg">
        <Stack gap="sm">
          <Group justify="space-between">
            <Title order={3}>Woodina Underwriting Agency</Title>
          </Group>

          <Text c="dimmed">
            An operational framework for studying how persistent structure may
            arise from minimal irreversible update rules — modelled as discrete
            “Ticks”, with read/gate/write participation across a ledger.
          </Text>
        </Stack>
      </Card>
    </Stack>
  );
}
