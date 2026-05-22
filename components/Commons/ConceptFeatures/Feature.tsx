import { Stack, Text } from "@mantine/core";
import { IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type FeatureProps = {
  name: string;
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
};

export default function Feature({ name, Icon }: FeatureProps) {
  const iconStyle = {
    width: 64,
    height: 64,
  };

  return (
    <Stack justify="center" align="center" gap={0}>
      <Icon style={iconStyle} />
      <Text fw={600} my={0}>
        {name}
      </Text>
    </Stack>
  );
}
