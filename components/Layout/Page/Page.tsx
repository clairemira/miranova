import { PropsWithChildren } from "react";
import { FooterLinks } from "../../FooterLinks/FooterLinks";
import classes from "./Page.module.css";
import DotsWrapper from "../DotsWrapper/DotsWrapper";
import { Affix, Group } from "@mantine/core";
import YinYangToggle from "../../YinYangToggle/YinYangToggle";
import ScrollToTopButton from "../../ScrollToTopButton/ScrollToTopButton";

export default function Page({ children }: PropsWithChildren) {
  return (
    <>
      <div className={classes.root}>
        <DotsWrapper>{children}</DotsWrapper>
        <Affix position={{ bottom: "xs", right: "lg" }}>
          <Group gap="sm">
            <ScrollToTopButton />
            <YinYangToggle />
          </Group>
        </Affix>
      </div>
      <FooterLinks />
    </>
  );
}
