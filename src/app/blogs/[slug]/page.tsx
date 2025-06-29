import { BaseLayout, Footer } from "@/components/layout";
import { fetchPostBySlug } from "@/lib/hashnode";
import { BlogContent } from "./blog-content";
import { Gap } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = await params;
  const post = await fetchPostBySlug(param.slug);

  return {
    title: post.title,
    description: post.subtitle,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = await params;
  const post = await fetchPostBySlug(param.slug);

  return (
    <BaseLayout>
      <BlogContent post={post} />
      <Gap size="lg" pattern="dots" />
      <Footer />
    </BaseLayout>
  );
}
