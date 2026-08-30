import { Paper, Stack, Text, Title } from "@mantine/core";
import { BarChart, BarChartProps } from "@mantine/charts";
import { ReactNode } from "react";

export type ContextWindowDatum = {
  model: string;

  /**
   * Effective context window derived from the benchmark.
   */
  effectiveContext: number;

  /**
   * The remainder of the advertised context window.
   *
   * advertisedContext =
   * effectiveContext + unusedAdvertisedContext
   */
  unusedAdvertisedContext: number;

  /**
   * Optional flag for values where the benchmark did not observe
   * degradation before the final tested bucket.
   */
  rightCensored?: boolean;
};

export type ContextWindowChartProps = {
  title?: string;
  description?: string;
  header?: ReactNode;
  data: ContextWindowDatum[];
  height?: number;
};

function formatTokens(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function ContextWindowChart({ header, title, description, data }: ContextWindowChartProps) {
  const effectiveSeries = {
    name: "effectiveContext",
    label: "Effective context (> 95% accuracy)",
    color: "indigo.6",
  };

  const commonBarChartProps: Omit<BarChartProps, "series"> = {
    data,
    dataKey: "model",
    valueFormatter: formatTokens,
    xAxisLabel: "Tokens",
    orientation: "vertical",
    gridAxis: "y",
    barProps: {
      isAnimationActive: true,
      animationDuration: 300, // milliseconds
      animationEasing: "ease-out",
    },
  };

  return (
    <Paper withBorder radius="md" p="md">
      <Stack gap={0}>
        {header}

        {title && (
          <Title order={4} my={0}>
            {title}
          </Title>
        )}

        {description && (
          <Text c="dimmed" size="sm" my={4}>
            {description}
          </Text>
        )}

        <BarChart
          {...commonBarChartProps}
          h={260}
          type="stacked"
          withLegend
          styles={{
            legendItemName: {
              marginBlock: 0,
            },
          }}
          yAxisProps={{
            width: 120,
          }}
          series={[
            effectiveSeries,
            {
              name: "unusedAdvertisedContext",
              label: "Unverified advertised capacity",
              color: "light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4))",
            },
          ]}
        />

        {/* Zoomed effective-context comparison */}
        <Paper
          withBorder
          radius="md"
          p="md"
          bg="light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8))"
        >
          <Stack gap={0}>
            <Title order={5} my={0}>
              Magnified
            </Title>
            <BarChart
              {...commonBarChartProps}
              h={200}
              yAxisProps={{
                width: 100,
              }}
              series={[effectiveSeries]}
            />
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  );
}
