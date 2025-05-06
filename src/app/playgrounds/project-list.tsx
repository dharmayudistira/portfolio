import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
          <div
            className={cn("p-2", {
              "border-b-across": index % 4 === 0,
              "border-r": index % 4 !== 3,
              "border-l": index % 8 !== 0,
            })}
          >
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={project.showcaseAssetUrl}
              alt={project.title}
              width={1000}
              height={1000}
              priority
            />
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
            <p className="text-primary font-bold text-lg">{project.title}</p>
            <div className="w-full flex overflow-y-auto gap-x-4">
              {project.stacks.map((stack) => (
                <p
                  key={stack}
                  className="text-secondary-light font-code text-sm"
                >
                  {stack}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
