"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MessageSquare, Github, Twitter, Linkedin, Globe } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CommunityPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                {/* Community Guidelines */}
                <section className="w-full py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Community Guidelines</h2>
                            <p className="max-w-[700px] text-muted-foreground">
                                Our community is built on respect, collaboration, and a shared passion for vector databases.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Be Respectful</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Treat everyone with respect. We're all here to learn and grow together. Harassment and
                                        discrimination will not be tolerated.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Share Knowledge</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Share your knowledge and experiences with the community. Help others learn and grow by contributing
                                        to discussions and documentation.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Give Credit</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Give credit where credit is due. Acknowledge the work of others and respect intellectual property
                                        rights.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex justify-center mt-8">
                            <Link href="/guidelines">
                                <Button variant="outline">Read Full Guidelines</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="w-full py-12 md:py-16 bg-muted/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Upcoming Events</h2>
                            <p className="max-w-[700px] text-muted-foreground">
                                Join us for virtual and in-person events to learn, share, and connect with the VectorDB community.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <Badge variant="outline" className="bg-primary/10 text-primary">
                                            Virtual
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">April 15, 2025</span>
                                    </div>
                                    <CardTitle className="mt-2">VectorDB Webinar: Performance Optimization</CardTitle>
                                    <CardDescription>
                                        Learn advanced techniques for optimizing VectorDB performance with large datasets.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        <span>2:00 PM - 3:30 PM (EST)</span>
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                                        <Users className="mr-2 h-4 w-4" />
                                        <span>243 attending</span>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Register Now</Button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <Badge variant="outline" className="bg-primary/10 text-primary">
                                            In-Person
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">May 10-12, 2025</span>
                                    </div>
                                    <CardTitle className="mt-2">VectorDB Conference 2025</CardTitle>
                                    <CardDescription>
                                        Our annual conference featuring talks, workshops, and networking opportunities.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        <span>San Francisco, CA</span>
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                                        <Users className="mr-2 h-4 w-4" />
                                        <span>500+ attending</span>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Get Tickets</Button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <Badge variant="outline" className="bg-primary/10 text-primary">
                                            Virtual
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">June 5, 2025</span>
                                    </div>
                                    <CardTitle className="mt-2">Community Meetup: Show & Tell</CardTitle>
                                    <CardDescription>
                                        Share your VectorDB projects and see what others in the community are building.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        <span>1:00 PM - 3:00 PM (EST)</span>
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                                        <Users className="mr-2 h-4 w-4" />
                                        <span>125 attending</span>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Register Now</Button>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="flex justify-center mt-8">
                            <Link href="/events">
                                <Button variant="outline">View All Events</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Community Projects */}
                <section className="w-full py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Community Projects</h2>
                            <p className="max-w-[700px] text-muted-foreground">
                                Explore projects built by the community using VectorDB.
                            </p>
                        </div>

                        <Tabs defaultValue="featured" className="w-full">
                            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                                <TabsTrigger value="featured">Featured</TabsTrigger>
                                <TabsTrigger value="recent">Recent</TabsTrigger>
                                <TabsTrigger value="popular">Popular</TabsTrigger>
                            </TabsList>
                            <TabsContent value="featured" className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Semantic Search Engine</CardTitle>
                                            <CardDescription>
                                                A powerful semantic search engine for documentation and knowledge bases.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Badge variant="outline">JavaScript</Badge>
                                                <Badge variant="outline">React</Badge>
                                                <Badge variant="outline">VectorDB</Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Built by Sarah Chen, this project uses VectorDB to power a semantic search engine for technical
                                                documentation.
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <div className="flex items-center">
                                                <Avatar className="h-8 w-8 mr-2">
                                                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                                    <AvatarFallback>SC</AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm">Sarah Chen</span>
                                            </div>
                                            <Link
                                                href="https://github.com/sarahchen/semantic-search"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="ghost" size="sm">
                                                    <Github className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>VectorDB Dashboard</CardTitle>
                                            <CardDescription>
                                                A beautiful dashboard for monitoring and managing your VectorDB instances.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Badge variant="outline">TypeScript</Badge>
                                                <Badge variant="outline">Next.js</Badge>
                                                <Badge variant="outline">VectorDB</Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Created by Michael Johnson, this dashboard provides real-time monitoring and management for
                                                VectorDB.
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <div className="flex items-center">
                                                <Avatar className="h-8 w-8 mr-2">
                                                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                                    <AvatarFallback>MJ</AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm">Michael Johnson</span>
                                            </div>
                                            <Link
                                                href="https://github.com/mjohnson/vectordb-dashboard"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="ghost" size="sm">
                                                    <Github className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Image Search</CardTitle>
                                            <CardDescription>
                                                A visual search application for finding similar images using VectorDB.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Badge variant="outline">Python</Badge>
                                                <Badge variant="outline">FastAPI</Badge>
                                                <Badge variant="outline">VectorDB</Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Developed by Alex Kim, this application uses VectorDB to power a visual search engine for
                                                images.
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <div className="flex items-center">
                                                <Avatar className="h-8 w-8 mr-2">
                                                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                                    <AvatarFallback>AK</AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm">Alex Kim</span>
                                            </div>
                                            <Link href="https://github.com/alexkim/image-search" target="_blank" rel="noopener noreferrer">
                                                <Button variant="ghost" size="sm">
                                                    <Github className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="recent" className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Recent projects would go here */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>VectorDB CLI</CardTitle>
                                            <CardDescription>A powerful command-line interface for VectorDB.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Badge variant="outline">Go</Badge>
                                                <Badge variant="outline">CLI</Badge>
                                                <Badge variant="outline">VectorDB</Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                A new CLI tool for managing VectorDB instances from the terminal.
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <div className="flex items-center">
                                                <Avatar className="h-8 w-8 mr-2">
                                                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                                    <AvatarFallback>RL</AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm">Ryan Lee</span>
                                            </div>
                                            <Link href="#" target="_blank" rel="noopener noreferrer">
                                                <Button variant="ghost" size="sm">
                                                    <Github className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="popular" className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Popular projects would go here */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>VectorDB Explorer</CardTitle>
                                            <CardDescription>A visual explorer for your vector database.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Badge variant="outline">JavaScript</Badge>
                                                <Badge variant="outline">D3.js</Badge>
                                                <Badge variant="outline">VectorDB</Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Visualize and explore your vector embeddings with this interactive tool.
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <div className="flex items-center">
                                                <Avatar className="h-8 w-8 mr-2">
                                                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm">Jamie Davis</span>
                                            </div>
                                            <Link href="#" target="_blank" rel="noopener noreferrer">
                                                <Button variant="ghost" size="sm">
                                                    <Github className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>

                        <div className="flex justify-center mt-8">
                            <Link href="/projects">
                                <Button variant="outline">View All Projects</Button>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

