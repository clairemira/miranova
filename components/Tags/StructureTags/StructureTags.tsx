import { Group } from "@mantine/core";
import Tag, { TagProps } from "../Tag/Tag";

const tags: TagProps[] = [
  {
    label: "Synergetics",
    name: "Synergetics",
    color: "indigo",
  },
  {
    label: "Cybernetics",
    name: "Cybernetics",
    color: "indigo",
  },
];

export default function StructureTags() {
  return (
    <Group>
      {tags.map((tag) => (
        <Tag key={tag.name} {...tag} variant="light" color="indigo" size="xs" />
      ))}
    </Group>
  );
}
