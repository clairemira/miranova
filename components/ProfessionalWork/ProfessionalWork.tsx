import { Action, ActionsGrid } from "../ActionsGrid/ActionsGrid";
import { Image } from "@mantine/core";

export default function ProfessionalWork() {
  const actions: Action[] = [
    {
      title: "Woodina Underwriting Agency",
      caption: "Technical Lead",
      link: "https://woodina.com.au",
      description:
        "At Woodina Underwriting Agency, I lead the engineering of the systems that underpin our insurance platform.",
      upperSection: (
        <Image h="80" w="auto" fit="contain" src="/images/woodina-w.png" />
      ),
      tags: [
        {
          label: "Insurance",
          name: "Insurance",
        },
        {
          label: "Software Engineering",
          name: "SoftwareEngineering",
        },
        {
          label: "Distributed Systems",
          name: "DistributedSystems",
        },
        {
          label: "Cloud Architecture",
          name: "CloudArchitecture",
        },
      ],
    },
  ];

  return <ActionsGrid gridTitle="Professional Work" actions={actions} />;
}
