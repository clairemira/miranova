import { Badge, BadgeProps, MantineColor } from "@mantine/core";
import classes from "./DegreeOfFreedomBadge.module.css";
import {
  IconAdjustmentsSpark,
  IconAffiliate,
  IconArrowsShuffle,
  IconEye,
  IconFlame,
  IconMagnet,
  IconProps,
  IconRipple,
  IconSparkles,
  IconWaveSine,
} from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type DegreeOfFreedomType =
  | "coherence"
  | "entropy"
  | "activation"
  | "salience"
  | "excitation"
  | "modality"
  | "stimulus"
  | "valence"
  | "resonance";

export type DegreeOfFreedomMeta = {
  name: string;
  color: MantineColor;
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  textColor?: MantineColor;
};

export const degreesOfFreedom: { [key in DegreeOfFreedomType]: DegreeOfFreedomMeta } = {
  coherence: {
    name: "Coherence",
    Icon: IconAffiliate,
    color: "blue",
  },
  entropy: {
    name: "Entropy",
    Icon: IconArrowsShuffle,
    color: "green",
  },
  activation: {
    name: "Activation",
    Icon: IconFlame,
    color: "red",
  },
  salience: {
    name: "Salience",
    Icon: IconEye,
    color: "white",
    textColor: "black",
  },
  excitation: {
    name: "Excitation",
    Icon: IconRipple,
    color: "orange",
  },
  modality: {
    name: "Modality",
    Icon: IconAdjustmentsSpark,
    color: "black",
  },
  stimulus: {
    name: "Stimulus",
    Icon: IconSparkles,
    color: "yellow",
  },
  valence: {
    name: "Valence",
    Icon: IconMagnet,
    color: "magenta",
  },
  resonance: {
    name: "Resonance",
    Icon: IconWaveSine,
    color: "cyan",
  },
};

export type DegreeOfFreedomProps = BadgeProps & {
  type: DegreeOfFreedomType;
};

export default function DegreeOfFreedomBadge({ type, ...badgeProps }: DegreeOfFreedomProps) {
  const meta = degreesOfFreedom[type];

  return (
    <Badge
      {...badgeProps}
      size="lg"
      className={classes.badge}
      color={meta.color}
      c={meta.textColor}
      leftSection={<meta.Icon className={classes.icon} />}
      variant={"filled"}
    >
      {meta.name}
    </Badge>
  );
}
