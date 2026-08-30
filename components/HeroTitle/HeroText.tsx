import { Container, Text, Title } from "@mantine/core";
import classes from "./HeroText.module.css";

export function HeroText() {
  return (
    <Container size="xl" mt="xl">
      <Title className={classes.titleHero} mb="xs">
        Claire{" "}
        <Text
          component="span"
          className={classes.highlight}
          fw={700}
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          inherit
        >
          Mira
        </Text>{" "}
        Shaw
      </Title>

      <Container p={0} size={600}>
        <Text
          size="lg"
          c="dimmed"
          className={classes.description}
          // display="inline"
        >
          I like building systems and understanding what makes them hold together. Professionally,
          that means turning ambiguous requirements into practical software that can survive change.
          In my personal work, I explore the same curiosity more broadly; how simple rules,
          constraints, and participation can give rise to organised complexity over time.
        </Text>
      </Container>
    </Container>
  );
}
