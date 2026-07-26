// import { Badge, Group, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
// //import { BarChart } from "@mantine/charts";

// export type ContextWindowDatum = {
//   model: string;

//   /**
//    * Effective context window derived from the benchmark.
//    */
//   effectiveContext: number;

//   /**
//    * The remainder of the advertised context window.
//    *
//    * advertisedContext =
//    * effectiveContext + unusedAdvertisedContext
//    */
//   unusedAdvertisedContext: number;

//   /**
//    * Optional flag for values where the benchmark did not observe
//    * degradation before the final tested bucket.
//    */
//   rightCensored?: boolean;
// };

// export type ContextWindowChartProps = {
//   title: string;
//   description?: string;
//   data: ContextWindowDatum[];
//   height?: number;
// };

// function formatTokens(value: number): string {
//   return new Intl.NumberFormat("en-GB", {
//     notation: "compact",
//     maximumFractionDigits: 1,
//   }).format(value);
// }

// export function ContextWindowChart({
//   title,
//   description,
//   data,
//   height = 340,
// }: ContextWindowChartProps) {
//   return (
//     <Paper withBorder radius="md" p="lg">
//       <Stack gap="lg">
//         <div>
//           <Group justify="space-between" align="flex-start">
//             <div>
//               <Title order={3}>{title}</Title>

//               {description && (
//                 <Text c="dimmed" size="sm" mt={4}>
//                   {description}
//                 </Text>
//               )}
//             </div>

//             <Badge variant="light" color="indigo">
//               Effective vs advertised
//             </Badge>
//           </Group>
//         </div>

//         <BarChart
//           h={height}
//           data={data}
//           dataKey="model"
//           type="stacked"
//           withLegend
//           yAxisLabel="Tokens"
//           valueFormatter={formatTokens}
//           series={[
//             {
//               name: "effectiveContext",
//               label: "Effective context",
//               color: "indigo.6",
//             },
//             {
//               name: "unusedAdvertisedContext",
//               label: "Unverified advertised capacity",
//               color: "gray.3",
//             },
//           ]}
//           legendProps={{
//             verticalAlign: "bottom",
//             height: 50,
//           }}
//           yAxisProps={{
//             width: 72,
//           }}
//           xAxisProps={{
//             tickMargin: 10,
//           }}
//           tooltipAnimationDuration={150}
//           barProps={{
//             radius: 4,
//           }}
//         />

//         <Stack gap={6}>
//           {data.map((item) => {
//             const advertisedContext = item.effectiveContext + item.unusedAdvertisedContext;

//             const percentage =
//               advertisedContext > 0 ? (item.effectiveContext / advertisedContext) * 100 : 0;

//             return (
//               <Group key={item.model} justify="space-between" wrap="nowrap">
//                 <Text size="sm" fw={500}>
//                   {item.model}
//                 </Text>

//                 <Text size="sm" c="dimmed" ta="right">
//                   {item.rightCensored ? "≥ " : ""}
//                   {formatTokens(item.effectiveContext)} effective of{" "}
//                   {formatTokens(advertisedContext)} advertised
//                   {" · "}
//                   {percentage.toFixed(2)}%
//                 </Text>
//               </Group>
//             );
//           })}
//         </Stack>
//       </Stack>
//     </Paper>
//   );
// }
