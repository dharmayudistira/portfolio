"use client";

import { Card, Gap } from "@/components/ui";

const DUMMY_BLOGS = [
  {
    title: "Building Scalable React Applications with Next.js",
    description:
      "Learn how to leverage Next.js features to build performant and maintainable React applications. Covering SSR, ISR, and best practices.",
    date: "2024-03-15",
    link: "https://www.google.com",
    imageUrl: "",
  },
  {
    title: "The Power of TypeScript in Modern Web Development",
    description:
      "Discover how TypeScript improves developer experience and helps catch errors early. A practical guide to TypeScript's most useful features.",
    date: "2024-02-28",
    link: "https://www.google.com",
    imageUrl: "",
  },
  {
    title: "Mastering CSS Grid and Flexbox",
    description:
      "Deep dive into modern CSS layout techniques. Learn how to create responsive and complex layouts using CSS Grid and Flexbox.",
    date: "2024-02-10",
    link: "https://www.google.com",
    imageUrl: "",
  },
];

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
            <div className="h-12 w-full content-end border-b">
              <p className="text-secondary px-2 font-code tracking-wide text-sm">
                text-3xl font-bold
              </p>
            </div>

            <div className="w-full border-b">
              <p className="h-36 content-end text-white text-3xl font-bold px-2">
                Things Worth Sharing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Gap size="sm" pattern="diagonal" />

      <div className="w-full space-y-4">
        {DUMMY_BLOGS.map((blog, index) => (
          <Card.Blog
            key={index}
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
