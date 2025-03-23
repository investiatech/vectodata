import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Globe, Search, Zap, Check } from "lucide-react"

export default function Footer() {
    return (
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
    )
  }
  
  