import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Find the category with the matching slug
  const slug = (await params).slug;
  const category = useGetCategoryBySlug(slug);

  // If no category is found, return 404
  if (!category) {
    notFound();
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            {/* <div className="p-2 rounded-full bg-primary/10">
              <category.icon className="h-6 w-6 text-primary" />
            </div> */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {(await category).title}
            </h1>
          </div>
          <p className="text-muted-foreground md:text-lg">
            {(await category).description}
          </p>
        </div>
      </div>

      {/* Category Posts */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Posts in {(await category).title}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(await category).blogs.map((post) => (
            <Card key={post.objectId} className="flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.thumbnail || "/placeholder.svg"}
                    loader={myImageLoader}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {post.created}
                  </span>
                </div>
                <CardTitle className="mb-2">
                  <Link href={`/blogs/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" className="p-0" asChild>
                  <Link href={`/blogs/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mock data
import { Laptop, Coffee, Compass, Palette } from "lucide-react";
import useGetCategoryBySlug from "@/hooks/api/category/useGetCategoryBySlug";
import myImageLoader from "../../../../my/image/loader";

// const categories = [
//   {
//     id: 1,
//     name: "Technology",
//     slug: "technology",
//     count: 12,
//     icon: Laptop,
//     description: "The latest in tech trends, software, and digital innovation",
//   },
//   {
//     id: 2,
//     name: "Lifestyle",
//     slug: "lifestyle",
//     count: 8,
//     icon: Coffee,
//     description: "Wellness, personal development, and everyday living",
//   },
//   {
//     id: 3,
//     name: "Travel",
//     slug: "travel",
//     count: 6,
//     icon: Compass,
//     description: "Destinations, travel tips, and adventure stories",
//   },
//   {
//     id: 4,
//     name: "Design",
//     slug: "design",
//     count: 5,
//     icon: Palette,
//     description:
//       "UI/UX design, graphic design trends, and creative inspiration",
//   },
// ];

// const categoryPosts = [
//   {
//     id: 1,
//     title: "Getting Started with Next.js and TypeScript",
//     slug: "getting-started-nextjs-typescript",
//     excerpt:
//       "Learn how to set up a new project with Next.js and TypeScript for modern web development.",
//     date: "May 15, 2023",
//     category: "Technology",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 2,
//     title: "Introduction to React Hooks",
//     slug: "introduction-to-react-hooks",
//     excerpt:
//       "A comprehensive guide to using React Hooks for state management and side effects.",
//     date: "June 15, 2023",
//     category: "Technology",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 3,
//     title: "Building a REST API with Node.js",
//     slug: "building-rest-api-nodejs",
//     excerpt:
//       "Learn how to create a RESTful API using Node.js, Express, and MongoDB.",
//     date: "June 20, 2023",
//     category: "Technology",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 4,
//     title: "Essential Tips for Remote Work Productivity",
//     slug: "remote-work-productivity-tips",
//     excerpt:
//       "Discover practical strategies to boost your productivity while working from home.",
//     date: "June 2, 2023",
//     category: "Lifestyle",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 5,
//     title: "Mindfulness Practices for Busy Professionals",
//     slug: "mindfulness-practices-busy-professionals",
//     excerpt:
//       "Simple mindfulness techniques you can incorporate into your busy schedule.",
//     date: "June 8, 2023",
//     category: "Lifestyle",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 6,
//     title: "Budget Travel Tips for Europe",
//     slug: "budget-travel-tips-europe",
//     excerpt: "How to explore European destinations without breaking the bank.",
//     date: "June 22, 2023",
//     category: "Travel",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 7,
//     title: "Designing User-Friendly Interfaces",
//     slug: "designing-user-friendly-interfaces",
//     excerpt:
//       "Learn the principles of creating intuitive and accessible user interfaces for web applications.",
//     date: "June 10, 2023",
//     category: "Design",
//     image: "/placeholder.svg?height=300&width=400",
//   },
// ];
