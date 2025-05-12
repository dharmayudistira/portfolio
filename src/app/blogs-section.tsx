"use client";

import { Card, Gap } from "@/components/ui";
import { BLOGS } from "@/lib/blogs";
import { cn } from "@/lib/utils";

const BlogsSection = () => {
  return (
    <section className="w-full flex flex-col">
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

      <Gap size="sm" pattern="diagonal" />

      <div className="w-full space-y-4 border-b-across">
        {BLOGS.map((blog, index) => (
          <Card.Blog
            key={blog.id}
            className={cn(index !== BLOGS.length - 1 && "border-b")}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            link={blog.link}
            imageUrl={blog.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
