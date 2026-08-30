"use client";

import { SegmentedControl, Text, Stack, Select } from "@mantine/core";
import { ContextWindowChart, ContextWindowDatum } from "../ContextWindowChart/ContextWindowChart";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

export type ContextWindowExperiment = {
  title: string;
  description?: string;
  data: ContextWindowDatum[];
};

const ADVERTISED_CONTEXT = {
  "Gemini 2.5 Flash": 1_048_576,
  "o4-mini": 200_000,
  "GPT-4.1": 1_047_576,
  "DeepSeek R1": 128_000,
  "Gemini 2.0 Flash": 1_000_000,
  "Claude 3.5 Sonnet": 200_000,
} as const;

const MODEL_META = {
  "Gemini 2.5 Flash": {
    label: "Gemini 2.5 Flash (May 2025)",
    releasedAt: "2025-05",
  },
  "o4-mini": {
    label: "o4-mini (Apr 2025)",
    releasedAt: "2025-04",
  },
  "GPT-4.1": {
    label: "GPT-4.1 (Apr 2025)",
    releasedAt: "2025-04",
  },
  "DeepSeek R1": {
    label: "DeepSeek R1 (Jan 2025)",
    releasedAt: "2025-01",
  },
  "Gemini 2.0 Flash": {
    label: "Gemini 2.0 Flash (Feb 2025)",
    releasedAt: "2025-02",
  },
  "Claude 3.5 Sonnet": {
    label: "Claude 3.5 Sonnet (Oct 2024)",
    releasedAt: "2024-10",
  },
} as const;

type Model = keyof typeof ADVERTISED_CONTEXT;

function createContextDatum(
  model: Model,
  effectiveContext: number,
  rightCensored = false,
): ContextWindowDatum {
  const advertisedContext = ADVERTISED_CONTEXT[model];

  if (effectiveContext > advertisedContext) {
    throw new Error(`Effective context for ${model} cannot exceed advertised context`);
  }

  return {
    model: MODEL_META[model].label,
    effectiveContext,
    unusedAdvertisedContext: advertisedContext - effectiveContext,
    rightCensored,
  };
}

const experiments = {
  needle: {
    title: "Needle in a Haystack",
    description: "Retrieve one piece of information from a large context.",
    data: [
      createContextDatum("o4-mini", 5_000),
      createContextDatum("DeepSeek R1", 10_000),
      createContextDatum("Gemini 2.0 Flash", 30_000),
    ],
  },

  needles: {
    title: "Needles in a Haystack",
    description: "Retrieve multiple pieces of information across a large context.",
    data: [
      createContextDatum("o4-mini", 1_300),
      createContextDatum("DeepSeek R1", 900),
      createContextDatum("Gemini 2.0 Flash", 0),
    ],
  },

  sort: {
    title: "Sort Question",
    description: "Sort information correctly as the amount of context increases.",
    data: [
      createContextDatum("o4-mini", 500),
      createContextDatum("DeepSeek R1", 400),
      createContextDatum("Gemini 2.0 Flash", 0),
    ],
  },

  summary: {
    title: "Summary Question",
    description: "Summarise information accurately as the amount of context increases.",
    data: [
      createContextDatum("o4-mini", 2_000, true),
      createContextDatum("DeepSeek R1", 900),
      createContextDatum("Gemini 2.0 Flash", 0),
    ],
  },
};

export type ProblemType = keyof typeof experiments;

export default function ContextWindowExample() {
  const [selectedProblem, setSelectedProblem] = useState<ProblemType>("needle");
  const isLargeScreen = useMediaQuery("(min-width: 56.25em)");

  const data = Object.entries(experiments).map(([id, e]) => ({ label: e.title, value: id }));
  const Selector = isLargeScreen ? SegmentedControl : Select;

  return (
    <ContextWindowChart
      header={
        <Stack gap={0} align="center">
          <Selector
            data={data}
            value={selectedProblem}
            onChange={(val) => setSelectedProblem((val ?? "needle") as ProblemType)}
          />
          <Text c="dimmed" size="sm" my={4}>
            {experiments[selectedProblem].description}
          </Text>
        </Stack>
      }
      data={experiments[selectedProblem].data}
    />
  );
}
