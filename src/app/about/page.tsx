"use client"; // Ensures hooks work in Next.js
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// export default function AboutPage() {

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "@/components/Loading";
import myImageLoader from "../../../my/image/loader";

const API_URL = "https://tenderdock-us.backendless.app/api/data/Users";

interface User {
  objectId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  description?: string;
}

const About = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">About G Blog</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Discover our story, mission, and the team behind the content
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="story" className="mt-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="story">Our Story</TabsTrigger>
          <TabsTrigger value="team">Our Team</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>

        {/* Our Story Tab */}
        <TabsContent value="story" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">How It All Started</h2>
              <p className="text-muted-foreground">
                SimpleBlog was founded in 2020 with a mission to create a platform where readers could find insightful,
                well-researched content on a variety of topics. What began as a small personal blog has grown into a
                diverse publication with contributors from around the world.
              </p>
              <p className="text-muted-foreground">
                Our journey started when our founder, John Smith, recognized the need for a blog that combined in-depth
                analysis with accessibility. Having worked in both technology and publishing, John wanted to create a
                space where complex topics could be explained in an engaging, approachable way.
              </p>
              <h3 className="text-xl font-bold mt-6">Our Mission</h3>
              <p className="text-muted-foreground">
                At SimpleBlog, our mission is to provide readers with insightful, accurate, and engaging content that
                informs, inspires, and empowers. We believe in the power of well-researched articles to expand
                perspectives and foster understanding across diverse topics.
              </p>
            </div>
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-lg">
              <Image
                src="/story.jpg"
                loader={myImageLoader}
                alt="Our team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Quality</h4>
                  <p className="text-muted-foreground">
                    We prioritize well-researched, thoughtfully crafted content that provides genuine value to our
                    readers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Integrity</h4>
                  <p className="text-muted-foreground">
                    We maintain high ethical standards in our reporting, fact-checking, and business practices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Inclusivity</h4>
                  <p className="text-muted-foreground">
                    We embrace diverse perspectives and strive to create content that resonates with people from all
                    backgrounds.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="mt-6">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              The passionate individuals behind SimpleBlog who work tirelessly to bring you quality content every day.
            </p>
          </div>

          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Link key={user.objectId} href={`/users/${user.objectId}`} className="block">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-xl">
              {/* User Image with Default Avatar Fallback */}
              <Image
                src={user.avatar || "/default-avatar.png"} // Default avatar if no image
                loader={myImageLoader}
                alt={`${user.firstName} ${user.lastName}`}
                className="rounded-full border-2 border-black shadow-lg"
                width={120}
                height={120}
              />

              {/* User Info */}
              <p className="text-lg text-gray-800 mt-4 font-semibold">
                {user.firstName} {user.lastName}
              </p>
            </div>
          </Link>
        ))}
      </div>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Get In Touch</h2>
              <p className="text-muted-foreground">
                Have a question, suggestion, or just want to say hello? We'd love to hear from you. Fill out the form or
                use one of our contact methods below.
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-muted-foreground">
                      jalan pintar pintar
                      <br />
                      Amerika ke barat sedikit
                      <br />
                      eropa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">pintar@mail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+62 8201-989-2328</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default About
// Mock data
const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "Founder & Editor-in-Chief",
    bio: "John founded SimpleBlog in 2020 after a decade in technology journalism. He oversees editorial direction and strategy.",
    avatar: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Managing Editor",
    bio: "Sarah brings 8 years of editorial experience to SimpleBlog, having previously worked at major digital publications.",
    avatar: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Technology Editor",
    bio: "Former software engineer with a passion for making tech accessible to everyone.",
    avatar: "/placeholder.svg?height=400&width=400",
  },
]

