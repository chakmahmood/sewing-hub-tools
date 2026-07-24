import { ProjectId, SizeId, SleeveId } from "../types";

export type ProjectDatabase = Record<
  ProjectId,
  {
    label: string;

    base: Record<SizeId, Record<SleeveId, number>>;
  }
>;

function flatProject(base: number) {
  const sizes: SizeId[] = ["xs", "s", "m", "l", "xl", "2xl", "3xl"];

  const result = {} as Record<SizeId, Record<SleeveId, number>>;

  sizes.forEach((size, index) => {
    const value = base + index * 0.25;

    result[size] = {
      none: value,
      short: value,
      "three-quarter": value,
      long: value,
    };
  });

  return result;
}

export const PROJECT_DATABASE: ProjectDatabase = {
  dress: {
    label: "Dress",

    base: {
      xs: { none: 1.5, short: 1.75, "three-quarter": 2, long: 2.25 },

      s: { none: 1.75, short: 2, "three-quarter": 2.25, long: 2.5 },

      m: { none: 2, short: 2.25, "three-quarter": 2.5, long: 2.75 },

      l: { none: 2.25, short: 2.5, "three-quarter": 2.75, long: 3 },

      xl: { none: 2.5, short: 2.75, "three-quarter": 3, long: 3.25 },

      "2xl": { none: 2.75, short: 3, "three-quarter": 3.25, long: 3.5 },

      "3xl": { none: 3, short: 3.25, "three-quarter": 3.5, long: 3.75 },
    },
  },

  shirt: {
    label: "Shirt",

    base: {
      xs: { none: 1.25, short: 1.5, "three-quarter": 1.75, long: 2 },

      s: { none: 1.5, short: 1.75, "three-quarter": 2, long: 2.25 },

      m: { none: 1.75, short: 2, "three-quarter": 2.25, long: 2.5 },

      l: { none: 2, short: 2.25, "three-quarter": 2.5, long: 2.75 },

      xl: { none: 2.25, short: 2.5, "three-quarter": 2.75, long: 3 },

      "2xl": { none: 2.5, short: 2.75, "three-quarter": 3, long: 3.25 },

      "3xl": { none: 2.75, short: 3, "three-quarter": 3.25, long: 3.5 },
    },
  },

  tshirt: {
    label: "T-Shirt",

    base: flatProject(1.5),
  },

  pants: {
    label: "Pants",

    base: flatProject(2.5),
  },

  shorts: {
    label: "Shorts",

    base: flatProject(1.5),
  },

  skirt: {
    label: "Skirt",

    base: flatProject(1.75),
  },

  jacket: {
    label: "Jacket",

    base: flatProject(3),
  },

  hoodie: {
    label: "Hoodie",

    base: flatProject(3),
  },

  "tote-bag": {
    label: "Tote Bag",

    base: flatProject(1),
  },

  apron: {
    label: "Apron",

    base: flatProject(1.25),
  },

  "pillow-cover": {
    label: "Pillow Cover",

    base: flatProject(0.75),
  },

  curtain: {
    label: "Curtain",

    base: flatProject(3),
  },

  "table-runner": {
    label: "Table Runner",

    base: flatProject(1),
  },

  quilt: {
    label: "Quilt",

    base: flatProject(4),
  },
};
