import { Group } from "@mantine/core";
import Tag, { TagProps } from "../Tag/Tag";

const tags: TagProps[] = [
  {
    label: "Synergetics",
    name: "Synergetics",
    color: "indigo",
  },
  {
    label: "Complex Systems",
    name: "ComplexSystems",
  },
  {
    label: "Emergence",
    name: "Emergence",
  },
  {
    label: "Structure",
    name: "Structure",
  },
  {
    label: "Cybernetics",
    name: "Cybernetics",
    color: "indigo",
  },
];

export default function PersonalTags() {
  return (
    <Group>
      {tags.map((tag) => (
        <Tag key={tag.name} {...tag} />
      ))}
    </Group>
  );
}
