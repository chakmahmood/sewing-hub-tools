// features/fabric-yardage/data/recommendations.ts

import { RecommendationMap } from "../types";

/**
 * Project based recommendations
 *
 * Fabric specific items are handled by:
 * fabricRecommendations.ts
 *
 * This file only contains:
 * - patterns
 * - closures
 * - project tools
 * - project accessories
 */

export const RECOMMENDATIONS: RecommendationMap = {
  dress: [
    {
      id: "dress-pattern",

      title: "Dress Sewing Pattern",

      description: "Printable beginner-friendly dress pattern templates.",

      category: "pattern",

      featured: true,
    },

    {
      id: "dress-measuring-tape",

      title: "Flexible Measuring Tape",

      description:
        "Essential for accurate garment measurements and fitting adjustments.",

      category: "tool",
    },
  ],

  shirt: [
    {
      id: "shirt-pattern",

      title: "Shirt Sewing Pattern",

      description: "Printable shirt pattern for home sewing projects.",

      category: "pattern",

      featured: true,
    },

    {
      id: "shirt-buttons",

      title: "Shirt Buttons",

      description: "Classic buttons for shirts and blouse projects.",

      category: "notion",
    },

    {
      id: "fusible-interfacing",

      title: "Fusible Interfacing",

      description: "Adds structure to collars, cuffs, and button areas.",

      category: "fabric",
    },
  ],

  pants: [
    {
      id: "pants-pattern",

      title: "Pants Sewing Pattern",

      description: "Adjustable trouser pattern for DIY sewing.",

      category: "pattern",

      featured: true,
    },

    {
      id: "pants-zipper",

      title: "Zipper",

      description: "Essential closure component for pants and trousers.",

      category: "notion",
    },
  ],

  hoodie: [
    {
      id: "hoodie-pattern",

      title: "Hoodie Sewing Pattern",

      description: "Printable hoodie pattern for beginners.",

      category: "pattern",

      featured: true,
    },

    {
      id: "ribbing",

      title: "Rib Knit Fabric",

      description: "Used for hoodie cuffs, collars, and waistband.",

      category: "fabric",
    },
  ],

  quilt: [
    {
      id: "quilting-ruler",

      title: "Quilting Ruler",

      description: "Makes precise fabric measurements easier.",

      category: "tool",
    },

    {
      id: "cotton-batting",

      title: "Cotton Batting",

      description: "Soft filling layer for quilt projects.",

      category: "fabric",
    },

    {
      id: "binding-clips",

      title: "Binding Clips",

      description: "Keeps quilt layers aligned during assembly.",

      category: "notion",
    },
  ],
};

export default RECOMMENDATIONS;
