import { Group } from "@mantine/core";
import Tag, { TagProps } from "../Tag/Tag";

const tags: TagProps[] = [
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
];

export default function ProfessionalTags() {
  return (
    <Group>
      {tags.map((tag) => (
        <Tag key={tag.name} {...tag} />
      ))}
    </Group>
  );
}
