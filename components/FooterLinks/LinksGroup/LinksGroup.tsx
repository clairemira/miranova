import Link from "next/link";
import { Text } from "@mantine/core";
import classes from "./LinksGroup.module.css";
import SmartLink from "../../SmartLink/SmartLink";

export interface LinksGroupProps {
  title: string;
  data: {
    type: "link" | "next";
    link: string;
    label: string;
  }[];
}

export function LinksGroup({ data, title }: LinksGroupProps) {
  const links = data.map((item) => (
    <SmartLink className={classes.link} href={item.link} key={item.label}>
      {item.label}
    </SmartLink>
  ));

  return (
    <div className={classes.wrapper}>
      <Text className={classes.title}>{title}</Text>
      {links}
    </div>
  );
}
