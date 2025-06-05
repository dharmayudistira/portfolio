import { BlogCard, Gap } from "@/components/ui";
import { BLOGS } from "@/lib/blogs";
import { cn } from "@/lib/utils";

const SectionHeader = () => (
  <div className="w-full grid grid-cols-6 xl:grid-cols-12">
    <div className="col-span-2 xl:col-span-4">
      <div className="h-full w-full content-end border-r">
        <p className="text-secondary px-2 font-code tracking-wide text-xs xl:text-sm">
          [ blogs <span className="hidden xl:inline">section</span> ]
        </p>
      </div>
    </div>

    <div className="col-span-4 xl:col-span-8">
      <div className="w-full h-full flex flex-col justify-end">
        <div className="h-12 w-full content-end border-b-across">
          <p className="text-secondary px-2 font-code tracking-wide text-xs xl:hidden">
            text-xl font-bold
          </p>
          <p className="text-secondary px-2 font-code tracking-wide hidden xl:block text-sm">
            text-3xl font-bold
          </p>
        </div>

        <div className="w-full border-b-across">
          <p className="h-18 xl:h-36 content-end text-white text-xl xl:text-3xl font-bold px-2">
            Things Worth Sharing.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const BlogItem = ({
  blog,
  isLast,
}: {
  blog: (typeof BLOGS)[number];
  isLast: boolean;
}) => (
  <BlogCard
    key={blog.id}
    className={cn(!isLast && "border-b")}
    title={blog.title}
    description={blog.description}
    date={blog.date}
    link={blog.link}
  />
);

const BlogsSection = () => {
  return (
    <section className="w-full flex flex-col">
      <SectionHeader />
      <Gap size="sm" pattern="diagonal" />

      <div className="w-full flex flex-col xl:grid xl:grid-cols-12 border-b-across">
        <div className="col-span-8 space-y-4">
          {BLOGS.slice(0, 2).map((blog, index) => (
            <BlogItem
              key={blog.id}
              blog={blog}
              isLast={index === BLOGS.length - 1}
            />
          ))}
        </div>

        <div className="col-span-4 border-t xl:border-l dots-pattern p-3">
          <div className="w-full h-full bg-color rounded-lg border">
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
