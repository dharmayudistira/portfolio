"use client";

import { Button, OptimizedImage } from "@/components/ui";
import { getPosts } from "@/lib/requests";
import { formatDate } from "@/lib/utils";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";

const BlogList = () => {
  const { data } = useInfiniteQuery({
    queryKey: ["blogs"],
    queryFn: ({ pageParam }) => {
      return getPosts({ first: 9, pageParam });
    },
    getNextPageParam: (lastPage) =>
      lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });

  return (
    <div className="flex flex-col">
      {/* TODO: Temporary disabled */}
      {/* <div className="flex gap-2 border-b-across px-2">
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
        <Button
          variant="secondary"
          onClick={() => setDebouncedSearchTerm(searchTerm)}
        >
          Search
        </Button>
      </div> */}

      {/* <Gap size="sm" /> */}

      {data?.pages?.map((group) =>
        group.map((post) => {
          const postData = post.node;
          const formattedDate = formatDate(postData.publishedAt);

          return (
            <div key={post.node.slug} className="grid w-full">
              <div className="grid grid-cols-12 gap-4 xl:gap-0">
                <div className="col-span-12 xl:col-span-3 xl:border-r p-2">
                  <OptimizedImage
                    src={postData.coverImage?.url || ""}
                    alt={postData.title}
                    width={512}
                    height={512}
                    className="w-full h-auto object-cover object-center rounded-lg"
                  />
                </div>

                <div className="col-span-12 xl:col-span-9 flex flex-col justify-between p-2">
                  <div className="flex flex-col">
                    <p className="text-primary font-bold text-base xl:text-xl">
                      {postData.title}
                    </p>

                    <div className="flex items-center gap-2">
                      <p className="text-secondary-light font-code text-xs">
                        {formattedDate}
                      </p>
                      <p className="text-primary">・</p>
                      <p className="text-secondary-light text-sm">
                        {postData.readTimeInMinutes} mins read
                      </p>
                    </div>

                    <p className="mt-4 text-secondary-light text-xs xl:text-base w-3/4 line-clamp-3">
                      {postData.subtitle}
                    </p>
                  </div>

                  <Link href={`/blogs/${postData.slug}`} className="mt-8">
                    <Button variant="secondary">Read More</Button>
                  </Link>
                </div>

                <CustomGap />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

const CustomGap = () => {
  return (
    <>
      <div className="col-span-12 xl:col-span-3 h-10 xl:border-t-0 border-t-across" />
      <div className="col-span-12 xl:col-span-9 border-b-across" />
    </>
  );
};

export default BlogList;
