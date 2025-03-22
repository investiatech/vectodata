
import Link from "next/link"
import { ArrowRight, Database, Globe, Search, Zap, Check, Github, Box, Code, Cpu, ExternalLink, HardDrive, DockIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function Home() {
    return (
        <div className="min-h-screen">
            <header className="px-4 lg:px-6 h-16 flex justify-between items-center border-b">
                <Link className="flex items-center justify-center" href="#">
                    <Database className="h-6 w-6 mr-2" />
                    <span className="font-bold">VectoBase</span>
                </Link>
                <nav className="flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
                        How It Works
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#use-cases">
                        Use Cases
                    </Link>
                </nav>
            </header>

            <main className="mx-auto">

                <section id="docker-downloads" className="w-full py-12 md:py-24 lg:py-32 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Docker Images</div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">VectorDB Docker Images</h2>
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
                                            <div className="bg-primary/10 p-2 rounded-md">
                                                <DockIcon className="h-8 w-8 text-primary" />
                                            </div>
                                            <span className="font-bold text-lg">Server Image</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>Core VectorDB server with all database functionality</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull vectordb/server:latest</code>
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
                                            <div className="bg-primary/10 p-2 rounded-md">
                                                <Code className="h-8 w-8 text-primary" />
                                            </div>
                                            <span className="font-bold text-lg">Client Tools</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.0</span>
                                    </div>
                                    <CardDescription>Client utilities and tools for interacting with VectorDB</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull vectordb/client:latest</code>
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
                                            <div className="bg-primary/10 p-2 rounded-md">
                                                <Box className="h-8 w-8 text-primary" />
                                            </div>
                                            <span className="font-bold text-lg">Full Stack</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>Complete VectorDB environment with server, client, and UI</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull vectordb/full:latest</code>
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
                                            <div className="bg-primary/10 p-2 rounded-md">
                                                <HardDrive className="h-8 w-8 text-primary" />
                                            </div>
                                            <span className="font-bold text-lg">Slim Image</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>Minimalist VectorDB server for resource-constrained environments</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull vectordb/slim:latest</code>
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
                                            <div className="bg-primary/10 p-2 rounded-md">
                                                <Cpu className="h-8 w-8 text-primary" />
                                            </div>
                                            <span className="font-bold text-lg">GPU Accelerated</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.0</span>
                                    </div>
                                    <CardDescription>CUDA-enabled VectorDB server for high-performance computing</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull vectordb/gpu:latest</code>
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
                                            <div className="bg-primary/10 p-2 rounded-md">
                                                <Github className="h-8 w-8 text-primary" />
                                            </div>
                                            <span className="font-bold text-lg">Development</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">nightly</span>
                                    </div>
                                    <CardDescription>Development environment with source code and build tools</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>docker pull vectordb/dev:nightly</code>
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
    vectordb:
        image: vectordb/server:latest
        ports:
        - "8080:8080"
        volumes:
        - vectordb-data:/data
        environment:
        - VECTORDB_MEMORY=4G
        - VECTORDB_THREADS=4
        
    vectordb-ui:
        image: vectordb/client:latest
        ports:
        - "3000:3000"
        environment:
        - VECTORDB_SERVER=vectordb:8080

    volumes:
    vectordb-data:`}</pre>
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
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    Get Started with VectoBase
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Download our client libraries and tools to integrate VectorDB into your applications.
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                            {/* Python SDK */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary" fill="currentColor">
                                                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                                            </svg>
                                            <span className="font-bold text-lg">Python SDK</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>
                                        Our official Python client library with full API support
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>pip install vectordb-python</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Includes comprehensive documentation, examples, and type hints for a seamless development experience.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 15, 2025</p>
                                        <p>Size: 2.4 MB</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">
                                        Download
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Python SDK */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary" fill="currentColor">
                                                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                                            </svg>
                                            <span className="font-bold text-lg">Python SDK</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>
                                        Our official Python client library with full API support
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>pip install vectordb-python</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Includes comprehensive documentation, examples, and type hints for a seamless development experience.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 15, 2025</p>
                                        <p>Size: 2.4 MB</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">
                                        Download
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Python SDK */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary" fill="currentColor">
                                                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                                            </svg>
                                            <span className="font-bold text-lg">Python SDK</span>
                                        </div>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full">v2.4.1</span>
                                    </div>
                                    <CardDescription>
                                        Our official Python client library with full API support
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                                        <code>pip install vectordb-python</code>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Includes comprehensive documentation, examples, and type hints for a seamless development experience.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Released: March 15, 2025</p>
                                        <p>Size: 2.4 MB</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">
                                        Download
                                        <ArrowRight className="ml-2 h-4 w-4" />
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
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stay Updated with VectorDB</h2>
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

