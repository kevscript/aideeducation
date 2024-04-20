import { getStatistics } from "@/cms/api";
import { StatisticContent } from "./statistic-content";

export async function StatisticSection() {
  const statistics = await getStatistics();

  if (!statistics || statistics.length === 0) {
    return null;
  }

  return <StatisticContent statistics={statistics} />;
}
