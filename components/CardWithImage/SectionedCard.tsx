import { Card, Text } from "@mantine/core";
import classes from "./CardWithStats.module.css";
import { ReactNode } from "react";

export type SectionedCardProps = {
  title: string;
  text: string;
  body?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

export function SectionedCardProps({
  title,
  text,
  body,
  header,
  footer,
}: SectionedCardProps) {
  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section>{header}</Card.Section>

      <Text className={classes.title}>{title}</Text>

      <Text mt="sm" mb="md" c="dimmed" fz="xs">
        {text}
      </Text>

      {body}

      {footer && (
        <Card.Section className={classes.footer}>{footer}</Card.Section>
      )}
    </Card>
  );
}
