"use client";

import { Group, Anchor } from "@mantine/core";
import Link from "next/link";

export default function HomeLink() {
  return (
    <Group>
      <Anchor component={Link} href="/" size="sm">
        ← Home
      </Anchor>
    </Group>
  );
}
