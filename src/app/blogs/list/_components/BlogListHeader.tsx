import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { FC } from "react";

interface BlogListHeaderProps {
  category: string;
  setCategory: (value: string) => void;
  setSearch: (value: string) => void;
}

const BlogListHeader: FC<BlogListHeaderProps> = ({
  category,
  setCategory,
  setSearch,
}) => {
  return (
    <section className="mt-16 max-w-[40%">
      <Input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="food">Food</SelectItem>
          <SelectItem value="sehat">Sehat</SelectItem>
          <SelectItem value="ribet">Ribet</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};

export default BlogListHeader;
