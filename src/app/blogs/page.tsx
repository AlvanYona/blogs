"use client";

import PaginationSection from "@/components/PaginationSection";
import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import BlogListBody from "./_components/BlogListBody";
import BlogListHeader from "./_components/BlogListHeader";
import BlogSideBar from "./_components/BlogSideBar";

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
    <main className="container py-12 mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Explore our latest articles and insights
          </p>
        </div>

        <BlogListHeader
          category={category}
          setCategory={setCategory}
          setSearch={setSearch}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <BlogListBody isPending={isPending} blogs={blogs?.data} />
            <PaginationSection
              page={page}
              count={blogs?.count || 0}
              limit={limit}
              setPage={setPage}
            />
          </div>

          <div className="col-span-1">
            <BlogSideBar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogList;
