import { Blog } from "@/types/blog";

export const getBlogs = async (size: number = 3) => {
  const response = await fetch(
    `https://tenderdock-us.backendless.app/api/data/blogs?pageSize=${size}`
  );
  const blogs: Blog[] = await response.json();
  return blogs;
  //   return response.json()
};
