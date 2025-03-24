"use client"

import Link from "next/link"
import { useState } from "react"
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
import { ArrowRight, Database, Globe, Search, Zap, Check } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="mx-auto">
                <section id="license" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">License</div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">MIT License</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    VectoBase is open source software licensed under the MIT License.
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto max-w-3xl mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>What does the MIT License mean for you?</CardTitle>
                                    <CardDescription>
                                        The MIT License is a permissive license that is short and to the point. It lets people do almost
                                        anything they want with your project, like making and distributing closed source versions.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="permissions">
                                            <AccordionTrigger>Permissions</AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="list-disc pl-6 space-y-2">
                                                    <li>Commercial use: You can use VectoBase for commercial purposes</li>
                                                    <li>Modification: You can modify VectoBase</li>
                                                    <li>Distribution: You can distribute VectoBase</li>
                                                    <li>Private use: You can use VectoBase privately</li>
                                                    <li>Sublicense: You can grant sublicenses to VectoBase</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="limitations">
                                            <AccordionTrigger>Limitations</AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="list-disc pl-6 space-y-2">
                                                    <li>Liability: The license includes a limitation of liability</li>
                                                    <li>Warranty: The license explicitly states that it does NOT provide any warranty</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="conditions">
                                            <AccordionTrigger>Conditions</AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="list-disc pl-6 space-y-2">
                                                    <li>
                                                        License and copyright notice: A copy of the license and copyright notice must be included
                                                        with VectoBase
                                                    </li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    <div className="mt-8 p-4 bg-muted rounded-md">
                                        <h4 className="font-bold mb-2">MIT License Text</h4>
                                        <div className="text-xs text-muted-foreground space-y-2">
                                            <p>Copyright (c) 2025 VectoBase</p>
                                            <p>
                                                Permission is hereby granted, free of charge, to any person obtaining a copy of this software
                                                and associated documentation files (the "Software"), to deal in the Software without
                                                restriction, including without limitation the rights to use, copy, modify, merge, publish,
                                                distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
                                                Software is furnished to do so, subject to the following conditions:
                                            </p>
                                            <p>
                                                The above copyright notice and this permission notice shall be included in all copies or
                                                substantial portions of the Software.
                                            </p>
                                            <p>
                                                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
                                                BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                                                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                                                DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline">View on GitHub</Button>
                                </CardFooter>
                            </Card>

                            <div className="mt-8 text-center">
                                <p className="text-sm text-muted-foreground">
                                    For questions about licensing or to report license violations, please contact{" "}
                                    <a href="mailto:legal@vectobase.com" className="underline">
                                        legal@vectobase.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}



