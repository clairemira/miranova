import { PropsWithChildren } from "react";
import { FooterLinks } from "../../FooterLinks/FooterLinks";
import classes from "./Page.module.css";
import DotsWrapper from "../DotsWrapper/DotsWrapper";
import { Affix, Box, Group } from "@mantine/core";
import YinYangToggle from "../../YinYangToggle/YinYangToggle";
import ScrollToTopButton from "../../ScrollToTopButton/ScrollToTopButton";

export type PageProps = PropsWithChildren & {
  hideDots?: boolean;
};

export default function Page({ children, hideDots }: PageProps) {
  return (
    <DotsWrapper hidden={hideDots}>
      <Box className={classes.root}>
        {children}
        <Affix position={{ bottom: "xs", right: "lg" }}>
          <Group gap="sm">
            <ScrollToTopButton />
            <YinYangToggle />
          </Group>
        </Affix>
      </Box>
      <FooterLinks />
    </DotsWrapper>
  );
}
