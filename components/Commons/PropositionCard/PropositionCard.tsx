import { Card, CardProps, Divider, Group, Text } from "@mantine/core";
import { Proposition } from "../../../types/commons";
import { IconBulb, IconBulbFilled } from "@tabler/icons-react";
import classes from "./PropositionCard.module.css";
import cx from "clsx";

export type PropositionCardProps = CardProps & {
  proposition: Proposition | string;
};

export default function PropositionCard({ proposition, ...cardProps }: PropositionCardProps) {
  const prop: Proposition =
    typeof proposition === "string" ? { title: proposition, tier: "expressive" } : proposition;

  const isCommittal = prop.tier === "committal";

  const Icon = isCommittal ? IconBulbFilled : IconBulb;

  const iconColor = isCommittal
    ? "var(--mantine-color-indigo-text)"
    : "var(--mantine-color-dimmed)";

  return (
    <Card withBorder {...cardProps} className={isCommittal ? classes.committalCard : undefined}>
      <Group>
        <Icon color={iconColor} size={28} />
        <Text className={cx(classes.title, { [classes.committal]: isCommittal })}>
          {prop.title}
        </Text>
      </Group>
      {prop.statement && (
        <>
          <Divider />
          <Text size="sm">{prop.statement}</Text>
        </>
      )}
    </Card>
  );
}
