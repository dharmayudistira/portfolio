type Project = {
  key: string;
  title: string;
  description: string;
  stacks: string[];
  linkWeb?: string;
  linkPlayStore?: string;
  linkAppStore?: string;
  projectImageUrl: string;
  showcaseAssetUrl: string;
};

export const PROJECTS: Project[] = [
  {
    key: "simpan",
    title: "Simpan - Reksa Dana Transparan",
    description: "Mutual fund investment platform",
    stacks: ["Flutter", "Dart", "Riverpod"],
    linkWeb: "https://www.simpaninvest.com/",
    linkPlayStore:
      "https://play.google.com/store/apps/details?id=com.simpan.mobile.stg",
    linkAppStore:
      "https://apps.apple.com/id/app/simpan-reksa-dana-transparan/id6444825882",
    projectImageUrl: "/images/simpan.webp",
    showcaseAssetUrl: "/images/simpan-showcase.webp",
  },
  {
    key: "kickavenue",
    title: "KickAvenue",
    description: "Largest authentic marketplace",
    stacks: ["Flutter", "Dart", "Riverpod"],
    linkWeb: "https://www.kickavenue.com/",
    linkPlayStore:
      "https://play.google.com/store/apps/details?id=com.kickavenue.androidshop",
    linkAppStore:
      "https://apps.apple.com/id/app/kick-avenue-shop-hype-here/id1478394222",
    projectImageUrl: "/images/kick-avenue.webp",
    showcaseAssetUrl: "/images/kick-avenue-showcase.webp",
  },
  {
    key: "gcbc",
    title: "Global Capacity Building Coalition",
    description: "Resource and knowledge sharing platform",
    stacks: ["NextJS", "ReactQuery"],
    linkWeb: "https://capacity-building.org/",
    projectImageUrl: "/images/gcbc.webp",
    showcaseAssetUrl: "/images/gcbc-showcase.webp",
  },
  {
    key: "sukanda",
    title: "Sukanda Onelink",
    description: "National scale B2B online platform",
    stacks: ["NextJS", "ReactQuery"],
    linkWeb: "https://buyer.sukandaonelink.com",
    projectImageUrl: "/images/sukanda.webp",
    showcaseAssetUrl: "/images/sukanda-showcase.webp",
  },
];
