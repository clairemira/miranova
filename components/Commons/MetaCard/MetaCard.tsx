import { Text, Stack, Card, CardProps, StackProps, MantineColor, Space, Flex } from "@mantine/core";
import { IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

export type MetaCardData = {
  name: string;
  description: string;
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  color?: MantineColor;
};

export type MetaCardProps = CardProps & {
  meta: MetaCardData;
  bottomSection?: ReactNode;
  stackProps?: StackProps;
};

export default function MetaCard({ meta, bottomSection, stackProps, ...cardProps }: MetaCardProps) {
  return (
    <Card {...cardProps}>
      <Stack align="center" justify="center" {...stackProps} ta="center">
        <meta.Icon />
        <Text fw={600} size="sm" mt={0} mb={4} ta="center">
          {meta.name}
        </Text>
        <Text size="xs" c="dimmed" my={0}>
          {meta.description}
        </Text>
        {bottomSection}
      </Stack>
    </Card>
  );
}
