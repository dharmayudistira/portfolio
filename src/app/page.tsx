import { BaseLayout } from "@/components/layout";
import ServicesSection from "./services-section";
import TestimoniesSection from "./testimonies-section";
import ProjectsSection from "./projects-section";
import { BlogsSection } from "./blogs-section";
import { Gap } from "@/components/ui";
import { Footer } from "@/components/layout";
import HeroSection from "@/components/layout/hero-section";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getFeaturedPosts } from "@/lib/requests";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["featuredPosts"],
    queryFn: getFeaturedPosts,
  });

  return (
    <BaseLayout>
      <HeroSection
        title="Building Scalable Apps for Web and Mobile."
        description={
          <p className="text-secondary-light text-sm xl:text-xl">
            Hi, I&apos;m{" "}
            <span className="text-primary font-bold">Dharma Yudistira</span>—a
            product engineer focused on seamless digital experiences across web
            and mobile. <br className="hidden xl:block" /> I currently work at{" "}
            <span className="text-primary font-bold">
              <Link
                href="https://zero-one-group.com"
                target="_blank"
                className="inline-flex items-center xl:gap-2 hover:underline"
              >
                Zero One Group <span className="block xl:hidden">.</span>
                <ExternalLinkIcon className="hidden xl:block w-4 h-4" />
              </Link>
            </span>
          </p>
        }
      />
      <Gap size="lg" />
      <ServicesSection />
      <Gap size="lg" />
      <ProjectsSection />
      <Gap size="lg" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogsSection />
      </HydrationBoundary>
      <Gap size="lg" />
      <TestimoniesSection />
      <Gap size="lg" pattern="diagonal" />
      <Gap size="sm" />
      <Footer />
    </BaseLayout>
  );
}
