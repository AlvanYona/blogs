import { CategoryWithBlogs } from "@/types/CategoryWithBlogs";
import axios from "axios";
import React from "react";


const useGetCategoryWithBlog = async () => {
  const { data } = await axios.get<CategoryWithBlogs[]>(
    "https://tenderdock-us.backendless.app/api/data/category?loadRelations=blogs"
  );
  return data as CategoryWithBlogs[];
};

export default useGetCategoryWithBlog;
