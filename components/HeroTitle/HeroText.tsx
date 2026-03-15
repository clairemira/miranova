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
          I build and maintain software systems, translating ambiguous
          requirements into structures that remain stable over time. Alongside
          engineering, I publish exploratory work on emergence, constraint, and
          the principles behind organised complexity.
        </Text>
      </Container>
    </Container>
  );
}
