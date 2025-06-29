import { BaseLayout } from "@/components/layout";
import { Footer } from "@/components/layout";
import HeroSection from "@/components/layout/hero-section";
import { Gap } from "@/components/ui";
import BlogList from "./blog-list";
import { Metadata } from "next";
import { fetchPosts } from "@/lib/hashnode";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function Page() {
  const initialPosts = await fetchPosts({ first: 9, after: "" });

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
      <BlogList initialPosts={initialPosts} />
      <Footer />
    </BaseLayout>
  );
}
