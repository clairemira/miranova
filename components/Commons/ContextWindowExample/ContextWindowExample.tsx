import { ContextWindowDatum } from "../ContextWindowChart/ContextWindowChart";
import {
  ContextWindowComparison,
  ContextWindowExperiment,
} from "../ContextWindowComparison/ContextWindowComparison";

const ADVERTISED_CONTEXT = {
  "o4-mini": 200_000,
  "DeepSeek R1": 128_000,
} as const;

function createContextDatum(
  model: keyof typeof ADVERTISED_CONTEXT,
  effectiveContext: number,
  rightCensored = false,
): ContextWindowDatum {
  const advertisedContext = ADVERTISED_CONTEXT[model];

  if (effectiveContext > advertisedContext) {
    throw new Error(`Effective context for ${model} cannot exceed advertised context`);
  }

  return {
    model,
    effectiveContext,
    unusedAdvertisedContext: advertisedContext - effectiveContext,
    rightCensored,
  };
}

const experiments: ContextWindowExperiment[] = [
  {
    id: "needles",
    title: "Needles in a Haystack",
    description: "Effective context before two consecutive buckets fall below 95% accuracy.",
    data: [createContextDatum("o4-mini", 1_300), createContextDatum("DeepSeek R1", 900)],
  },
  {
    id: "summary",
    title: "Summary Question",
    description:
      "A right-censored value means degradation was not established within the tested range.",
    data: [createContextDatum("o4-mini", 2_000, true), createContextDatum("DeepSeek R1", 900)],
  },
];

export function ContextWindowExample() {
  return (
    <ContextWindowComparison
      description="The indigo portion represents context demonstrated by the benchmark. The grey portion represents advertised capacity beyond that measured effective range."
      experiments={experiments}
    />
  );
}
