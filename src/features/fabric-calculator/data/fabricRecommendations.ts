// features/fabric-yardage/data/fabricRecommendations.ts

import { FabricTypeId, RecommendationItem } from "../types";

export const FABRIC_RECOMMENDATIONS: Record<
  FabricTypeId,
  RecommendationItem[]
> = {
  woven: [
    {
      id: "woven-needle",

      title: "Universal Needle 80/12",

      description:
        "Standard needle for cotton, poplin, rayon, and everyday woven fabrics.",

      category: "needle",

      featured: true,
    },

    {
      id: "woven-thread",

      title: "All Purpose Polyester Thread",

      description:
        "Reliable thread choice for everyday garment sewing projects.",

      category: "thread",
    },
  ],

  "lightweight-woven": [
    {
      id: "microtex-needle",

      title: "Microtex Needle",

      description:
        "Sharp needle designed for lightweight and delicate fabrics.",

      category: "needle",

      featured: true,
    },

    {
      id: "fine-thread",

      title: "Fine Polyester Thread",

      description:
        "Lightweight thread suitable for chiffon, voile, and rayon fabrics.",

      category: "thread",
    },

    {
      id: "fabric-clips",

      title: "Wonder Clips",

      description:
        "Helps secure slippery lightweight fabrics without damaging fibers.",

      category: "notion",
    },
  ],

  knit: [
    {
      id: "ballpoint-needle",

      title: "Ballpoint Needle",

      description: "Designed for knit fabrics without damaging fabric loops.",

      category: "needle",

      featured: true,
    },

    {
      id: "stretch-thread",

      title: "Stretch Polyester Thread",

      description: "Provides flexibility for knit garment seams.",

      category: "thread",
    },

    {
      id: "walking-foot",

      title: "Walking Foot",

      description: "Improves feeding control on stretchy fabrics.",

      category: "tool",
    },
  ],

  "stretch-knit": [
    {
      id: "stretch-needle",

      title: "Stretch Sewing Needle",

      description: "Recommended for jersey, spandex, and high-stretch fabrics.",

      category: "needle",

      featured: true,
    },

    {
      id: "stretch-thread-premium",

      title: "Elastic Stretch Thread",

      description: "Allows seams to move naturally with stretch fabrics.",

      category: "thread",
    },

    {
      id: "stretch-foot",

      title: "Walking Foot",

      description: "Improves control when sewing slippery stretch materials.",

      category: "tool",
    },
  ],

  denim: [
    {
      id: "denim-needle",

      title: "Denim Needle 90/14",

      description:
        "Heavy duty needle designed for denim and thick woven fabrics.",

      category: "needle",

      featured: true,
    },

    {
      id: "heavy-duty-thread",

      title: "Heavy Duty Thread",

      description: "Strong thread for durable seams and top stitching.",

      category: "thread",
    },

    {
      id: "heavy-duty-zipper",

      title: "Heavy Duty Zipper",

      description:
        "Strong zipper option for jackets, skirts, dresses, and bags.",

      category: "notion",
    },
  ],

  canvas: [
    {
      id: "canvas-needle",

      title: "Heavy Duty Needle",

      description: "Handles thick canvas and heavy sewing projects.",

      category: "needle",

      featured: true,
    },

    {
      id: "poly-core-thread",

      title: "Heavy Polyester Thread",

      description: "Strong thread for bags, accessories, and canvas projects.",

      category: "thread",
    },

    {
      id: "heavy-machine-foot",

      title: "Heavy Duty Sewing Foot",

      description: "Provides better control on thick materials.",

      category: "tool",
    },
  ],

  linen: [
    {
      id: "linen-needle",

      title: "Universal Needle 80/12",

      description: "Suitable for lightweight linen garments.",

      category: "needle",

      featured: true,
    },

    {
      id: "linen-thread",

      title: "Cotton Blend Thread",

      description: "Creates smooth seams on natural fiber fabrics.",

      category: "thread",
    },

    {
      id: "pressing-tools",

      title: "Tailor Pressing Tools",

      description: "Helps achieve professional linen garment finishes.",

      category: "tool",
    },
  ],

  "quilting-cotton": [
    {
      id: "quilting-needle",

      title: "Quilting Needle",

      description: "Fine needle designed for cotton quilting layers.",

      category: "needle",

      featured: true,
    },

    {
      id: "cotton-thread",

      title: "Cotton Quilting Thread",

      description: "Creates strong and clean quilting stitches.",

      category: "thread",
    },

    {
      id: "quilting-ruler",

      title: "Quilting Ruler",

      description: "Makes accurate fabric cutting easier.",

      category: "tool",
    },
  ],
};

export default FABRIC_RECOMMENDATIONS;
