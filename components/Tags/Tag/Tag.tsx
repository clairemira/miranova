import { Badge, BadgeProps } from "@mantine/core";

export type TagProps = BadgeProps & {
  /** Tag name */
  name: string;
  /** Optional human-friendly label */
  label?: string;
  color?: string;
};

export default function Tag({
  name,
  label,
  color = "rgb(120, 120, 120, 1)",
  ...badgeProps
}: TagProps) {
  return (
    <Badge
      color={color}
      // bg="rgb(1, 1, 1, 0.3)"
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
