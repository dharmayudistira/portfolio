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
  linkWeb?: string;
  linkPlayStore?: string;
  linkAppStore?: string;
}

interface BlogCardProps extends BaseCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
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
    <div
      className={cn(
        baseStyles,
        "flex flex-col xl:grid xl:grid-cols-12",
        className
      )}
    >
      <div className="w-full xl:col-span-4">{leading}</div>
      <div className="w-full xl:col-span-8 flex flex-col">
        <div className="w-full flex flex-col gap-4">
          <p className="text-white font-bold text-xl xl:text-2xl">{title}</p>
          <p className="text-secondary-light text-sm xl:text-base">
            {description}
          </p>
        </div>
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
        "col-span-6 xl:col-span-4 p-4 flex flex-col gap-4 xl:gap-8 justify-between",
        className
      )}
    >
      <p className="text-secondary-light text-sm xl:text-base">{`"${review}"`}</p>

      <div className="flex flex-col">
        <p className="text-primary font-bold text-base xl:text-xl">{name}</p>
        <p className="text-secondary-light font-code text-xs xl:text-sm">
          {company}
        </p>
      </div>
    </div>
  );
};
Testimony.displayName = "Card.Testimony";

const Project = ({
  title,
  stacks,
  linkWeb,
  linkPlayStore,
  linkAppStore,
  projectImageUrl,
  showcaseAssetUrl,
  className,
}: ProjectCardProps) => {
  const baseStyles = "bg-color rounded-lg border";

  return (
    <div
      className={cn(
        baseStyles,
        "col-span-12 xl:col-span-6 flex flex-col",
        className
      )}
    >
      <div className="grid grid-cols-6 border-b">
        <div className="col-span-2 xl:col-span-1 p-2 xl:p-4 flex justify-center items-center border-r">
          {projectImageUrl ? (
            <Image
              src={projectImageUrl}
              alt={title}
              width={500}
              height={500}
              className="rounded-full object-cover w-[48px] h-[48px] xl:w-[64px] xl:h-[64px] border"
            />
          ) : (
            <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full border dots-pattern" />
          )}
        </div>

        <div className="col-span-4 xl:col-span-5 p-4 flex flex-col justify-center">
          <p className="text-white font-bold text-lg xl:text-2xl">{title}</p>
          <div className="flex flex-wrap gap-2 xl:gap-4 items-center">
            {linkWeb && (
              <Link href={linkWeb} target="_blank">
                <p className="text-primary font-bold text-xs xl:text-sm hover:underline">
                  Website
                </p>
              </Link>
            )}

            {linkPlayStore && (
              <Link href={linkPlayStore} target="_blank">
                <p className="text-primary font-bold text-xs xl:text-sm hover:underline">
                  Play Store
                </p>
              </Link>
            )}

            {linkAppStore && (
              <Link href={linkAppStore} target="_blank">
                <p className="text-primary font-bold text-sm hover:underline">
                  App Store
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex overflow-y-auto border-b">
        {stacks.map((stack) => (
          <p
            key={stack}
            className="text-secondary-light font-code text-xs xl:text-sm px-2 xl:px-4 py-2"
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
    </div>
  );
};
Project.displayName = "Card.Project";

const Blog = ({ title, description, date, link, className }: BlogCardProps) => {
  return (
    <div className={cn("flex flex-col gap-4 p-4", className)}>
      <div className="w-full flex justify-between">
        <p className="text-primary font-bold text-lg xl:text-2xl xl:w-3/4">
          {title}
        </p>
        <p className="hidden xl:block text-secondary-light font-code text-xs xl:text-sm">{`[ ${date} ]`}</p>
      </div>

      <div className="w-full flex flex-col gap-8 justify-between">
        <p className="xl:hidden text-secondary-light font-code text-xs xl:text-sm">{`[ ${date} ]`}</p>
        <p className="text-white text-sm xl:text-base xl:w-3/4">{description}</p>

        <Link className="w-fit" href={link} target="_blank">
          <Button variant="secondary">Read More</Button>
        </Link>
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
