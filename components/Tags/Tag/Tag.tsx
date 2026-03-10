import { Badge, BadgeProps } from "@mantine/core";

export type TagProps = BadgeProps & {
  /** Tag name */
  name: string;
  /** Optional human-friendly label */
  label?: string;
};

export default function Tag({ name, label, ...badgeProps }: TagProps) {
  return (
    <Badge
      color="rgb(150, 150, 150, 1)"
      bg="rgb(1, 1, 1, 0.3)"
      size="xs"
      variant="light"
      {...badgeProps}
      title={`#${name}`}
      data-tag={name}
    >
      {label}
    </Badge>
  );
}
