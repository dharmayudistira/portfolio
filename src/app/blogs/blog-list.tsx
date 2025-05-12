import { Button } from "@/components/ui";
import { BLOGS } from "@/lib/blogs";
import Link from "next/link";

const BlogList = () => {
  return (
    <div>
      {BLOGS.map((blog) => (
        <div key={blog.id} className="grid w-full">
          <div className="grid grid-cols-12 border-b-across">
            <div className="col-span-3 border-r flex flex-col justify-start items-start px-2">
              <p className="text-secondary-light font-code text-sm">{`[ ${blog.date} ]`}</p>
            </div>

            <div className="col-span-9 flex flex-col gap-4 px-2">
              <p className="text-primary font-bold text-xl">{blog.title}</p>
              <p className="text-secondary-light text-base w-3/4">
                {blog.description}
              </p>

              <Link href={blog.link} target="_blank">
                <Button variant="secondary">Read More</Button>
              </Link>
            </div>

            <CustomGap />
          </div>
        </div>
      ))}
    </div>
  );
};

const CustomGap = () => {
  return (
    <>
      <div className="col-span-3 border-r border-t-across h-10" />
      <div className="col-span-9 " />
    </>
  );
};

export default BlogList;
