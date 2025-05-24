import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ProjectList = () => {
  return (
    <div className="grid grid-cols-12 gap-10">
      {PROJECTS.map((project, index) => (
        <div
          key={project.key}
          className={cn("col-span-3 flex flex-col", {
            "border-t-across": index % 4 === 0 && index !== 0,
          })}
        >
          <div className="overflow-hidden">
            <div
              className={cn("p-2", {
                "border-b-across": index % 4 === 0,
                "border-r": index % 4 !== 3,
                "border-l": index % 8 !== 0,
              })}
            >
              <Image
                className="w-full h-[250px] object-cover rounded-lg img-zoom"
                src={project.showcaseAssetUrl}
                alt={project.title}
                width={1000}
                height={1000}
                priority
              />
            </div>
          </div>

          <div
            className={cn("h-2", {
              "border-b-across": index % 4 === 0,
              "border-r": index % 4 !== 3,
              "border-l": index % 8 !== 0,
            })}
          />

          <div
            className={cn("flex flex-col p-2", {
              "border-b-across": index % 4 === 0,
              "border-r": index % 4 !== 3,
              "border-l": index % 8 !== 0,
            })}
          >
            <p className="text-white font-bold text-lg">{project.title}</p>
            <p className="text-secondary-light font-code text-xs">
              {project.description}
            </p>

            <div className="flex gap-2 mt-4">
              {project.linkWeb && (
                <Link href={project.linkWeb} target="_blank">
                  <p className="text-primary font-bold text-sm hover:underline">
                    Website
                  </p>
                </Link>
              )}

              {project.linkPlayStore && (
                <Link href={project.linkPlayStore} target="_blank">
                  <p className="text-primary font-bold text-sm hover:underline">
                    Play Store
                  </p>
                </Link>
              )}

              {project.linkAppStore && (
                <Link href={project.linkAppStore} target="_blank">
                  <p className="text-primary font-bold text-sm hover:underline">
                    App Store
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
