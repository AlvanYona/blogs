import { axiosInstance } from "@/lib/axios";
import { Blog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";

interface GetBlogsQuery {
  title: string;
  limit: number;
  offset: number;
  category?: string;
}

const useGetBlogs = (queries: GetBlogsQuery) => {
  return useQuery({
    queryKey: ["blogs", queries],
    queryFn: async () => {
      const { title, category, limit, offset, } = queries;

      let baseUrl = `/data/blogs?sortBy=%60created%60%20desc&pageSize=${limit}&offset=${offset}&where=%60title%60%20LIKE%20'%25${title}%25'`;
      let baseUrlCount = `/data/blogs/count?where=%60title%60%20LIKE%20'%25${title}%25'`;

      if (category && category !== "all") {
        baseUrl = `${baseUrl}%20AND%20%60category%60%20%3D%20'${category}'`;
        baseUrlCount = `${baseUrlCount}%20AND%20%60category%60%20%3D%20'${category}'`;
      }

      const { data: blogs } = await axiosInstance.get<Blog[]>(baseUrl);
      const { data: count } = await axiosInstance.get<number>(baseUrlCount);
      
      
      return {
        data: blogs,
        count,
      };
    },
  });
};

export default useGetBlogs;
