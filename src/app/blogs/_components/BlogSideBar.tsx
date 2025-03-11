"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBlogPopuler } from "@/app/blogs/_api/getBlogPopuler";
import { Blog } from "@/types/blog";

const BlogSideBar = () => {
  // Tentukan tipe state secara eksplisit sebagai Blog[]
  const [popularPosts, setPopularPosts] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getBlogPopuler();
        setPopularPosts(data);
      } catch (error) {
        console.error('Error fetching popular posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="space-y-6">
      
      
      
      
      <Card>
        <CardHeader>
          <CardTitle>Popular Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {isLoading ? (
              <p className="text-sm text-muted-foreground">Loading popular posts...</p>
            ) : (
              popularPosts.map((post) => (
                <li key={post.objectId}>
                  <Link href={`/blogs/${post.slug}`} className="text-sm font-medium hover:underline">
                    {post.title}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Subscribe</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Get the latest posts delivered straight to your inbox.</p>
          <Input placeholder="Enter your email" type="email" />
          <Button className="w-full">Subscribe</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSideBar;