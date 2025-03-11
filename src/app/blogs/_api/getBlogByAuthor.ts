import { Blog } from "@/types/blog";

import { notFound } from "next/navigation";
import { cache } from "react";

export const getBlogByAuthor = cache(async (firstName: string) => {
  const response = await fetch(
    `https://tenderdock-us.backendless.app/api/data/blogs?where=%60user%60.%60firstName%60%20%3D%20'${firstName}'`
  );
  const blogs: Blog[] = await response.json();
    if (!blogs.length) {
      return notFound();
    }
    return blogs;
  });
  
