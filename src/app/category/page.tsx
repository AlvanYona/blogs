import Link from "next/link";
import { Laptop, Coffee, Compass, Palette } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useGetCategoryWithBlog from "@/hooks/api/category/useGetCategoryWithBlog";
import Loading from "@/components/Loading";

export default async function CategoriesPage() {
  const categories = await useGetCategoryWithBlog();

  // if (loading) {
  //   return (
  //     <Loading />
  //   );
  // }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Categories
          </h1>
          <p className="text-muted-foreground md:text-lg">
            Explore our content organized by topics
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.objectId}
            href={`/category/${category.slug}`}
            className="group"
          >
            <Card className="overflow-hidden transition-all hover:shadow-md h-full">
              <CardHeader className="p-6 bg-muted">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="pt-2">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Recent Posts</h3>
                <ul className="space-y-2">
                  {category.blogs.map((post) => (
                    <li
                      key={post.objectId}
                      className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      {post.title}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Mock data
// const categories = [
//   {
//     id: 1,
//     name: "Technology",
//     slug: "technology",
//     count: 12,
//     icon: Laptop,
//     description: "The latest in tech trends, software, and digital innovation",
//     recentPosts: [
//       { id: 1, title: "Getting Started with Next.js and TypeScript" },
//       { id: 2, title: "Introduction to React Hooks" },
//       { id: 3, title: "Building a REST API with Node.js" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Lifestyle",
//     slug: "lifestyle",
//     count: 8,
//     icon: Coffee,
//     description: "Wellness, personal development, and everyday living",
//     recentPosts: [
//       { id: 1, title: "Essential Tips for Remote Work Productivity" },
//       { id: 2, title: "Mindfulness Practices for Busy Professionals" },
//       { id: 3, title: "Creating a Sustainable Morning Routine" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Travel",
//     slug: "travel",
//     count: 6,
//     icon: Compass,
//     description: "Destinations, travel tips, and adventure stories",
//     recentPosts: [
//       { id: 1, title: "Budget Travel Tips for Europe" },
//       { id: 2, title: "Hidden Gems: Underrated Destinations" },
//       { id: 3, title: "Solo Travel: Tips and Experiences" },
//     ],
//   },
//   {
//     id: 4,
//     name: "Design",
//     slug: "design",
//     count: 5,
//     icon: Palette,
//     description:
//       "UI/UX design, graphic design trends, and creative inspiration",
//     recentPosts: [
//       { id: 1, title: "Designing User-Friendly Interfaces" },
//       { id: 2, title: "Minimalist Design Principles" },
//       { id: 3, title: "Color Theory for Digital Designers" },
//     ],
//   },
// ];
