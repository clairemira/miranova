import { Grid, GridCol } from "@mantine/core";
import {
  IconBinaryTree2,
  IconBulb,
  IconWhirl,
  IconEditCircle,
  IconHexagon,
  IconReceipt,
  IconUserHexagon,
} from "@tabler/icons-react";
import Feature, { FeatureProps } from "./Feature";

const features: FeatureProps[] = [
  {
    name: "Charge",
    Icon: IconHexagon,
  },
  {
    name: "Participant",
    Icon: IconUserHexagon,
  },
  {
    name: "Proposition",
    Icon: IconBulb,
  },
  {
    name: "Attestation",
    Icon: IconWhirl,
  },
  {
    name: "Supersession",
    Icon: IconBinaryTree2,
  },
  {
    name: "Receipt",
    Icon: IconReceipt,
  },
];

export default function ConceptFeatures() {
  return (
    <Grid gutter="md" my="lg">
      {features.map((feature) => (
        <GridCol key={feature.name} span={{ base: 4, md: 2 }}>
          <Feature {...feature} />
        </GridCol>
      ))}
    </Grid>
  );
}
