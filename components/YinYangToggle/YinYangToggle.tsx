"use client";

import { IconYinYangFilled } from "@tabler/icons-react";
import cx from "clsx";
import {
  ActionIcon,
  Affix,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import classes from "./YinYangToggle.module.css";

export default function YinYangToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Affix position={{ bottom: "xs", right: "xs" }}>
      <Group justify="center">
        <ActionIcon
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          variant="default"
          size="xl"
          radius="md"
          aria-label="Toggle color scheme"
        >
          <IconYinYangFilled
            className={cx(classes.icon, classes.light)}
            stroke={1.5}
          />
        </ActionIcon>
      </Group>
    </Affix>
  );
}
