import { Action, ActionsGrid } from "../ActionsGrid/ActionsGrid";
import { Image } from "@mantine/core";

export default function PersonalWork() {
  const actions: Action[] = [
    {
      title: "The Miranova Matrix",
      link: "/matrix",
      description:
        "An operational framework for exploring how structure emerges through constrained participation.",
      upperSection: (
        <Image
          h="80"
          w="auto"
          fit="contain"
          src="/images/miranova-matrix-logo-bordered.png"
        />
      ),
      tags: [
        {
          label: "Cybernetics",
          name: "Cybernetics",
        },
        {
          label: "Complex Systems",
          name: "ComplexSystems",
        },
        {
          label: "Structure",
          name: "Structure",
        },
      ],
    },
    {
      title: "The Commons",
      link: "/commons",
      description:
        "A shared cognitive substrate where participants explore ideas and emergent structure together.",
      upperSection: (
        <Image
          h="80"
          w="auto"
          fit="contain"
          src="/images/commons-bordered.png"
        />
      ),
      tags: [
        {
          label: "Synergetics",
          name: "Synergetics",
        },
        {
          label: "Emergence",
          name: "Emergence",
        },
        {
          label: "Sensemaking",
          name: "Sensemaking",
        },
      ],
    },
  ];

  return (
    <ActionsGrid
      gridTitle="Personal Work"
      actions={actions}
      span={{ base: 12, md: 6 }}
    />
  );
}
