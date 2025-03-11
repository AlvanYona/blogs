import { getBlogPopuler } from "../../_api/getBlogPopuler";
import BlogCard from "../../_components/BlogCard";

export async function RelatedPosts() {
  const blogs = await getBlogPopuler();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {blogs.map((post) => (
        <BlogCard blog={post} key={post.objectId} />
      ))}
    </div>
  );
}
