"use client";

import Link from "next/link";
import { Anchor, MantineSize, UnstyledButton } from "@mantine/core";
import type { PropsWithChildren } from "react";

type SmartLinkProps = PropsWithChildren & {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  size?: MantineSize;
};

export default function SmartLink({
  href,
  children,
  style,
  size,
  ...props
}: SmartLinkProps) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  const combinedStyle = {
    //
    ...style,
  };

  const combinedProps = {
    size,
    href,
    target: href.startsWith("http") ? "_blank" : undefined,
    rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
    ...props,
  };

  const ParentComponent =
    typeof children === "string" ? Anchor : UnstyledButton;

  if (isExternal) {
    return (
      <ParentComponent component="a" style={combinedStyle} {...combinedProps}>
        {children}
      </ParentComponent>
    );
  }

  return (
    <ParentComponent component={Link} style={combinedStyle} {...combinedProps}>
      {children}
    </ParentComponent>
  );
}
