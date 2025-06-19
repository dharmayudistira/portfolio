import BaseLayout from "@/components/layout/base-layout";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/layout/hero-section";
import { Gap } from "@/components/ui";
import BlogList from "./blog-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function Page() {
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
      <BlogList />
      <Footer />
    </BaseLayout>
  );
}
