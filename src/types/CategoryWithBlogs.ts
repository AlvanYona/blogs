import { Blog } from "./blog";

export interface CategoryWithBlogs {
  objectId: string;
  title: string;
  description: string;
  slug: string;
  blogs: Blog[];
}
