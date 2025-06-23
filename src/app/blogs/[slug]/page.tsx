import { BaseLayout, Footer } from "@/components/layout";
import { getPostBySlug } from "@/lib/requests";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { BlogContent } from "./blog-content";
import { Gap } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const param = await params;
  const post = await getPostBySlug(param.slug);

  return {
    title: post.title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const param = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["blog", param.slug],
    queryFn: () => getPostBySlug(param.slug),
  });

  return (
    <BaseLayout>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogContent slug={param.slug} />
      </HydrationBoundary>
      <Gap size="lg" pattern="dots" />
      <Footer />
    </BaseLayout>
  );
}
