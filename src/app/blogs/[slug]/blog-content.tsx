"use client";

import { notFound } from "next/navigation";
import { Breadcrumb, Gap, OptimizedImage } from "@/components/ui";
import { formatDate } from "@/lib/utils";

interface BlogContentProps {
  post: {
    title: string;
    subtitle?: string;
    readTimeInMinutes: number;
    publishedAt: string;
    views: number;
    coverImage: {
      url: string;
    };
    tags: {
      id: string;
      name: string;
      slug: string;
    }[];
    content: {
      html: string;
    };
    author: {
      name: string;
      profilePicture?: string;
    };
  };
}

export const BlogContent = ({ post }: BlogContentProps) => {
  if (!post) return notFound();

  return (
    <main className="w-full border-b-across">
      <div className="w-full p-4 border-b-across">
        <OptimizedImage
          src={post.coverImage.url}
          alt={post.title}
          width={1024}
          height={1024}
          className="w-full h-[35vh] object-cover object-center rounded-lg"
        />
      </div>

      <div className="h-12 xl:h-24 w-full content-end border-b-across">
        <p className="text-secondary px-2 font-code tracking-wide text-xs xl:text-sm">
          [ blog section ]
        </p>
      </div>

      <div className="w-full border-b-across px-2">
        <p className="text-white text-4xl xl:text-8xl font-bold tracking-tighter">
          {post.title}
        </p>
      </div>

      <Gap size="sm" pattern="diagonal" />

      <div className="grid grid-cols-12">
        <div className="col-span-12 xl:col-span-3 p-4">
          <Breadcrumb parentPage="Blogs" currentPage={post.title} />

          <div className="mt-8 flex flex-col">
            <div className="flex items-center gap-2">
              <OptimizedImage
                src={post.author.profilePicture || ""}
                alt={post.author.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover object-center"
              />

              <p className="text-primary font-bold text-base xl:text-xl">
                {post.author.name}
              </p>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <p className="text-secondary-light mt-[2px] font-code text-sm">
                {formatDate(post.publishedAt)}
              </p>
              <p className="text-primary">・</p>
              <p className="text-secondary-light text-sm">
                {post.readTimeInMinutes} mins read
              </p>
              <p className="text-primary">・</p>
              <p className="text-secondary-light text-sm">{post.views} views</p>
            </div>

            <p className="mt-4 text-secondary-light text-sm">{post.subtitle}</p>

            <p className="mt-8 text-secondary-light text-sm">Tags :</p>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <p
                  key={tag.id}
                  className="text-secondary-light font-code text-xs px-2 py-1 rounded-sm bg-secondary"
                >
                  {tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          className="blog-content col-span-12 xl:col-span-9 xl:border-l p-4 sm:text-sm xl:text-lg text-secondary-light flex flex-col gap-5"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </div>
    </main>
  );
};
