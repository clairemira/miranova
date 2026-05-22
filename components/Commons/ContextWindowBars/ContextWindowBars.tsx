import {
  Badge,
  Group,
  Paper,
  Progress,
  ProgressLabel,
  ProgressRoot,
  ProgressSection,
  Stack,
  Text,
  Title,
} from "@mantine/core";

type Zones = {
  reliable: number;
  degrading: number;
  failing: number;
};

type ModelTaskBarProps = {
  model: string;
  mcw: number;
  taskLabel: string;
  subtitle: string;
  zones: Zones;
};

function formatTokens(value: number) {
  return new Intl.NumberFormat().format(value);
}

function pct(part: number, total: number) {
  return (part / total) * 100;
}

function ModelTaskBar({ model, mcw, taskLabel, subtitle, zones }: ModelTaskBarProps) {
  const used = zones.reliable + zones.degrading + zones.failing;
  const remainder = Math.max(0, mcw - used);

  return (
    <Paper withBorder radius="md" p="md">
      <Stack gap="xs">
        <Group justify="space-between" align="flex-start">
          <div>
            <Text fw={700}>{model}</Text>
            <Text size="sm" c="dimmed">
              {taskLabel}
            </Text>
          </div>
          <Badge variant="light">MCW: {formatTokens(mcw)} tokens</Badge>
        </Group>

        <Text size="sm">{subtitle}</Text>

        <ProgressRoot size={28} radius="xl">
          {zones.reliable > 0 && (
            <ProgressSection value={pct(zones.reliable, mcw)} color="teal">
              <ProgressLabel>Reliable ({formatTokens(zones.reliable)})</ProgressLabel>
            </ProgressSection>
          )}

          {zones.degrading > 0 && (
            <ProgressSection value={pct(zones.degrading, mcw)} color="yellow">
              <ProgressLabel>Degrading ({formatTokens(zones.degrading)})</ProgressLabel>
            </ProgressSection>
          )}

          {zones.failing > 0 && (
            <ProgressSection value={pct(zones.failing, mcw)} color="red">
              <ProgressLabel>Failing ({formatTokens(zones.failing)})</ProgressLabel>
            </ProgressSection>
          )}

          {remainder > 0 && (
            <ProgressSection value={pct(remainder, mcw)} color="gray">
              <ProgressLabel>Remaining MCW ({formatTokens(remainder)})</ProgressLabel>
            </ProgressSection>
          )}
        </ProgressRoot>

        <Group gap="xs">
          <Badge color="teal" variant="light">
            Reliable
          </Badge>
          <Badge color="yellow" variant="light">
            Degrading
          </Badge>
          <Badge color="red" variant="light">
            Failing
          </Badge>
          <Badge color="gray" variant="light">
            Remaining MCW
          </Badge>
        </Group>
      </Stack>
    </Paper>
  );
}

export default function ContextWindowBars() {
  return (
    <Stack gap="lg">
      {/* o4-mini — MCW from OpenAI docs: 200,000 */}
      <ModelTaskBar
        model="o4-mini"
        mcw={200_000}
        taskLabel='1. "How many objects does {person} have?" (Needle in a Haystack)'
        subtitle="Approximate presentation zones inferred from the paper's chart."
        zones={{
          reliable: 5_000,
          degrading: 10_000,
          failing: 20_000,
        }}
      />

      <ModelTaskBar
        model="o4-mini"
        mcw={200_000}
        taskLabel='2. "How many {colour} objects are there?" (Needles in a Haystack)'
        subtitle="Approximate presentation zones inferred from the paper's chart."
        zones={{
          reliable: 1_100,
          degrading: 900,
          failing: 0, // no clear hard-failure region reached in the plotted data
        }}
      />

      {/* GPT-4.1 — MCW from OpenAI docs: 1,047,576 */}
      <ModelTaskBar
        model="GPT-4.1"
        mcw={1_047_576}
        taskLabel='1. "How many objects does {person} have?" (Needle in a Haystack)'
        subtitle="Approximate presentation zones inferred from the paper's chart."
        zones={{
          reliable: 60_000,
          degrading: 10_000,
          failing: 0, // no clear collapse shown before the line ends
        }}
      />

      <ModelTaskBar
        model="GPT-4.1"
        mcw={1_047_576}
        taskLabel='2. "How many {colour} objects are there?" (Needles in a Haystack)'
        subtitle="Approximate presentation zones inferred from the paper's chart."
        zones={{
          reliable: 250,
          degrading: 350,
          failing: 800,
        }}
      />
    </Stack>
  );
}
