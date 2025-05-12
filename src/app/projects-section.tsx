"use client";

import { memo } from "react";
import { Card, Gap } from "@/components/ui";
import { PROJECTS } from "@/lib/projects";

const SectionHeader = memo(() => (
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
        <div className="h-12 w-full content-end border-b-across">
          <p className="text-secondary px-2 font-code tracking-wide text-sm">
            text-3xl font-bold
          </p>
        </div>

        <div className="w-full border-b-across">
          <p className="h-36 content-end text-white text-3xl font-bold px-2">
            Things I&apos;ve Proud Of.
          </p>
        </div>
      </div>
    </div>
  </div>
));

SectionHeader.displayName = "SectionHeader";

const ProjectCard = memo(
  ({ project }: { project: (typeof PROJECTS)[number] }) => (
    <Card.Project
      key={project.key}
      title={project.title}
      stacks={project.stacks}
      link={project.link}
      projectImageUrl={project.projectImageUrl}
      showcaseAssetUrl={project.showcaseAssetUrl}
    />
  )
);

ProjectCard.displayName = "ProjectCard";

const ProjectsSection = memo(() => {
  return (
    <section className="w-full flex flex-col">
      <SectionHeader />
      <Gap size="sm" />

      <div className="bg-secondary grid grid-cols-12 p-2 gap-2 border-b-across">
        {PROJECTS.slice(0, 4).map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
