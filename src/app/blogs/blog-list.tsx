"use client";

import { Button, Gap } from "@/components/ui";
import { BLOGS } from "@/lib/blogs";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const BlogList = () => {
  const [blogs, setBlogs] = useState(BLOGS);
  const [searchTerm, setSearchTerm] = useState("");

  // Debounced search function to avoid excessive filtering
  const debouncedSearch = useCallback(() => {
    const filteredBlogs = BLOGS.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBlogs(filteredBlogs);
  }, [searchTerm]);

  // Apply debounce effect for search
  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedSearch();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, debouncedSearch]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      debouncedSearch();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 border-b-across px-2">
        <div className="flex w-full xl:w-[350px] bg-secondary rounded-full border-x px-3 items-center gap-4">
          <IoIosSearch className="w-6 h-6 text-[var(--color-secondary)]" />
          <input
            type="text"
            placeholder="Search"
            className="text-white w-full outline-none text-sm xl:text-base caret-[#66D1FF] bg-transparent"
            onKeyDown={handleKeyPress}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="secondary" onClick={debouncedSearch}>
          Search
        </Button>
      </div>

      <Gap size="sm" />

      {blogs.map((blog) => (
        <div key={blog.id} className="grid w-full">
          <div className="grid grid-cols-12 border-b-across gap-4 xl:gap-0">
            <div className="col-span-12 xl:col-span-3 xl:border-r px-2">
              <p className="text-secondary-light font-code text-xs xl:text-sm">{`[ ${blog.date} ]`}</p>
            </div>

            <div className="col-span-12 xl:col-span-9 flex flex-col gap-4 px-2">
              <p className="text-primary font-bold text-base xl:text-xl">
                {blog.title}
              </p>
              <p className="text-secondary-light text-xs xl:text-base w-3/4 line-clamp-3">
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
      <div className="col-span-12 xl:col-span-3 xl:border-r border-t-across h-10" />
      <div className="col-span-12 xl:col-span-9 " />
    </>
  );
};

export default BlogList;
