import { Dots } from "./Dots";
import classes from "./DotsWrapper.module.css";
import { PropsWithChildren } from "react";

export type DotsWrapperProps = PropsWithChildren & {};

export default function DotsWrapper({ children }: DotsWrapperProps) {
  return (
    <>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      {children}
    </>
  );
}
