"use client";

import { IconYinYangFilled } from "@tabler/icons-react";
import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import classes from "./YinYangToggle.module.css";

export default function YinYangToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
      variant="default"
      size="xl"
      radius="md"
      aria-label="Toggle color scheme"
    >
      <IconYinYangFilled className={classes.icon} stroke={1.5} />
    </ActionIcon>
  );
}
