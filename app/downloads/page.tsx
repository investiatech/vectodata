"use client"

import Link from "next/link"
import { ArrowRight, Database, Globe, Search, Zap, Check, Github, Box, Code, Cpu, ExternalLink, HardDrive, DockIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { SetStateAction, useState } from "react"
import Navbar from "@/components/navbar"


export default function Doc() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="mx-auto">
                <section id="docker-downloads" className="w-full py-12 md:py-24 lg:py-32 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Docker Images</div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">VectoBase Docker Images</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Ready-to-use Docker containers for quick deployment and scaling of your vector database.
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                            {/* Server Image */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-bold text-lg">Server Image</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>Core VectoBase server with all database functionality</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull VectoBase/server:latest</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Optimized for production environments with high-performance vector search capabilities.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 15, 2025</p>
                                        <p>Size: 245 MB</p>
                                        <p>Architecture: amd64, arm64</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">
                                        Docker Hub
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        Documentation
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Client Image */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-bold text-lg">Client Tools</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.0</span>
                                    </div>
                                    <CardDescription>Client utilities and tools for interacting with VectoBase</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull VectoBase/client:latest</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Includes CLI tools, data import/export utilities, and monitoring dashboards.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 10, 2025</p>
                                        <p>Size: 120 MB</p>
                                        <p>Architecture: amd64, arm64</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">
                                        Docker Hub
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        Documentation
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Full Stack Image */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-bold text-lg">Full Stack</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>Complete VectoBase environment with server, client, and UI</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull VectoBase/full:latest</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        All-in-one solution for development and testing with web-based admin interface.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 15, 2025</p>
                                        <p>Size: 380 MB</p>
                                        <p>Architecture: amd64, arm64</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">
                                        Docker Hub
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        Documentation
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Slim Image */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-bold text-lg">Slim Image</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>Minimalist VectoBase server for resource-constrained environments</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull VectoBase/slim:latest</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Optimized for edge devices and environments with limited resources.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 15, 2025</p>
                                        <p>Size: 85 MB</p>
                                        <p>Architecture: amd64, arm64, arm/v7</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">
                                        Docker Hub
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        Documentation
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* GPU Accelerated */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-bold text-lg">GPU Accelerated</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.0</span>
                                    </div>
                                    <CardDescription>CUDA-enabled VectoBase server for high-performance computing</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull VectoBase/gpu:latest</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Optimized for NVIDIA GPUs with CUDA support for ultra-fast vector operations.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 10, 2025</p>
                                        <p>Size: 1.2 GB</p>
                                        <p>Architecture: amd64</p>
                                        <p>Requirements: NVIDIA GPU, CUDA 12.0+</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">
                                        Docker Hub
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        Documentation
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Development Image */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-bold text-lg">Development</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">nightly</span>
                                    </div>
                                    <CardDescription>Development environment with source code and build tools</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull VectoBase/dev:nightly</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Complete development environment with source code, dependencies, and build tools.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Updated: Daily</p>
                                        <p>Size: 1.8 GB</p>
                                        <p>Architecture: amd64</p>
                                        <p>Note: Not recommended for production use</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">
                                        Docker Hub
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        GitHub Repository
                                        <Github className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="mt-12 mx-auto max-w-5xl">
                            <div className="rounded-lg border bg-card p-6">
                                <h3 className="text-xl font-bold mb-4">Docker Compose Example</h3>
                                <p className="text-muted-foreground mb-4">
                                    Get started quickly with this Docker Compose configuration:
                                </p>
                                <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                                    <pre>{`version: '3'
    services:
    VectoBase:
        image: VectoBase/server:latest
        ports:
        - "8080:8080"
        volumes:
        - VectoBase-data:/data
        environment:
        - VectoBase_MEMORY=4G
        - VectoBase_THREADS=4
        
    VectoBase-ui:
        image: VectoBase/client:latest
        ports:
        - "3000:3000"
        environment:
        - VectoBase_SERVER=VectoBase:8080

    volumes:
    VectoBase-data:`}</pre>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <Button variant="outline" size="sm">
                                        Copy to Clipboard
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="downloads" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Downloads</div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Download VectoBase</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Get started with our high-performance vector database for AI applications.
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                            {/* Server Package */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-lg">Server Package</span>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>Core VectoBase server with all database functionality</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>wget https://downloads.VectoBase.com/server-2.4.1.tar.gz</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Optimized for production environments with high-performance vector search capabilities.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 15, 2025</p>
                                        <p>Size: 245 MB</p>
                                        <p>Platforms: Linux, macOS, Windows</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">Download</Button>
                                    <Button variant="outline" className="w-full">
                                        Documentation
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Client Tools */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-lg">Client Tools</span>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.0</span>
                                    </div>
                                    <CardDescription>Client utilities and tools for interacting with VectoBase</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>wget https://downloads.VectoBase.com/client-2.4.0.tar.gz</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Includes CLI tools, data import/export utilities, and monitoring dashboards.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 10, 2025</p>
                                        <p>Size: 120 MB</p>
                                        <p>Platforms: Linux, macOS, Windows</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">Download</Button>
                                    <Button variant="outline" className="w-full">
                                        Documentation
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Docker Image */}
                            <Card className="flex flex-col border-primary">
                                <CardHeader className="bg-primary/5 rounded-t-lg">
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-lg">Docker Image</span>
                                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                                            Recommended
                                        </span>
                                    </div>
                                    <CardDescription>Official Docker image for easy deployment</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull VectoBase/server:latest</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        The easiest way to get started with VectoBase. Includes all dependencies and configuration.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Updated: March 15, 2025</p>
                                        <p>Size: 245 MB</p>
                                        <p>Platforms: Any Docker-compatible system</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">Docker Hub</Button>
                                    <Button variant="outline" className="w-full">
                                        Documentation
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Python SDK */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-lg">Python SDK</span>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>Python client library for VectoBase</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>pip install VectoBase</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Comprehensive Python SDK with full API support and examples.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 15, 2025</p>
                                        <p>Size: 2.4 MB</p>
                                        <p>Requirements: Python 3.8+</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">PyPI</Button>
                                    <Button variant="outline" className="w-full">
                                        Documentation
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* JavaScript SDK */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-lg">JavaScript SDK</span>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.3.0</span>
                                    </div>
                                    <CardDescription>JavaScript/TypeScript client for VectoBase</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>npm install VectoBase-js</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        JavaScript client with TypeScript definitions for browser and Node.js.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 1, 2025</p>
                                        <p>Size: 1.2 MB</p>
                                        <p>Requirements: Node.js 18+ or modern browsers</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">NPM</Button>
                                    <Button variant="outline" className="w-full">
                                        Documentation
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Source Code */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-lg">Source Code</span>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>VectoBase source code for custom builds</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>git clone https://github.com/VectoBase/VectoBase.git</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Full source code for custom builds and modifications.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Updated: March 15, 2025</p>
                                        <p>License: Apache 2.0</p>
                                        <p>Build Requirements: C++17 compiler, CMake 3.15+</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-2">
                                    <Button className="w-full">GitHub</Button>
                                    <Button variant="outline" className="w-full">
                                        Build Instructions
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="footer" className="w-full py-12 md:py-24 lg:py-32 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Connect With Us</div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stay Updated with VectoBase</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Subscribe to our newsletter for the latest updates, tutorials, and insights about vector databases and
                                    AI.
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto max-w-5xl mb-16">
                            <div className="rounded-lg border bg-card p-8">
                                <div className="grid gap-6 lg:grid-cols-2 items-center">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Newsletter</h3>
                                        <p className="text-muted-foreground mb-4">
                                            Get the latest news, updates, and resources delivered directly to your inbox.
                                        </p>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex flex-col sm:flex-row gap-2">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            />
                                            <Button className="sm:w-auto">Subscribe</Button>
                                        </div>
                                        <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="col-span-2">
                                <div className="rounded-lg border bg-card p-6">
                                    <Link href="#" className="flex items-center mb-4">
                                        <Database className="h-6 w-6 mr-2" />
                                        <span className="font-bold text-lg">VectoBase</span>
                                    </Link>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Powerful vector database for AI applications. Store, search, and analyze high-dimensional vector data
                                        with blazing speed.
                                    </p>
                                    <div className="flex space-x-4">
                                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5"
                                            >
                                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                            </svg>
                                            <span className="sr-only">Twitter</span>
                                        </Link>
                                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5"
                                            >
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect width="4" height="12" x="2" y="9"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                            <span className="sr-only">LinkedIn</span>
                                        </Link>
                                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5"
                                            >
                                                <path d="M12 2H2v10h10V2zM22 2h-8v10h8V2zM12 14H2v8h10v-8zM22 14h-8v8h8v-8z"></path>
                                            </svg>
                                            <span className="sr-only">GitHub</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="rounded-lg border bg-card p-6 h-full">
                                    <h3 className="text-lg font-bold mb-4">Product</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li>
                                            <Link href="#features" className="text-muted-foreground hover:text-foreground">
                                                Features
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                                                Pricing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                                API
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                                Documentation
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="rounded-lg border bg-card p-6 h-full">
                                    <h3 className="text-lg font-bold mb-4">Company</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li>
                                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                                Careers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto max-w-5xl mt-16 pt-8 border-t">
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                <p className="text-sm text-muted-foreground">© 2025 Investia.Tech. All rights reserved.</p>
                                <div className="flex gap-4 mt-4 sm:mt-0">
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Terms of Service
                                    </Link>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Privacy Policy
                                    </Link>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                        Cookie Policy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

