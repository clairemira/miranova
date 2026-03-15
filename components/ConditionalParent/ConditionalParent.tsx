import { JSX, PropsWithChildren, ReactNode } from "react";

export type ConditionalParentProps = PropsWithChildren & {
  condition: boolean;
  parent: (children: ReactNode) => JSX.Element;
};

export default function ConditionalParent({
  condition,
  parent,
  children,
}: ConditionalParentProps) {
  return condition ? parent(children) : children;
}
