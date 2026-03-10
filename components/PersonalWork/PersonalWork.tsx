import { Action, ActionsGrid } from "../ActionsGrid/ActionsGrid";
import { Image } from "@mantine/core";
import PersonalTags from "../Tags/PersonalTags/PersonalTags";

export default function PersonalWork() {
  const actions: Action[] = [
    {
      title: "The Miranova Matrix",
      caption: "An operational framework exploring emergent structure.",
      upperSection: (
        <Image
          h="80"
          w="auto"
          fit="contain"
          src="/images/miranova-matrix-transparent.png"
        />
      ),
    },
    {
      title: "The Commons",
      caption: "A multi-parcipant cognitive substrate.",
      upperSection: (
        <Image
          h="80"
          w="auto"
          fit="contain"
          src="/images/commons-transparent.png"
        />
      ),
    },
  ];

  return (
    <ActionsGrid
      gridTitle="Personal Work"
      actions={actions}
      cols={actions.length}
    />
  );
}
