import { Suspense } from "react";
import BlogBody from "./_components/BlogBody";
import BlogHeader from "./_components/BlogHeader";
import Loading from "@/components/Loading";

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <BlogHeader slug={slug} />
        <BlogBody slug={slug} />
      </Suspense>
    </main>
  );
};

export default BlogDetail;
