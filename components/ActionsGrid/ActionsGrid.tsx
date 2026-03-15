import type { ReactNode } from "react";
import {
  Box,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  MantineColor,
  Stack,
  StyleProp,
  Text,
} from "@mantine/core";
import classes from "./ActionsGrid.module.css";
import Tag, { TagProps } from "../Tags/Tag/Tag";
import { ColSpan } from "@mantine/core/lib/components/Grid/GridCol/GridCol";
import SmartLink from "../SmartLink/SmartLink";

export type Action = {
  title: string;
  description: string;
  link: string;
  caption?: string;
  upperSection?: ReactNode;
  color?: MantineColor;
  tags?: TagProps[];
};

export type ActionsGridProps = {
  gridTitle: string;
  actions: Action[];
  span?: StyleProp<ColSpan>;
};

export function ActionsGrid({
  gridTitle,
  actions,
  span = "auto",
}: ActionsGridProps) {
  const items = actions.map((item) => (
    <GridCol key={item.title} span={span} className={classes.col}>
      <SmartLink href={item.link} className={classes.item}>
        <Stack className={classes.content} gap="xs">
          <Stack gap="xs" p="xs">
            {item.upperSection}

            <Stack gap={0}>
              <Text size="md" fw={600}>
                {item.title}
              </Text>

              {item.caption && (
                <Text size="sm" c="dimmed">
                  {item.caption}
                </Text>
              )}
            </Stack>
          </Stack>

          <Box className={classes.description} p="xs">
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </Box>

          {!!item.tags?.length && (
            <>
              <Divider />
              <Group gap="xs" p="sm" pt={0} justify="center">
                {item.tags.map((tag) => (
                  <Tag key={tag.name} {...tag} />
                ))}
              </Group>
            </>
          )}
        </Stack>
      </SmartLink>
    </GridCol>
  ));

  return (
    <Card withBorder radius="md" className={classes.card} p="xs">
      <Stack gap="xs">
        <Group justify="center">
          <Text className={classes.title}>{gridTitle}</Text>
        </Group>

        <Grid grow justify="center" align="stretch">
          {items}
        </Grid>
      </Stack>
    </Card>
  );
}
