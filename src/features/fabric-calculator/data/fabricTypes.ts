// features/fabric-yardage/data/fabricTypes.ts

import { FabricType, FabricTypeId } from "../types";

export const FABRIC_TYPES: FabricType[] = [
  {
    id: "woven",
    label: "Woven Fabric",
    description: "Non-stretch fabrics like cotton, poplin, and broadcloth.",

    multiplier: 1,

    recommendedNeedle: "Universal Needle 80/12",

    recommendedThread: "All-purpose Polyester Thread",

    recommendedFoot: "Standard Presser Foot",
  },

  {
    id: "lightweight-woven",
    label: "Lightweight Woven",
    description: "Light fabrics such as voile, rayon, and chiffon.",

    multiplier: 1.1,

    recommendedNeedle: "Microtex Needle 70/10",

    recommendedThread: "Lightweight Polyester Thread",

    recommendedFoot: "Walking Foot",
  },

  {
    id: "knit",
    label: "Knit Fabric",
    description: "Soft stretchy fabrics used for t-shirts and casual wear.",

    multiplier: 1.05,

    recommendedNeedle: "Ballpoint Needle 80/12",

    recommendedThread: "Stretch Polyester Thread",

    recommendedFoot: "Walking Foot",
  },

  {
    id: "stretch-knit",
    label: "Stretch Knit",
    description: "High stretch fabrics like jersey and spandex blends.",

    multiplier: 1.15,

    recommendedNeedle: "Stretch Needle 75/11",

    recommendedThread: "Elastic Polyester Thread",

    recommendedFoot: "Walking Foot",
  },

  {
    id: "denim",
    label: "Denim",
    description: "Heavy woven fabric for jeans, jackets, and bags.",

    multiplier: 1.15,

    recommendedNeedle: "Denim Needle 90/14",

    recommendedThread: "Heavy Duty Polyester Thread",

    recommendedFoot: "Jeans Foot",
  },

  {
    id: "canvas",
    label: "Canvas",
    description: "Heavy-duty fabric for bags and home projects.",

    multiplier: 1.2,

    recommendedNeedle: "Heavy Duty Needle 100/16",

    recommendedThread: "Heavy Polyester Thread",

    recommendedFoot: "Walking Foot",
  },

  {
    id: "linen",
    label: "Linen",
    description: "Natural breathable fabric with slight shrinkage.",

    multiplier: 1.1,

    recommendedNeedle: "Universal Needle 80/12",

    recommendedThread: "Cotton Wrapped Polyester Thread",

    recommendedFoot: "Standard Presser Foot",
  },

  {
    id: "quilting-cotton",
    label: "Quilting Cotton",
    description: "Cotton fabric commonly used for quilts and crafts.",

    multiplier: 1,

    recommendedNeedle: "Universal Needle 80/12",

    recommendedThread: "Cotton Thread",

    recommendedFoot: "Quarter Inch Quilting Foot",
  },
];

export const FABRIC_TYPE_OPTIONS = FABRIC_TYPES.map((fabric) => ({
  value: fabric.id,
  label: fabric.label,
}));

export function getFabricType(id: FabricTypeId): FabricType {
  return FABRIC_TYPES.find((fabric) => fabric.id === id) ?? FABRIC_TYPES[0];
}
