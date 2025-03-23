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
                <h1 className="text-3xl font-bold mb-4">Documentation</h1>
                <p className="text-muted-foreground mb-6">
                  Comprehensive guides, tutorials, and API references to help you get the most out of VectorDB.
                </p>
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search documentation..."
                    className="w-full"
                    value={searchQuery}
                    onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Documentation Tabs */}
              <Tabs defaultValue="guides" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                  <TabsTrigger value="api">API Reference</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>

                {/* Guides Tab */}
                <TabsContent value="guides" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Installation Guide */}
                    <Card id="installation">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Installation Guide</CardTitle>
                          <Badge>Essential</Badge>
                        </div>
                        <CardDescription>Learn how to install VectorDB on different platforms</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          This guide covers installation on Linux, macOS, Windows, and Docker environments.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">System Requirements</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Linux Installation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">macOS Installation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Windows Installation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Docker Installation</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Read Guide
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Quick Start */}
                    <Card id="quickstart">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Quick Start</CardTitle>
                          <Badge>Essential</Badge>
                        </div>
                        <CardDescription>Get up and running with VectorDB in minutes</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          A quick introduction to VectorDB with examples to get you started immediately.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Starting the Server</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Creating Your First Index</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Adding Vectors</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Searching Vectors</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Next Steps</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Read Guide
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Basic Concepts */}
                    <Card id="basic-concepts">
                      <CardHeader>
                        <CardTitle>Basic Concepts</CardTitle>
                        <CardDescription>Understanding the core concepts of vector databases</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Learn about vectors, indexes, similarity metrics, and other fundamental concepts.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">What are Vectors?</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Vector Indexes</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Similarity Metrics</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Approximate Nearest Neighbors</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Vector Database Architecture</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Read Guide
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Configuration */}
                    <Card id="configuration">
                      <CardHeader>
                        <CardTitle>Configuration</CardTitle>
                        <CardDescription>Configure VectorDB for your specific needs</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Detailed information on all configuration options and how to optimize them.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Configuration File</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Memory Settings</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Storage Options</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Network Configuration</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Environment Variables</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Read Guide
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Performance Tuning */}
                    <Card id="performance">
                      <CardHeader>
                        <CardTitle>Performance Tuning</CardTitle>
                        <CardDescription>Optimize VectorDB for maximum performance</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Learn how to tune VectorDB for optimal performance with large datasets.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Hardware Recommendations</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Index Optimization</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Query Optimization</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Caching Strategies</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Benchmarking</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Read Guide
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Deployment */}
                    <Card id="deployment">
                      <CardHeader>
                        <CardTitle>Deployment</CardTitle>
                        <CardDescription>Deploy VectorDB in production environments</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Best practices for deploying VectorDB in production environments.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Deployment Architectures</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Kubernetes Deployment</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Cloud Deployment</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">High Availability</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Scaling Strategies</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Read Guide
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                {/* API Reference Tab */}
                <TabsContent value="api" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* REST API */}
                    <Card id="rest-api">
                      <CardHeader>
                        <CardTitle>REST API</CardTitle>
                        <CardDescription>Complete reference for the VectorDB REST API</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Detailed documentation for all REST API endpoints with examples.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Authentication</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Index Management</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Vector Operations</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Search Operations</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Administration</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View API Reference
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Python SDK */}
                    <Card id="python-sdk">
                      <CardHeader>
                        <CardTitle>Python SDK</CardTitle>
                        <CardDescription>Python client library for VectorDB</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Complete reference for the Python SDK with code examples.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Installation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Client Configuration</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Index Management</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Vector Operations</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Search Operations</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View SDK Reference
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* JavaScript SDK */}
                    <Card id="javascript-sdk">
                      <CardHeader>
                        <CardTitle>JavaScript SDK</CardTitle>
                        <CardDescription>JavaScript/TypeScript client for VectorDB</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Complete reference for the JavaScript SDK with code examples.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Installation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Client Configuration</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Index Management</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Vector Operations</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Search Operations</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View SDK Reference
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Go SDK */}
                    <Card id="go-sdk">
                      <CardHeader>
                        <CardTitle>Go SDK</CardTitle>
                        <CardDescription>Go client library for VectorDB</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Complete reference for the Go SDK with code examples.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Installation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Client Configuration</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Index Management</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Vector Operations</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Search Operations</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View SDK Reference
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Java SDK */}
                    <Card id="java-sdk">
                      <CardHeader>
                        <CardTitle>Java SDK</CardTitle>
                        <CardDescription>Java client library for VectorDB</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Complete reference for the Java SDK with code examples.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Installation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Client Configuration</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Index Management</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Vector Operations</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Search Operations</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View SDK Reference
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                {/* Tutorials Tab */}
                <TabsContent value="tutorials" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Semantic Search */}
                    <Card id="semantic-search">
                      <CardHeader>
                        <CardTitle>Building a Semantic Search Engine</CardTitle>
                        <CardDescription>Create a powerful semantic search engine with VectorDB</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Learn how to build a semantic search engine for text documents using VectorDB.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Text Embedding Generation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Index Creation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Document Ingestion</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Query Processing</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Result Ranking</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Tutorial
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Recommendation System */}
                    <Card id="recommendations">
                      <CardHeader>
                        <CardTitle>Building a Recommendation System</CardTitle>
                        <CardDescription>Create a personalized recommendation system</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Learn how to build a recommendation system for products, content, or users.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Feature Extraction</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">User Embedding</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Item Embedding</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Similarity Calculation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Recommendation Generation</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Tutorial
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Image Search */}
                    <Card id="image-search">
                      <CardHeader>
                        <CardTitle>Image Similarity Search</CardTitle>
                        <CardDescription>Build an image search engine with VectorDB</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Learn how to create an image similarity search system using VectorDB.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Image Feature Extraction</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Vector Representation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Index Creation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Query Processing</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Result Visualization</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Tutorial
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Clustering */}
                    <Card id="clustering">
                      <CardHeader>
                        <CardTitle>Vector Clustering</CardTitle>
                        <CardDescription>Implement clustering algorithms with VectorDB</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Learn how to implement clustering algorithms using vector representations.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Data Preparation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Vector Generation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Clustering Algorithms</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Cluster Analysis</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">Visualization</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Tutorial
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                {/* Examples Tab */}
                <TabsContent value="examples" className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 mt-6">
                    {/* Code Examples */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Code Examples</CardTitle>
                        <CardDescription>Ready-to-use code examples for common tasks</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Python Example */}
                          <div className="p-4 rounded-lg border">
                            <h3 className="font-medium mb-2">Python: Basic Vector Search</h3>
                            <div className="bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto">
                              <pre>{`import vectordb

# Connect to VectorDB
client = vectordb.Client("localhost:8080")

# Create an index
index = client.create_index(
    name="products",
    dimension=128,
    metric="cosine"
)

# Add vectors
vectors = [
    {"id": "1", "vector": [0.1, 0.2, ...], "metadata": {"name": "Product 1"}},
    {"id": "2", "vector": [0.3, 0.4, ...], "metadata": {"name": "Product 2"}},
]
index.add_vectors(vectors)

# Search vectors
query_vector = [0.2, 0.3, ...]
results = index.search(
    vector=query_vector,
    limit=10
)

for result in results:
    print(f"ID: {result.id}, Score: {result.score}, Name: {result.metadata['name']}")
`}</pre>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2">
                              Copy to Clipboard
                            </Button>
                          </div>

                          {/* JavaScript Example */}
                          <div className="p-4 rounded-lg border">
                            <h3 className="font-medium mb-2">JavaScript: Basic Vector Search</h3>
                            <div className="bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto">
                              <pre>{`import { VectorDBClient } from 'vectordb-js';

// Connect to VectorDB
const client = new VectorDBClient('http://localhost:8080');

// Create an index
const index = await client.createIndex({
  name: 'products',
  dimension: 128,
  metric: 'cosine'
});

// Add vectors
const vectors = [
  { id: '1', vector: [0.1, 0.2, ...], metadata: { name: 'Product 1' } },
  { id: '2', vector: [0.3, 0.4, ...], metadata: { name: 'Product 2' } },
];
await index.addVectors(vectors);

// Search vectors
const queryVector = [0.2, 0.3, ...];
const results = await index.search({
  vector: queryVector,
  limit: 10
});

results.forEach(result => {
  console.log(\`ID: \${result.id}, Score: \${result.score}, Name: \${result.metadata.name}\`);
});
`}</pre>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2">
                              Copy to Clipboard
                            </Button>
                          </div>

                          {/* REST API Example */}
                          <div className="p-4 rounded-lg border">
                            <h3 className="font-medium mb-2">REST API: Basic Vector Search</h3>
                            <div className="bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto">
                              <pre>{`# Create an index
curl -X POST "http://localhost:8080/indexes" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "products",
    "dimension": 128,
    "metric": "cosine"
  }'

# Add vectors
curl -X POST "http://localhost:8080/indexes/products/vectors" \\
  -H "Content-Type: application/json" \\
  -d '{
    "vectors": [
      {
        "id": "1",
        "vector": [0.1, 0.2, ...],
        "metadata": {"name": "Product 1"}
      },
      {
        "id": "2",
        "vector": [0.3, 0.4, ...],
        "metadata": {"name": "Product 2"}
      }
    ]
  }'

# Search vectors
curl -X POST "http://localhost:8080/indexes/products/search" \\
  -H "Content-Type: application/json" \\
  -d '{
    "vector": [0.2, 0.3, ...],
    "limit": 10
  }'
`}</pre>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2">
                              Copy to Clipboard
                            </Button>
                          </div>

                          {/* Go Example */}
                          <div className="p-4 rounded-lg border">
                            <h3 className="font-medium mb-2">Go: Basic Vector Search</h3>
                            <div className="bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto">
                              <pre>{`package main

import (
	"fmt"
	"github.com/vectordb/client-go"
)

func main() {
	// Connect to VectorDB
	client, err := vectordb.NewClient("localhost:8080")
	if err != nil {
		panic(err)
	}

	// Create an index
	index, err := client.CreateIndex(vectordb.IndexConfig{
		Name:      "products",
		Dimension: 128,
		Metric:    "cosine",
	})
	if err != nil {
		panic(err)
	}

	// Add vectors
	vectors := []vectordb.Vector{
		{
			ID:     "1",
			Vector: []float32{0.1, 0.2, ...},
			Metadata: map[string]interface{}{
				"name": "Product 1",
			},
		},
		{
			ID:     "2",
			Vector: []float32{0.3, 0.4, ...},
			Metadata: map[string]interface{}{
				"name": "Product 2",
			},
		},
	}
	err = index.AddVectors(vectors)
	if err != nil {
		panic(err)
	}

	// Search vectors
	queryVector := []float32{0.2, 0.3, ...}
	results, err := index.Search(vectordb.SearchConfig{
		Vector: queryVector,
		Limit:  10,
	})
	if err != nil {
		panic(err)
	}

	for _, result := range results {
		fmt.Printf("ID: %s, Score: %f, Name: %s\\n",
			result.ID, result.Score, result.Metadata["name"])
	}
}
`}</pre>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2">
                              Copy to Clipboard
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View All Examples
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Sample Projects */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Sample Projects</CardTitle>
                        <CardDescription>Complete projects showcasing VectorDB capabilities</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-4 rounded-lg border">
                            <h3 className="font-medium mb-2">Document Search Engine</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              A complete semantic search engine for documents using VectorDB and Python.
                            </p>
                            <div className="flex items-center text-xs text-muted-foreground mb-4">
                              <span>Python</span>
                              <span className="mx-2">•</span>
                              <span>Flask</span>
                              <span className="mx-2">•</span>
                              <span>VectorDB</span>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">
                              View Project
                            </Button>
                          </div>

                          <div className="p-4 rounded-lg border">
                            <h3 className="font-medium mb-2">Product Recommender</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              An e-commerce product recommendation system using VectorDB.
                            </p>
                            <div className="flex items-center text-xs text-muted-foreground mb-4">
                              <span>JavaScript</span>
                              <span className="mx-2">•</span>
                              <span>Node.js</span>
                              <span className="mx-2">•</span>
                              <span>VectorDB</span>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">
                              View Project
                            </Button>
                          </div>

                          <div className="p-4 rounded-lg border">
                            <h3 className="font-medium mb-2">Image Search</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              A visual search application for finding similar images using VectorDB.
                            </p>
                            <div className="flex items-center text-xs text-muted-foreground mb-4">
                              <span>Python</span>
                              <span className="mx-2">•</span>
                              <span>FastAPI</span>
                              <span className="mx-2">•</span>
                              <span>VectorDB</span>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">
                              View Project
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View All Projects
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Documentation Resources */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Video Tutorials</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Watch step-by-step video tutorials on using VectorDB.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <Link href="#" className="text-sm hover:underline">
                            Getting Started with VectorDB
                          </Link>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <Link href="#" className="text-sm hover:underline">
                            Building a Semantic Search Engine
                          </Link>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <Link href="#" className="text-sm hover:underline">
                            Advanced Vector Search Techniques
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Videos
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Webinars</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Join our webinars to learn from VectorDB experts.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <Link href="#" className="text-sm hover:underline">
                            Scaling VectorDB to Billions of Vectors
                          </Link>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <Link href="#" className="text-sm hover:underline">
                            AI Applications with VectorDB
                          </Link>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <Link href="#" className="text-sm hover:underline">
                            Enterprise Use Cases
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Webinars
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Community Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">Resources created by the VectorDB community.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <Link href="#" className="text-sm hover:underline">
                            Community Tutorials
                          </Link>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <Link href="#" className="text-sm hover:underline">
                            Blog Posts
                          </Link>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <Link href="#" className="text-sm hover:underline">
                            Open Source Projects
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Resources
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
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

