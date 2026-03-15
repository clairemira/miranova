import { PropsWithChildren } from "react";
import { FooterLinks } from "../../FooterLinks/FooterLinks";
import classes from "./Page.module.css";
import DotsWrapper from "../DotsWrapper/DotsWrapper";
import { Box } from "@mantine/core";
import YinYangToggle from "../../YinYangToggle/YinYangToggle";

export default function Page({ children }: PropsWithChildren) {
  return (
    <>
      <div className={classes.root}>
        <DotsWrapper>
          <YinYangToggle />
          {children}
        </DotsWrapper>
      </div>
      <FooterLinks />
    </>
  );
}
