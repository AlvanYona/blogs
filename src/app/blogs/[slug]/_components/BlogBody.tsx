import { FC } from "react";
import { getBlog } from "../../_api/getBlog";
import Markdown from "@/components/Markdown";
import IncrementViews from "./IncrementViews";


interface BlogBodyProps {
  slug: string;
}
const BlogBody: FC<BlogBodyProps> = async ({ slug }) => {
  const blogs = await getBlog(slug);
  return (
    <section className="container mx-auto p-4">
      <Markdown content = {blogs[0].content} />
      <IncrementViews objectId={blogs[0].objectId} views={blogs[0].views}/>
    </section>
  );
};

export default BlogBody;
