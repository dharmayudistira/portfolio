"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from ".";

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
  projectImageUrl?: string;
  showcaseAssetUrl?: string;
  title: string;
  stacks: string[];
  link?: string;
}

interface BlogCardProps extends BaseCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
  imageUrl?: string;
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

const Project = ({
  title,
  stacks,
  link,
  projectImageUrl,
  showcaseAssetUrl,
  className,
}: ProjectCardProps) => {
  const baseStyles = "bg-color rounded-lg border";

  return (
    <Link
      href={link ?? ""}
      target="_blank"
      className={cn(baseStyles, "col-span-6 flex flex-col", className)}
    >
      <div className="grid grid-cols-6 border-b">
        <div className="col-span-1 p-4 flex justify-center items-center border-r">
          {projectImageUrl ? (
            <Image
              src={projectImageUrl}
              alt={title}
              width={64}
              height={64}
              className="rounded-full border"
            />
          ) : (
            <div className="w-16 h-16 rounded-full border dots-pattern" />
          )}
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
        <div
          className={cn(
            "w-full h-72 border-l border-t rounded-tl-lg overflow-hidden",
            {
              "dots-pattern": !showcaseAssetUrl,
            }
          )}
        >
          {showcaseAssetUrl && (
            <Image
              src={showcaseAssetUrl}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-full object-top-left object-cover img-zoom"
            />
          )}
        </div>
      </div>
    </Link>
  );
};
Project.displayName = "Card.Project";

const Blog = ({ title, description, date, link, imageUrl, className }: BlogCardProps) => {
  return (
    <div className={cn("grid grid-cols-12 p-4", className)}>
      <div className="col-span-4">
        <p className="text-primary font-bold text-2xl">{title}</p>
      </div>

      <div className="col-span-5 flex flex-col gap-16 justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-secondary-light font-code text-sm">{`[ ${date} ]`}</p>
          <p className="text-white">{description}</p>
        </div>

        <Link href={link} target="_blank">
          <Button variant="secondary">Read More</Button>
        </Link>
      </div>

      <div className="col-span-3">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-full dots-pattern rounded-lg" />
        )}
      </div>
    </div>
  );
};
Blog.displayName = "Card.Blog";

Card.Service = Service;
Card.Testimony = Testimony;
Card.Project = Project;
Card.Blog = Blog;
export default Card;
