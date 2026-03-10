import { Container, Group, Space, Stack } from "@mantine/core";
import { HeroText } from "../components/HeroTitle/HeroText";
import ProfileLinks from "../components/ProfileLinks/ProfileLinks";
import PersonalWork from "../components/PersonalWork/PersonalWork";
import ProfessionalWork from "../components/ProfessionalWork/ProfessionalWork";
import PersonalTags from "../components/Tags/PersonalTags/PersonalTags";
import ProfessionalTags from "../components/Tags/ProfessionalTags/ProfessionalTags";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Claire Mira Shaw",
    url: "https://miranova.dev",
    sameAs: [
      "https://www.linkedin.com/in/clairemirashaw",
      // Add ORCID, SciProfiles, GitHub etc
    ],
    jobTitle: "Software Engineer",
  };

  return (
    <Stack>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroText />

      <Container size="lg" mt="xl">
        <ProfileLinks />
      </Container>

      <Container size="lg" mt="xl">
        <Stack>
          <Group justify="center">
            <PersonalWork />
          </Group>

          <Group justify="center">
            <ProfessionalWork />
          </Group>

          <Space h="xl" />
        </Stack>
      </Container>

      {/* <Group>
        <EmploymentSection />
        <ProjectSection />
      </Group> */}
    </Stack>
  );
}
