"use client";

import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { useScreenSize } from "@/hooks/use-screen-size";
import { memo } from "react";

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
  screenSize: string;
}

const ProjectCard = memo(({ project, index, screenSize }: ProjectCardProps) => {
  const getBorderClasses = (index: number) => ({
    "xl:border-r": index % 4 !== 3,
    "xl:border-l": index % 8 !== 0,
  });

  return (
    <div
      className={cn("col-span-3 flex flex-col", {
        "border-t-across":
          (index % 4 === 0 && index !== 0) ||
          (screenSize === "sm" && index !== 0),
      })}
    >
      <div className="overflow-hidden">
        <div className={cn("p-2 border-b", getBorderClasses(index))}>
          <OptimizedImage
            className="w-full h-[250px] object-cover rounded-lg img-zoom"
            src={project.showcaseAssetUrl}
            alt={project.title}
            width={1000}
            height={1000}
            priority={index < 2}
            loading={index < 2 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            useIntersection={index >= 2}
            showSkeleton={true}
          />
        </div>
      </div>

      <div
        className={cn("h-2", {
          "border-b-across": index % 4 === 0,
          ...getBorderClasses(index),
        })}
      />

      <div
        className={cn(
          "flex flex-col p-2 border-b-across",
          getBorderClasses(index)
        )}
      >
        <p className="text-white font-bold text-base xl:text-lg">
          {project.title}
        </p>
        <p className="text-secondary-light font-code text-xs">
          {project.description}
        </p>

        <div className="flex gap-2 mt-4">
          {project.linkWeb && (
            <Link href={project.linkWeb} target="_blank">
              <p className="text-primary font-bold text-xs xl:text-sm hover:underline">
                Website
              </p>
            </Link>
          )}

          {project.linkPlayStore && (
            <Link href={project.linkPlayStore} target="_blank">
              <p className="text-primary font-bold text-xs xl:text-sm hover:underline">
                Play Store
              </p>
            </Link>
          )}

          {project.linkAppStore && (
            <Link href={project.linkAppStore} target="_blank">
              <p className="text-primary font-bold text-xs xl:text-sm hover:underline">
                App Store
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

const ProjectList = () => {
  const screenSize = useScreenSize();

  return (
    <div className="flex flex-col xl:grid xl:grid-cols-12 gap-10">
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={project.key}
          project={project}
          index={index}
          screenSize={screenSize}
        />
      ))}
    </div>
  );
};

export default memo(ProjectList);
