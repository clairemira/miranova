import { Action, ActionsGrid } from "../ActionsGrid/ActionsGrid";
import { Image } from "@mantine/core";
import ProfessionalTags from "../Tags/ProfessionalTags/ProfessionalTags";

export default function ProfessionalWork() {
  const actions: Action[] = [
    {
      title: "Woodina Underwriting Agency",
      caption: "Maintaining large long-lived legacy system, and lea..",
      upperSection: (
        <Image h="60" w="auto" fit="contain" src="/images/woodina-w.png" />
      ),
    },
  ];

  return (
    <ActionsGrid
      gridTitle="Professional Work"
      actions={actions}
      cols={actions.length}
    />
  );
}
