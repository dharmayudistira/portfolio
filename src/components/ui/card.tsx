import { cn } from "@/lib/utils";
import Link from "next/link";

interface BaseCardProps {
  className?: string;
}

interface ServiceCardProps extends BaseCardProps {
  title: string;
  description: string;
  leading: React.ReactNode;
}

interface TestimonyCardProps extends BaseCardProps {
  name: string;
  company: string;
  review: string;
}

interface ProjectCardProps extends BaseCardProps {
  title: string;
  stacks: string[];
  link?: string;
}

interface DefaultCardProps extends BaseCardProps {
  title: string;
  description: string;
}

const Card = ({ title, description, className }: DefaultCardProps) => {
  const baseStyles = "p-4 bg-color rounded-lg border";

  return (
    <div className={cn(baseStyles, "flex flex-col", className)}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

const Service = ({
  title,
  description,
  leading,
  className,
}: ServiceCardProps) => {
  const baseStyles = "p-4 bg-color rounded-lg border";

  return (
    <div className={cn(baseStyles, "grid grid-cols-12", className)}>
      <div className="col-span-4">{leading}</div>
      <div className="col-span-8 grid grid-cols-8">
        <div className="col-span-4 flex flex-col gap-4">
          <p className="text-white font-bold text-2xl">{title}</p>
          <p className="text-secondary-light">{description}</p>
        </div>

        <div className="col-span-4 dots-pattern w-full h-full border rounded-sm" />
      </div>
    </div>
  );
};
Service.displayName = "Card.Service";

const Testimony = ({
  name,
  company,
  review,
  className,
}: TestimonyCardProps) => {
  return (
    <div
      className={cn(
        "col-span-4 p-4 flex flex-col gap-8 justify-between",
        className
      )}
    >
      <p className="text-secondary-light">{`"${review}"`}</p>

      <div className="flex flex-col">
        <p className="text-primary font-bold text-xl">{name}</p>
        <p className="text-secondary-light font-code text-sm">{company}</p>
      </div>
    </div>
  );
};
Testimony.displayName = "Card.Testimony";

const Project = ({ title, stacks, link, className }: ProjectCardProps) => {
  const baseStyles = "bg-color rounded-lg border";

  return (
    <Link
      href={link ?? ""}
      target="_blank"
      className={cn(baseStyles, "col-span-6 flex flex-col", className)}
    >
      <div className="grid grid-cols-6 border-b">
        <div className="col-span-1 p-4 flex justify-center items-center border-r">
          <div className="w-16 h-16 rounded-full border dots-pattern" />
        </div>

        <div className="col-span-5 p-4 flex items-center">
          <p className="text-primary font-bold text-2xl">{title}</p>
        </div>
      </div>

      <div className="w-full flex overflow-y-auto border-b">
        {stacks.map((stack) => (
          <p
            key={stack}
            className="text-secondary-light font-code text-sm px-4 py-2"
          >
            {stack}
          </p>
        ))}
      </div>

      <div className="mt-8 w-full pl-4">
        <div className="w-full h-72 border-l border-t rounded-tl-lg dots-pattern" />
      </div>
    </Link>
  );
};
Project.displayName = "Card.Project";

Card.Service = Service;
Card.Testimony = Testimony;
Card.Project = Project;
export default Card;
