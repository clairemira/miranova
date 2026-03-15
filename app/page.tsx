import { Box, Container, Divider, Grid, GridCol, Space } from "@mantine/core";
import { HeroText } from "../components/HeroTitle/HeroText";
import ProfileLinks from "../components/ProfileLinks/ProfileLinks";
import PersonalWork from "../components/PersonalWork/PersonalWork";
import ProfessionalWork from "../components/ProfessionalWork/ProfessionalWork";
import { Biases } from "../components/Biases/Biases";
import Page from "../components/Layout/Page/Page";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Claire Mira Shaw",
    url: "https://miranova.dev",
    sameAs: [
      "https://clairemira.github.io",
      "https://github.com/clairemira",
      "https://www.linkedin.com/in/clairemirashaw",
      "https://orcid.org/0009-0006-9340-585X",
      "https://sciprofiles.com/profile/clairemirashaw",
      "https://gravatar.com/clairemirashaw",
    ],
    jobTitle: "Software Engineer",
  };

  return (
    <Page>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Space h="xl" />

      <HeroText />

      <Container size="lg" mt="xl">
        <ProfileLinks />
      </Container>

      <Space h="xl" />

      <Box my="xl">
        <Container size="lg" mt="xl">
          <Grid gutter="lg" justify="center">
            <GridCol span={{ base: 12, sm: 6, md: 8 }}>
              <PersonalWork />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 4 }}>
              <ProfessionalWork />
            </GridCol>
          </Grid>
        </Container>
      </Box>

      <Space h="xl" />

      <Divider mt="xl" />

      <Box bg="light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8))">
        <Biases />
      </Box>
    </Page>
  );
}
