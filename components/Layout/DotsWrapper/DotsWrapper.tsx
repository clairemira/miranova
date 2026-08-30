import { Box } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./DotsWrapper.module.css";
import { PropsWithChildren } from "react";

export type DotsWrapperProps = PropsWithChildren & {
  hidden?: boolean;
};

export default function DotsWrapper({ children, hidden = false }: DotsWrapperProps) {
  return (
    <Box className={classes.wrapper}>
      {!hidden && (
        <Box className={classes.dotLayer}>
          <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
          <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
          <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
          <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
        </Box>
      )}

      <Box className={classes.content}>{children}</Box>
    </Box>
  );
}
