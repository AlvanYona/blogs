import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import myImageLoader from "../../../../my/image/loader";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  console.log(blog)
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video">
        <Link href={`/blogs/${blog.slug}`}>
          <Image
            // src={"/placeholder.svg"}
            src={blog.thumbnail || "/placeholder.svg"}
            loader={myImageLoader}
            alt={blog.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </Link>
      </div>
      <CardHeader className="p-4">
        <div className="space-y-2">
          <Badge className="mb-2">{blog.category}</Badge>
          <Link href={`/blogs/${blog.slug}`} className="hover:underline">
            <h3 className="font-bold text-xl line-clamp-2">{blog.title}</h3>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-muted-foreground line-clamp-3">{blog.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={blog.user?.avatar}
              
              alt={`${blog.user?.firstName?.charAt(0) || ""}${
                blog.user?.lastName?.charAt(0) || ""
              }`}
            />
            <AvatarFallback>{`${blog.user?.firstName?.charAt(0) || ""}${
              blog.user?.lastName?.charAt(0) || ""
            }`}</AvatarFallback>
          </Avatar>
          <span className="text-sm">{`${blog.user?.firstName || ""} ${
            blog.user?.lastName || ""
          }`}</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            {format(new Date(blog.created), "dd MMM yyyy")}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
