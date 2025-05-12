type Project = {
  key: string;
  title: string;
  description: string;
  stacks: string[];
  link: string;
  projectImageUrl: string;
  showcaseAssetUrl: string;
};

export const PROJECTS: Project[] = [
  {
    key: "kickavenue",
    title: "KickAvenue",
    description: "Largest authentic marketplace",
    stacks: ["Flutter", "Dart", "Riverpod"],
    link: "https://play.google.com/store/apps/details?id=com.kickavenue.androidshop&pcampaignid=web_share",
    projectImageUrl: "/images/kick-avenue.webp",
    showcaseAssetUrl: "/images/kick-avenue-showcase.png",
  },
];
