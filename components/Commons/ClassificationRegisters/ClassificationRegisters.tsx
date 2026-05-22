import { Card, Divider, Grid, GridCol, Group, Stack, Text } from "@mantine/core";
import {
  IconActivity,
  IconBook,
  IconBroadcast,
  IconCirclesRelation,
  IconFlag,
  IconHeartHandshake,
  IconLayersLinked,
  IconTiltShiftFilled,
} from "@tabler/icons-react";
import MetaCard, { MetaCardData } from "../MetaCard/MetaCard";

export type Domain = MetaCardData & {
  registers: MetaCardData[];
};

export const domains: Domain[] = [
  {
    name: "Emergence",
    description: "What is taking shape",
    Icon: IconCirclesRelation,
    registers: [
      {
        name: "Canon",
        description: "What persists",
        Icon: IconBook,
        color: "light-dark(var(--mantine-color-blue-1), var(--mantine-color-blue-light))",
      },
      {
        name: "Frontier",
        description: "What is emerging",
        Icon: IconFlag,
        color: "light-dark(var(--mantine-color-green-1), var(--mantine-color-green-light))",
      },
      {
        name: "Activity",
        description: "What is happening",
        Icon: IconActivity,
        color: "light-dark(var(--mantine-color-red-1), var(--mantine-color-red-light))",
      },
    ],
  },
  {
    name: "Settlement",
    description: "What has taken hold",
    Icon: IconLayersLinked,
    registers: [
      {
        name: "Signal",
        description: "What has changed",
        Icon: IconBroadcast,
        color: "light-dark(var(--mantine-color-yellow-1), var(--mantine-color-yellow-light))",
      },
      {
        name: "Stance",
        description: "Where we stand",
        Icon: IconTiltShiftFilled,
        color: "light-dark(var(--mantine-color-pink-1), var(--mantine-color-pink-light))",
      },
      {
        name: "Concord",
        description: "What we agree on",
        Icon: IconHeartHandshake,
        color: "light-dark(var(--mantine-color-cyan-1), var(--mantine-color-cyan-light))",
      },
    ],
  },
];

export default function ClassificationRegisters() {
  return (
    <Grid gutter="xs" my="lg">
      {domains.map((domain) => (
        <GridCol key={domain.name} span={{ base: 12, sm: 6 }}>
          <MetaCard
            meta={domain}
            bottomSection={
              <Grid gutter="xs" mt="xs">
                {domain.registers.map((register) => (
                  <GridCol key={register.name} span={{ base: 12, xs: 4 }}>
                    <MetaCard
                      meta={register}
                      bg={register.color}
                      variant="light"
                      withBorder
                      stackProps={{ gap: 0 }}
                    />
                  </GridCol>
                ))}
              </Grid>
            }
            stackProps={{ gap: 0 }}
            withBorder
            p="xs"
          />
        </GridCol>
      ))}
    </Grid>
  );
}
