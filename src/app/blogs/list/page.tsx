"use client";

import PaginationSection from "@/components/PaginationSection";
import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import BlogListBody from "./_components/BlogListBody";
import BlogListHeader from "./_components/BlogListHeader";

const limit = 8;

const BlogList = () => {
  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const [debounceValue] = useDebounceValue(search, 700);

  const { data: blogs, isPending } = useGetBlogs({
    title: debounceValue,
    category,
    limit,
    offset: (page - 1) * limit,
  });

  return (
    <main className="container mx-auto p-4">
      <BlogListHeader
        category={category}
        setCategory={setCategory}
        setSearch={setSearch}
      />

      <BlogListBody isPending={isPending} blogs={blogs?.data} />

      <PaginationSection
        page={page}
        count={blogs?.count || 0}
        limit={limit}
        setPage={setPage}
      />
    </main>
  );
};

export default BlogList;
