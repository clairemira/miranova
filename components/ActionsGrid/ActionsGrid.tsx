import { ReactNode } from "@tabler/icons-react";
import {
  Card,
  Group,
  MantineColor,
  SimpleGrid,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import classes from "./ActionsGrid.module.css";

export type Action = {
  title: string;
  caption: string;
  upperSection?: ReactNode;
  color?: MantineColor;
};

export type ActionsGridProps = {
  gridTitle: string;
  actions: Action[];
  cols?: number;
};

export function ActionsGrid({
  gridTitle,
  actions,
  cols = 3,
}: ActionsGridProps) {
  const items = actions.map((item) => (
    <UnstyledButton key={item.title} className={classes.item} w={180} h={120}>
      <Stack gap="xs">
        {item.upperSection}
        <Text size="xs">{item.title}</Text>
      </Stack>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card} p="xs">
      <Stack gap={0}>
        <Group justify="center" mb="xs">
          <Text className={classes.title}>{gridTitle}</Text>
        </Group>

        <SimpleGrid cols={cols} mt="md" spacing="xs">
          {items}
        </SimpleGrid>
      </Stack>
    </Card>
  );
}
