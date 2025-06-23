import { BaseLayout } from "@/components/layout";
import { Footer } from "@/components/layout";
import HeroSection from "@/components/layout/hero-section";
import { Gap } from "@/components/ui";
import BlogList from "./blog-list";
import { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPosts } from "@/lib/requests";
import { PostMetadata } from "@/lib/types";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["blogs"],
    queryFn: getPosts,
    getNextPageParam: (lastPage: { node: PostMetadata; cursor: string }[]) =>
      lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });

  return (
    <BaseLayout>
      <HeroSection
        title={"Engineering in Words"}
        description={
          <p className="text-secondary-light text-sm xl:text-xl">
            Things I&apos;ve written to document, explain, and sometimes just
            share what&apos;s on my mind.
          </p>
        }
      />
      <Gap size="lg" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogList />
      </HydrationBoundary>
      <Footer />
    </BaseLayout>
  );
}
