import { Stack, Text, Title } from "@mantine/core";

type HeroSectionProps = {
  name: string;
  tagline: string;
};

export function HeroSection({ name, tagline }: HeroSectionProps) {
  return (
    <Stack gap="md">
      <Title order={1} style={{ lineHeight: 1.05 }}>
        Claire{" "}
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          inherit
        >
          Mira
        </Text>{" "}
        Shaw
      </Title>

      <Text c="dimmed" size="lg">
        {tagline}
      </Text>
    </Stack>
  );
}
