import { Blog } from "@/types/blog";

export const getBlogPopuler = async () => {
  const response = await fetch(
    `https://tenderdock-us.backendless.app/api/data/blogs?sortBy=%60views%60%20desc&loadRelations=user`
  );
  const blogs: Blog[] = await response.json();

  
  return blogs;
  //   return response.json()
};
