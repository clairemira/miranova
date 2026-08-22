import {
  IconBrandMantine,
  IconBrandTabler,
  IconBrandWikipedia,
  IconFile,
  IconKeyboard,
  IconPhoto,
} from "@tabler/icons-react";
import { Container, Group, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import classes from "./Biases.module.css";
import SmartLink from "../SmartLink/SmartLink";

export const biases = [
  {
    icon: IconFile,
    title: "The Big Issue",
    description: "I'm a huge supporter of the kind people that make up the pillars of our community.",
    link: "https://thebigissue.org.au",
  },
  {
    icon: IconKeyboard,
    title: "Keychron",
    description:
      "Customisable mechanical keyboards that strike a balance between quality hardware and thoughtful design. Satisfying to type on every day.",
    link: "https://keychron.com.au",
  },
  {
    icon: IconBrandWikipedia,
    title: "Wikipedia",
    description:
      "The largest collaborative knowledge project in human history. A testament to what open knowledge and collective effort can achieve.",
    link: "https://www.wikipedia.org",
  },
  {
    icon: IconBrandMantine,
    title: "Mantine",
    description:
      "A thoughtfully designed React component library that makes building polished, accessible interfaces effortless.",
    link: "https://mantine.dev",
  },
  {
    icon: IconBrandTabler,
    title: "Tabler Icons",
    description:
      "A beautifully crafted open-source icon set. Clean, consistent, and perfectly suited for modern UI design without visual noise.",
    link: "https://tabler.io/icons",
  },
  {
    icon: IconPhoto,
    title: "Photopea",
    description:
      "Free online version of Photoshop, directly in your browser.",
    link: "https://www.photopea.com",
  },
  {
    icon: IconFile,
    title: "LibreOffice",
    description: "Free and open-source office suite.",
    link: "https://www.libreoffice.org",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  link: string;
}

export function Feature({ icon: Icon, link, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" color="blue" size={40} radius={40}>
        <Icon size={18} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
      <Group mt="sm">
        <SmartLink size="sm" href={link}>
          {link}
        </SmartLink>
      </Group>
    </div>
  );
}

export function Biases() {
  const features = biases.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Biases</Title>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
