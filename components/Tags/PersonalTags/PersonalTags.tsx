import { Group } from "@mantine/core";
import Tag, { TagProps } from "../Tag/Tag";

const tags: TagProps[] = [
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
