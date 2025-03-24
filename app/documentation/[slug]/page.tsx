"use client"

import Link from "next/link"
import { SetStateAction, useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Navbar from "@/components/navbar"

export default function Documentation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="container mx-auto px-4 md:px-6 py-8">
                <Breadcrumb className="mb-6">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/documentation" className="font-medium">
                                Documentation
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Navigation - Hidden on mobile */}
                    <div className="hidden md:block w-64 flex-shrink-0">
                        <div className="sticky top-8">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Getting Started</h3>
                                    <ul className="space-y-1">
                                        <li>
                                            <Link
                                                href="/documentation#installation"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Installation Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#quickstart"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Quick Start
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#basic-concepts"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Basic Concepts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#configuration"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Configuration
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-2">API Reference</h3>
                                    <ul className="space-y-1">
                                        <li>
                                            <Link
                                                href="/documentation#rest-api"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                REST API
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#python-sdk"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Python SDK
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#javascript-sdk"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                JavaScript SDK
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#go-sdk"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Go SDK
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#java-sdk"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Java SDK
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-2">Guides</h3>
                                    <ul className="space-y-1">
                                        <li>
                                            <Link
                                                href="/documentation#performance"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Performance Tuning
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#deployment"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Deployment
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#security"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Security
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#migration"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Migration
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#monitoring"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Monitoring
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-2">Tutorials</h3>
                                    <ul className="space-y-1">
                                        <li>
                                            <Link
                                                href="/documentation#semantic-search"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Semantic Search
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#recommendations"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Recommendations
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#image-search"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Image Search
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/documentation#clustering"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Clustering
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="space-y-8">
                            {/* Header and Search */}
                            <div>
                                <h1 className="text-3xl font-bold mb-4">Quick Installation</h1>
                                <p className="text-muted-foreground mb-6">
                                    Comprehensive guides to Quick Installation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="border-t py-6 md:py-8 mt-12">
                <div className="container flex flex-col items-center justify-center gap-4 md:gap-6 text-center">
                    <p className="text-sm leading-loose text-muted-foreground">© 2025 VectorDB. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

