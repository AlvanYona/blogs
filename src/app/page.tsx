import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Blog } from "@/types/blog";
import {getBlogs} from "./blogs/_api/getBlogs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import myImageLoader from "../../my/image/loader"


const Home = async () => {
  const homes = await getBlogs();
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to Go Go Blogs!
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Place where you csn use for search trend infomarmation around
                  the world
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/bloogss">
                    Start Reading <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/thumbnail.jpg"
                loader={myImageLoader}
                alt="Blog Hero Image"
                width={550}
                height={550}
                className="rounded-xl object-cover w-full aspect-square md:aspect-[4/3]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Popular Posts
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Check out our most popular and trending articles
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {homes.map((home) => (
              <Card key={home.objectId} className="flex flex-col h-full">
                <CardHeader className="p-0">
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={home.thumbnail || "/placeholder.svg"}
                      loader={myImageLoader}
                      alt={home.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{home.category}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {home.created}
                    </span>
                  </div>
                  <CardTitle className="mb-2 line-clamp-2">
                    {home.title}
                  </CardTitle>
                  <p className="text-muted-foreground line-clamp-3">
                    {home.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" className="p-0" asChild>
                    <Link href={`/blogs/${home.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/bloogss">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;


