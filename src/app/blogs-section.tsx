"use client";

import { memo } from "react";
import { Card, Gap } from "@/components/ui";
import { BLOGS } from "@/lib/blogs";
import { cn } from "@/lib/utils";

const SectionHeader = memo(() => (
  <div className="w-full grid grid-cols-12">
    <div className="col-span-4">
      <div className="h-full w-full content-end border-r">
        <p className="text-secondary px-2 font-code tracking-wide text-sm">
          [ blogs section ]
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
            Things Worth Sharing.
          </p>
        </div>
      </div>
    </div>
  </div>
));

SectionHeader.displayName = "SectionHeader";

const BlogCard = memo(
  ({ blog, isLast }: { blog: (typeof BLOGS)[number]; isLast: boolean }) => (
    <Card.Blog
      key={blog.id}
      className={cn(!isLast && "border-b")}
      title={blog.title}
      description={blog.description}
      date={blog.date}
      link={blog.link}
    />
  )
);

BlogCard.displayName = "BlogCard";

const BlogsSection = memo(() => {
  return (
    <section className="w-full flex flex-col">
      <SectionHeader />
      <Gap size="sm" pattern="diagonal" />

      <div className="w-full space-y-4 border-b-across">
        {BLOGS.map((blog, index) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            isLast={index === BLOGS.length - 1}
          />
        ))}
      </div>
    </section>
  );
});

BlogsSection.displayName = "BlogsSection";

export default BlogsSection;
