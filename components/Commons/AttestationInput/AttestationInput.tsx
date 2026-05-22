"use client";

import { ActionIcon } from "@mantine/core";
import { useCounter } from "@mantine/hooks";
import {
  IconCircleMinus2,
  IconCirclePlus2,
  IconRotate2,
  IconRotateClockwise2,
} from "@tabler/icons-react";

export type AttestationInputProps = {};

export default function AttestationInput() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" onClick={decrement} aria-label="Decrement value">
        <IconRotate2 color="var(--mantine-color-pink-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)" miw={60}>
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon variant="default" size="lg" onClick={increment} aria-label="Increment value">
        <IconRotateClockwise2 color="var(--mantine-color-indigo-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
