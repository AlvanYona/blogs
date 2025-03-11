import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { Search } from "lucide-react";
import { FC } from "react";

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
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="relative flex-grow">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search articles..."
          className="pl-8"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-4">
        <Select value={category} onValueChange={setCategory}>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="sehat">Sehat</SelectItem>
            <SelectItem value="teknologi">Teknologi</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BlogListHeader;
