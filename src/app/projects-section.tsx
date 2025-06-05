import {  Gap, ProjectCard } from "@/components/ui";
import { PROJECTS } from "@/lib/projects";

const SectionHeader = () => (
  <div className="w-full grid grid-cols-6 xl:grid-cols-12">
    <div className="col-span-2 xl:col-span-4">
      <div className="h-full w-full content-end border-r">
        <p className="text-secondary px-2 font-code tracking-wide text-xs xl:text-sm">
          [ projects <span className="hidden xl:inline">section</span> ]
        </p>
      </div>
    </div>

    <div className="col-span-4 xl:col-span-8">
      <div className="w-full h-full flex flex-col justify-end">
        <div className="h-12 w-full content-end border-b-across">
          <p className="text-secondary px-2 font-code tracking-wide text-xs xl:hidden">
            text-xl font-bold
          </p>
          <p className="text-secondary px-2 font-code tracking-wide hidden xl:block text-sm">
            text-3xl font-bold
          </p>
        </div>

        <div className="w-full border-b-across">
          <p className="h-18 xl:h-36 content-end text-white text-xl xl:text-3xl font-bold px-2">
            Things I&apos;ve Proud Of.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ProjectItem = ({ project }: { project: (typeof PROJECTS)[number] }) => (
  <ProjectCard
    key={project.key}
    title={project.title}
    stacks={project.stacks}
    linkWeb={project.linkWeb}
    linkPlayStore={project.linkPlayStore}
    linkAppStore={project.linkAppStore}
    projectImageUrl={project.projectImageUrl}
    showcaseAssetUrl={project.showcaseAssetUrl}
  />
);

const ProjectsSection = () => {
  return (
    <section className="w-full flex flex-col">
      <SectionHeader />
      <Gap size="sm" />

      <div className="bg-secondary grid grid-cols-12 p-2 gap-2 border-b-across">
        {PROJECTS.slice(0, 4).map((project) => (
          <ProjectItem key={project.key} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
