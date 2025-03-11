import { CategoryWithBlogs } from "@/types/CategoryWithBlogs";
import axios from "axios";
import React from "react";

const useGetCategoryBySlug = async (slug: string) => {
  const { data } = await axios.get<CategoryWithBlogs[]>(
    `https://tenderdock-us.backendless.app/api/data/category?where=%60slug%60%20%3D%20'${slug}'&loadRelations=blogs`
  );
  return data[0];
};

export default useGetCategoryBySlug;
