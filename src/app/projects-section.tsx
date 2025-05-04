"use client";

import { Card, Gap } from "@/components/ui";

const PROJECTS = [
  {
    title: "KickAvenue",
    stacks: ["Flutter", "Dart", "Riverpod"],
    link: "https://play.google.com/store/apps/details?id=com.kickavenue.androidshop&pcampaignid=web_share",
    projectImageUrl: "/images/kick-avenue.webp",
    showcaseAssetUrl: "/images/kick-avenue-showcase.png",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full grid grid-cols-12">
        <div className="col-span-4">
          <div className="h-full w-full content-end border-r">
            <p className="text-secondary px-2 font-code tracking-wide text-sm">
              [ projects section ]
            </p>
          </div>
        </div>

        <div className="col-span-8">
          <div className="w-full h-full flex flex-col justify-end">
            <div className="h-12 w-full content-end border-across">
              <p className="text-secondary px-2 font-code tracking-wide text-sm">
                text-3xl font-bold
              </p>
            </div>

            <div className="w-full border-across">
              <p className="h-36 content-end text-white text-3xl font-bold px-2">
                Things I&apos;ve Proud Of.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Gap size="sm" />

      <div className="bg-secondary grid grid-cols-12 p-2 gap-2 border-across">
        {PROJECTS.map((project) => (
          <Card.Project
            key={project.title}
            title={project.title}
            stacks={project.stacks}
            link={project.link}
            projectImageUrl={project.projectImageUrl}
            showcaseAssetUrl={project.showcaseAssetUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
