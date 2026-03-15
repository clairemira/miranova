"use client";

import { useRef } from "react";
import cx from "clsx";
import { Box, Container, RemoveScroll, Text } from "@mantine/core";
import { useWindowEvent } from "@mantine/hooks";
import classes from "./FooterLinks.module.css";
import { LinksGroupProps } from "./LinksGroup/LinksGroup";
import { LinksGroup } from "./LinksGroup/LinksGroup";
import SmartLink from "../SmartLink/SmartLink";

export const footerLinks: LinksGroupProps[] = [
  {
    title: "Profiles",
    data: [
      {
        type: "link",
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/clairemirashaw",
      },
      {
        type: "link",
        label: "GitHub",
        link: "https://github.com/clairemira",
      },
      {
        type: "link",
        label: "ORCID",
        link: "https://orcid.org/0009-0006-9340-585X",
      },
      {
        type: "link",
        label: "SciProfiles",
        link: "https://sciprofiles.com/profile/clairemirashaw",
      },
    ],
  },
  {
    title: "Projects",
    data: [
      { type: "next", label: "The Miranova Matrix", link: "/matrix" },
      { type: "next", label: "The Commons", link: "/commons" },
    ],
  },
];

function getRemainingScrollDistance() {
  const scrollTop = document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const remainingScrollDistance = documentHeight - (scrollTop + viewportHeight);
  return remainingScrollDistance;
}

export function FooterLinks() {
  const ref = useRef<HTMLElement>(null);
  const groups = footerLinks.map((group) => (
    <LinksGroup data={group.data} title={group.title} key={group.title} />
  ));

  // useWindowEvent("scroll", () => {
  //   const diff = getRemainingScrollDistance() - 30;
  //   if (ref.current) {
  //     const translate = diff > 0 ? diff / 2 : 0;
  //     ref.current.style.transform = `translateY(${translate}px)`;
  //   }
  // });

  return (
    <div className={classes.root}>
      <div className={classes.spacer} />
      <Box component="footer" ref={ref}>
        <Container size="lg">
          <div className={classes.inner}>
            <Text fz="xs" c="dimmed" className={classes.afterFooterNote}>
              © 2026 Claire Mira Shaw · Built with{" "}
              <SmartLink size="xs" href="https://mantine.dev">
                Mantine
              </SmartLink>
              .
            </Text>

            <div className={classes.groups}>{groups}</div>
          </div>
        </Container>
      </Box>
    </div>
  );
}
