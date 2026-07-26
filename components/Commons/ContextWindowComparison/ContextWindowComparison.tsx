import { Stack, Title, SimpleGrid, Text } from "@mantine/core";
import { ContextWindowDatum, ContextWindowChart } from "../ContextWindowChart/ContextWindowChart";

export type ContextWindowExperiment = {
  id: string;
  title: string;
  description?: string;
  data: ContextWindowDatum[];
};

export type ContextWindowComparisonProps = {
  title?: string;
  description?: string;
  experiments: ContextWindowExperiment[];
};

export function ContextWindowComparison({
  title = "Advertised and effective context windows",
  description,
  experiments,
}: ContextWindowComparisonProps) {
  return (
    <Stack gap="xl">
      <div>
        <Title order={2}>{title}</Title>

        {description && (
          <Text c="dimmed" mt="xs">
            {description}
          </Text>
        )}
      </div>

      <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
        {experiments.map((experiment) => (
          <ContextWindowChart
            key={experiment.id}
            title={experiment.title}
            description={experiment.description}
            data={experiment.data}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
