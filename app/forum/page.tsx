"use client"

import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Search, Filter, MessageSquare, Users, Star, Clock, ArrowUp, ArrowDown, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import SimpleFooter from "@/components/simplefooter"

export default function ForumPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="container mx-auto px-4 md:px-6 py-8">
                <Breadcrumb className="mb-4 text-xs">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/forum" className="font-medium">
                                Forum
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="flex flex-col gap-8">
                    {/* Forum Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-2xl font-bold mb-1">VectorDB Community Forum</h1>
                            <p className="text-sm text-muted-foreground">
                                Connect with other VectorDB users, share your experiences, and get help from the community.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Link href="/login">
                                <Button>New Topic</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search forum..."
                                className="pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" size="icon" className="h-10 w-10">
                            <Filter className="h-4 w-4" />
                            <span className="sr-only">Filter</span>
                        </Button>
                    </div>

                    {/* Forum Content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Categories */}
                        <div className="md:col-span-1 order-2 md:order-1">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">Categories</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="divide-y">
                                        <Link
                                            href="/forum/category/announcements"
                                            className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* <div className="p-2 rounded-md">
                                                    <MessageSquare className="h-4 w-4" />
                                                </div> */}
                                                <span className="text-sm font-medium">Announcements</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">24</Badge>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </Link>
                                        <Link
                                            href="/forum/category/general"
                                            className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* <div className="p-2 rounded-md">
                                                    <Users className="h-4 w-4" />
                                                </div> */}
                                                <span className="text-sm font-medium">General Discussion</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">156</Badge>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </Link>
                                        <Link
                                            href="/forum/category/help"
                                            className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* <div className="p-2 rounded-md">
                                                    <MessageSquare className="h-4 w-4" />
                                                </div> */}
                                                <span className="text-sm font-medium">Installation Help</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">89</Badge>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </Link>
                                        <Link
                                            href="/forum/category/api"
                                            className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* <div className="p-2 rounded-md">
                                                    <MessageSquare className="h-4 w-4" />
                                                </div> */}
                                                <span className="text-sm font-medium">API Questions</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">213</Badge>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </Link>
                                        <Link
                                            href="/forum/category/performance"
                                            className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* <div className="p-2 rounded-md">
                                                    <MessageSquare className="h-4 w-4" />
                                                </div> */}
                                                <span className="text-sm font-medium">Performance</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">78</Badge>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </Link>
                                        <Link
                                            href="/forum/category/showcase"
                                            className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* <div className="p-2 rounded-md">
                                                    <Star className="h-4 w-4" />
                                                </div> */}
                                                <span className="text-sm font-medium">Showcase</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">42</Badge>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </Link>
                                        <Link
                                            href="/forum/category/feature-requests"
                                            className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* <div className="p-2 rounded-md">
                                                    <MessageSquare className="h-4 w-4" />
                                                </div> */}
                                                <span className="text-sm font-medium">Feature Requests</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">117</Badge>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Popular Tags */}
                            <Card className="mt-6">
                                <CardHeader>
                                    <CardTitle className="text-base">Popular Tags</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary">python</Badge>
                                        <Badge variant="secondary">javascript</Badge>
                                        <Badge variant="secondary">performance</Badge>
                                        <Badge variant="secondary">indexing</Badge>
                                        <Badge variant="secondary">search</Badge>
                                        <Badge variant="secondary">docker</Badge>
                                        <Badge variant="secondary">kubernetes</Badge>
                                        <Badge variant="secondary">cloud</Badge>
                                        <Badge variant="secondary">embeddings</Badge>
                                        <Badge variant="secondary">clustering</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Topics */}
                        <div className="md:col-span-3 order-1 md:order-2">
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-base">Recent Discussions</CardTitle>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                                                <Clock className="h-4 w-4" />
                                                <span className="text-xs">Latest</span>
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                                                <ArrowUp className="h-4 w-4" />
                                                <span className="text-xs">Popular</span>
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                                                <ArrowDown className="h-4 w-4" />
                                                <span className="text-xs">Unanswered</span>
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="divide-y">
                                        {/* Topic 1 */}
                                        <div className="p-4 hover:bg-muted/50 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <Avatar>
                                                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <Link href="/forum/topic/1" className="font-medium hover:underline">
                                                            Optimizing vector search for large datasets
                                                        </Link>
                                                        <Badge variant="outline">Performance</Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        I'm working with a dataset of 50 million vectors and experiencing slow query times. Has
                                                        anyone implemented sharding or other optimization techniques?
                                                    </p>
                                                    <div className="flex items-center text-xs text-muted-foreground">
                                                        <span>Posted by Jane Doe</span>
                                                        <span className="mx-2">•</span>
                                                        <span>2 hours ago</span>
                                                        <span className="mx-2">•</span>
                                                        <span>18 replies</span>
                                                        <span className="mx-2">•</span>
                                                        <span>324 views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Topic 2 */}
                                        <div className="p-4 hover:bg-muted/50 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <Avatar>
                                                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                                    <AvatarFallback>MS</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <Link href="/forum/topic/2" className="font-medium hover:underline">
                                                            Announcing VectorDB 2.4.1 release
                                                        </Link>
                                                        <Badge variant="outline">Announcements</Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        We're excited to announce the release of VectorDB 2.4.1 with improved performance, new
                                                        features, and bug fixes.
                                                    </p>
                                                    <div className="flex items-center text-xs text-muted-foreground">
                                                        <span>Posted by Mark Smith</span>
                                                        <span className="mx-2">•</span>
                                                        <span>1 day ago</span>
                                                        <span className="mx-2">•</span>
                                                        <span>42 replies</span>
                                                        <span className="mx-2">•</span>
                                                        <span>1,245 views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Topic 3 */}
                                        <div className="p-4 hover:bg-muted/50 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <Avatar>
                                                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                                    <AvatarFallback>AL</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <Link href="/forum/topic/3" className="font-medium hover:underline">
                                                            Python SDK authentication issues
                                                        </Link>
                                                        <Badge variant="outline">API Questions</Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        I'm having trouble with authentication when using the Python SDK. Getting "Invalid
                                                        credentials" error even though my API key is correct.
                                                    </p>
                                                    <div className="flex items-center text-xs text-muted-foreground">
                                                        <span>Posted by Alex Lee</span>
                                                        <span className="mx-2">•</span>
                                                        <span>3 days ago</span>
                                                        <span className="mx-2">•</span>
                                                        <span>7 replies</span>
                                                        <span className="mx-2">•</span>
                                                        <span>189 views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Topic 4 */}
                                        <div className="p-4 hover:bg-muted/50 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <Avatar>
                                                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                                    <AvatarFallback>RJ</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <Link href="/forum/topic/4" className="font-medium hover:underline">
                                                            Building a semantic search engine with VectorDB
                                                        </Link>
                                                        <Badge variant="outline">Showcase</Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        I've built a semantic search engine for my company's documentation using VectorDB. Here's
                                                        how I did it and some lessons learned.
                                                    </p>
                                                    <div className="flex items-center text-xs text-muted-foreground">
                                                        <span>Posted by Rachel Johnson</span>
                                                        <span className="mx-2">•</span>
                                                        <span>5 days ago</span>
                                                        <span className="mx-2">•</span>
                                                        <span>31 replies</span>
                                                        <span className="mx-2">•</span>
                                                        <span>567 views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Topic 5 */}
                                        <div className="p-4 hover:bg-muted/50 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <Avatar>
                                                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                                    <AvatarFallback>DK</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <Link href="/forum/topic/5" className="font-medium hover:underline">
                                                            Best practices for vector indexing
                                                        </Link>
                                                        <Badge variant="outline">General Discussion</Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        What are your recommendations for vector indexing strategies? I'm trying to balance between
                                                        search accuracy and performance.
                                                    </p>
                                                    <div className="flex items-center text-xs text-muted-foreground">
                                                        <span>Posted by David Kim</span>
                                                        <span className="mx-2">•</span>
                                                        <span>1 week ago</span>
                                                        <span className="mx-2">•</span>
                                                        <span>24 replies</span>
                                                        <span className="mx-2">•</span>
                                                        <span>412 views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Topic 6 */}
                                        <div className="p-4 hover:bg-muted/50 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <Avatar>
                                                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                                    <AvatarFallback>SG</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <Link href="/forum/topic/6" className="font-medium hover:underline">
                                                            Feature request: Support for custom distance metrics
                                                        </Link>
                                                        <Badge variant="outline">Feature Requests</Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        It would be great if VectorDB supported custom distance metrics beyond the standard
                                                        Euclidean, cosine, and dot product options.
                                                    </p>
                                                    <div className="flex items-center text-xs text-muted-foreground">
                                                        <span>Posted by Sarah Green</span>
                                                        <span className="mx-2">•</span>
                                                        <span>1 week ago</span>
                                                        <span className="mx-2">•</span>
                                                        <span>15 replies</span>
                                                        <span className="mx-2">•</span>
                                                        <span>278 views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between p-4 border-t">
                                    <Button variant="outline" size="sm">
                                        Previous
                                    </Button>
                                    <div className="text-xs text-muted-foreground">Page 1 of 24</div>
                                    <Button variant="outline" size="sm">
                                        Next
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    {/* Join Community */}
                    <Card className="bg-primary/5 border-primary">
                        <CardContent className="pt-6 pb-6">
                            <div className="text-center">
                                <h3 className="text-xl font-bold mb-2">Join Our Community Today</h3>
                                <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                                    Get help, share your knowledge, and connect with other VectorDB users. Sign up to participate in
                                    discussions and get the most out of VectorDB.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Link href="/register">
                                        <Button>Sign Up</Button>
                                    </Link>
                                    <Link href="/login">
                                        <Button variant="outline">Log In</Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <SimpleFooter />
        </div>
    )
}

