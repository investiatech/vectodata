"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ThumbsUp, MessageSquare, Bookmark, Share2, Flag, MoreHorizontal, ArrowLeft, Heart } from "lucide-react"

export default function TopicDetailPage() {
  const params = useParams()
  const topicId = params.id as string
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [replyContent, setReplyContent] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  // This would normally come from an API call based on the topicId
  const topicData = getTopicData(topicId)

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the reply to the server
    console.log("Submitting reply:", replyContent)
    setReplyContent("")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <Link className="flex items-center justify-center font-bold text-lg" href="/">
          VectoBase
        </Link>

        {/* Desktop Menu - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#downloads">
            Downloads
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-primary" href="/forum">
            Forum
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/documentation">
            Documentation
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#license">
            License
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/community">
            Community
          </Link>
          <div className="border-l pl-6 flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button - Visible only on mobile */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <span className="sr-only">Open menu</span>
          <div className="w-4 h-0.5 bg-current mb-1"></div>
          <div className="w-4 h-0.5 bg-current mb-1"></div>
          <div className="w-4 h-0.5 bg-current"></div>
        </Button>

        {/* Mobile Menu Sheet - Controlled by state */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <SheetHeader className="mb-4">
              <SheetTitle>VectoBase</SheetTitle>
              <SheetDescription>Vector database for AI applications</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-4">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/#downloads"
                onClick={() => setMobileMenuOpen(false)}
              >
                Downloads
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4 text-primary"
                href="/forum"
                onClick={() => setMobileMenuOpen(false)}
              >
                Forum
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/documentation"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/#license"
                onClick={() => setMobileMenuOpen(false)}
              >
                License
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/community"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              <div className="border-t pt-4 mt-2 flex flex-col gap-2">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      <div className="container px-4 md:px-6 py-8">
        <div className="mb-6">
          <Breadcrumb className="mb-4 text-xs">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/forum">Forum</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/forum/category/${topicData.category.toLowerCase()}`}>
                  {topicData.category}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/forum/topic/${topicId}`} className="font-medium">
                  {topicData.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/forum"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Forum
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Original Post */}
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{topicData.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{topicData.category}</Badge>
                      <span className="text-xs text-muted-foreground">{topicData.views} views</span>
                      <span className="text-xs text-muted-foreground">{topicData.replies.length} replies</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={topicData.author.avatar} />
                      <AvatarFallback>{topicData.author.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{topicData.author.name}</span>
                      <span className="text-xs text-muted-foreground">Posted {topicData.date}</span>
                    </div>
                    <div className="prose prose-sm max-w-none">
                      {topicData.content.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4 text-sm">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`gap-2 ${isLiked ? "text-primary" : ""}`}
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{topicData.likes + (isLiked ? 1 : 0)}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>{topicData.replies.length}</span>
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={isBookmarked ? "text-primary" : ""}
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Flag className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>

            {/* Replies */}
            <div className="space-y-6">
              <h2 className="text-lg font-medium">Replies ({topicData.replies.length})</h2>

              {topicData.replies.map((reply, index) => (
                <Card key={index} id={`reply-${index}`}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={reply.author.avatar} />
                          <AvatarFallback>{reply.author.initials}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{reply.author.name}</span>
                            <span className="text-xs text-muted-foreground">Posted {reply.date}</span>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="prose prose-sm max-w-none">
                          {reply.content.split("\n\n").map((paragraph, i) => (
                            <p key={i} className="mb-4 text-sm">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{reply.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Heart className="h-4 w-4" />
                        <span>Thank</span>
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Flag className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Reply Form */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-base">Post a Reply</CardTitle>
                <CardDescription>Share your thoughts or provide an answer to this topic</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReply}>
                  <Textarea
                    placeholder="Write your reply here..."
                    className="min-h-32 mb-4"
                    value={replyContent}
                    onChange={(e: { target: { value: React.SetStateAction<string> } }) => setReplyContent(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <Button type="submit" disabled={!replyContent.trim()}>
                      Post Reply
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              {/* About Author */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">About the Author</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-16 w-16 mb-2">
                      <AvatarImage src={topicData.author.avatar} />
                      <AvatarFallback>{topicData.author.initials}</AvatarFallback>
                    </Avatar>
                    <div className="font-medium">{topicData.author.name}</div>
                    <div className="text-xs text-muted-foreground mb-2">
                      Member since {topicData.author.memberSince}
                    </div>
                    <div className="flex gap-2 text-xs text-muted-foreground">
                      <div>{topicData.author.posts} posts</div>
                      <div>•</div>
                      <div>{topicData.author.reputation} reputation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Similar Topics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Similar Topics</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {topicData.similarTopics.map((topic, index) => (
                      <Link
                        key={index}
                        href={`/forum/topic/${topic.id}`}
                        className="block p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="text-sm font-medium mb-1">{topic.title}</div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{topic.replies} replies</span>
                          <span className="mx-2">•</span>
                          <span>{topic.views} views</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Topic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Topic Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Created</span>
                      <span>{topicData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Reply</span>
                      <span>{topicData.lastReply}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Views</span>
                      <span>{topicData.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Replies</span>
                      <span>{topicData.replies.length}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <Link
                        href={`/forum/category/${topicData.category.toLowerCase()}`}
                        className="text-primary hover:underline"
                      >
                        {topicData.category}
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tags</span>
                      <div className="flex flex-wrap justify-end gap-1">
                        {topicData.tags.map((tag, index) => (
                          <Link
                            key={index}
                            href={`/forum/tag/${tag.toLowerCase()}`}
                            className="text-primary hover:underline"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t py-6 md:py-8 mt-12">
        <div className="container flex flex-col items-center justify-center gap-4 md:gap-6 text-center">
          <p className="text-sm leading-loose text-muted-foreground">© 2025 VectoBase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// This would normally come from an API call
function getTopicData(id: string) {
  // Mock data for the topic
  return {
    id,
    title: "Optimizing vector search for large datasets",
    category: "Performance",
    date: "2 hours ago",
    views: 324,
    likes: 42,
    lastReply: "15 minutes ago",
    tags: ["performance", "optimization", "large-scale"],
    author: {
      name: "Jane Doe",
      initials: "JD",
      avatar: "/placeholder.svg?height=40&width=40",
      memberSince: "Jan 2023",
      posts: 87,
      reputation: 1245,
    },
    content: `I'm working with a dataset of 50 million vectors (768 dimensions each) and experiencing slow query times. Has anyone implemented sharding or other optimization techniques with VectoBase at this scale?

Currently, my queries are taking around 500ms, which is too slow for our real-time application. I've tried increasing the cache size and using approximate nearest neighbor search, but I'm still not getting the performance I need.

I'm particularly interested in:
1. Sharding strategies that work well with VectoBase
2. Hardware recommendations for this scale
3. Index optimization techniques
4. Any other performance tips for large vector datasets

Any advice would be greatly appreciated!`,
    replies: [
      {
        author: {
          name: "Mark Smith",
          initials: "MS",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        date: "1 hour ago",
        content: `I've worked with similar-sized datasets and found that sharding by k-means clustering works really well with VectoBase. Here's what I did:

1. Split the 50M vectors into 10 shards using k-means clustering
2. Create a separate index for each shard
3. At query time, first determine which shard(s) to search using a lightweight classifier
4. Only search the relevant shards

This reduced our query times from ~500ms to ~50ms. The key is to make sure your sharding strategy groups similar vectors together.

For hardware, we're using machines with 64GB RAM and fast SSDs. Make sure your index fits in memory for best performance.`,
        likes: 18,
      },
      {
        author: {
          name: "Sarah Chen",
          initials: "SC",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        date: "45 minutes ago",
        content: `Have you tried using the HNSW index type? It's specifically designed for high-dimensional vectors and large datasets.

In our production environment, we're using HNSW with the following parameters:
- M = 16
- efConstruction = 200
- efSearch = 100

This gives us a good balance between build time, memory usage, and query performance. We're getting ~30ms query times on 100M vectors.

Also, make sure you're using the latest version of VectoBase (2.4.1) which includes significant performance improvements for large datasets.`,
        likes: 12,
      },
      {
        author: {
          name: "Alex Kim",
          initials: "AK",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        date: "30 minutes ago",
        content: `One thing that helped us a lot was dimensionality reduction. Do you really need all 768 dimensions?

We used PCA to reduce our vectors from 768 to 256 dimensions and saw almost no loss in accuracy but a 3x improvement in query speed.

VectoBase has built-in support for this in the latest version. You can use the 'dimensionality_reduction' parameter when creating your index.`,
        likes: 8,
      },
    ],
    similarTopics: [
      {
        id: "7",
        title: "VectoBase performance tuning guide",
        replies: 34,
        views: 1245,
      },
      {
        id: "8",
        title: "Scaling to billions of vectors",
        replies: 21,
        views: 876,
      },
      {
        id: "9",
        title: "Hardware recommendations for VectoBase",
        replies: 15,
        views: 654,
      },
      {
        id: "10",
        title: "HNSW vs. IVF for large datasets",
        replies: 28,
        views: 932,
      },
    ],
  }
}

