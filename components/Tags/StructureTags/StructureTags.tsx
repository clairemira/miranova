import { Group } from "@mantine/core";
import Tag, { TagProps } from "../Tag/Tag";

const tags: TagProps[] = [
  {
    label: "Synergetics",
    name: "Synergetics",
  },
  {
    label: "Cybernetics",
    name: "Cybernetics",
  },
  {
    label: "Cloud Architecture",
    name: "CloudArchitecture",
  },
];

export default function ProfessionalTags() {
  return (
    <Group>
      {tags.map((tag) => (
        <Tag key={tag.name} {...tag} variant="light" color="indigo" size="xs" />
      ))}
    </Group>
  );
}
