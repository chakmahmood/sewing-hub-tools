import { RecommendationItem } from "../types";

import { RECOMMENDATIONS } from "../data/recommendations";

import { FABRIC_RECOMMENDATIONS } from "../data/fabricRecommendations";

interface RecommendationParams {
  project: keyof typeof RECOMMENDATIONS;

  fabricType: keyof typeof FABRIC_RECOMMENDATIONS;
}

/**
 * Merge project + fabric recommendations
 * Remove duplicates
 * Prioritize featured items
 */
export function getRecommendations({
  project,
  fabricType,
}: RecommendationParams): RecommendationItem[] {
  const projectItems = RECOMMENDATIONS[project] ?? [];

  const fabricItems = FABRIC_RECOMMENDATIONS[fabricType] ?? [];

  const merged = [...fabricItems, ...projectItems];

  const unique = Array.from(
    new Map(merged.map((item) => [item.title, item])).values(),
  );

  return unique
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      return 0;
    })
    .slice(0, 8);
}
