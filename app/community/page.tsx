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
{/* 
                        <div className="flex justify-center mt-8">
                            <Link href="/guidelines">
                                <Button variant="outline">Read Full Guidelines</Button>
                            </Link>
                        </div> */}
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="w-full py-12 md:py-16 bg-muted/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Upcoming Events</h2>
                            <p className="max-w-[700px] text-muted-foreground">
                                Join us for virtual and in-person events to learn, share, and connect with the VectoBase community.
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
                                    <CardTitle className="mt-2">VectoBase Webinar: Performance Optimization</CardTitle>
                                    <CardDescription>
                                        Learn advanced techniques for optimizing VectoBase performance with large datasets.
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

                            {/* <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <Badge variant="outline" className="bg-primary/10 text-primary">
                                            In-Person
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">May 10-12, 2025</span>
                                    </div>
                                    <CardTitle className="mt-2">VectoBase Conference 2025</CardTitle>
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
                            </Card> */}

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
                                        Share your VectoBase projects and see what others in the community are building.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        <span>1:00 PM - 3:00 PM (EST)</span>
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                                        <Users className="mr-2 h-4 w-4" />
                                        <span>140 attending</span>
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
                                            Virtual
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">June 27, 2025</span>
                                    </div>
                                    <CardTitle className="mt-2">Community Meetup: Featuring talks</CardTitle>
                                    <CardDescription>
                                        Our annual conference featuring talks, workshops, and networking opportunities.
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

                        {/* <div className="flex justify-center mt-8">
                            <Link href="/events">
                                <Button variant="outline">View All Events</Button>
                            </Link>
                        </div> */}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

