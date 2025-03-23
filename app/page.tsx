import Link from "next/link"
import { ArrowRight, Database, Globe, Search, Zap, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Image from "next/image"

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
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <Image
            src="/images/ai.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="relative container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl">
                    Powerful Vector Database for AI Applications
                  </h1>
                  <p className="max-w-[600px] mx-auto text-white md:text-xl">
                    Store, search, and analyze high-dimensional vector data with blazing speed and unmatched accuracy.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button variant="outline" className="inline-flex h-10 w-46 items-center justify-center rounded-md bg-primary/90 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/50 hover:text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Documentation</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-80 overflow-hidden rounded-lg border bg-transparent p-2">
                  <Image
                    src="/images/ai.png"
                    alt="Opis obrazka"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Why Choose Our Vector Database?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our vector database is designed to handle the unique requirements of AI and machine learning applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <Zap className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>High Performance</CardTitle>
                  <CardDescription>
                    Process millions of vectors in milliseconds with our optimized indexing system.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our database is built from the ground up for speed, with specialized algorithms for approximate nearest neighbor search.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Search className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Semantic Search</CardTitle>
                  <CardDescription>Find similar items based on meaning, not just keywords.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Enable powerful semantic search capabilities in your applications with vector embeddings.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Scalable Architecture</CardTitle>
                  <CardDescription>Scale from thousands to billions of vectors with ease.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our distributed architecture ensures your database can grow with your needs without performance degradation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Understanding Vector Databases
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A vector database is designed to store and search data as mathematical vectors in multi-dimensional
                  space. [^1][^3]
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 mt-8 items-center">
              <div className="rounded-lg border bg-card p-8">
                <h3 className="text-xl font-bold mb-4">What is a Vector Embedding?</h3>
                <p className="mb-4">
                  An embedding is data that's converted to an array of numbers (a vector). The combination of the
                  numbers that make up the vector form a multi-dimensional map used in comparison to other vectors to
                  determine similarity. [^1]
                </p>
                <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <p>// Example of a vector for an image of a cat</p>
                  <p>[0.1, 0.2, 0.3, 0.4, 0.5];</p>
                  <p>// Example of a vector for an image of a dog</p>
                  <p>[(0.2, 0.3, 0.4, 0.5, 0.6)];</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  The closer the values are to each other, the more similar the vectors are. [^1]
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-bold mb-2">1. Data Conversion</h4>
                  <p className="text-sm text-muted-foreground">
                    Text, images, or other data are converted into vector embeddings using machine learning models.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-bold mb-2">2. Vector Storage</h4>
                  <p className="text-sm text-muted-foreground">
                    These vectors are stored in the database with optimized indexing for fast retrieval.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-bold mb-2">3. Similarity Search</h4>
                  <p className="text-sm text-muted-foreground">
                    When you search, your query is converted to a vector and compared to find the most similar items.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Use Cases</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Applications of Vector Databases
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vector databases power a wide range of AI applications across industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-8">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold mb-2">Personalized Search</h3>
                <p className="text-muted-foreground mb-4">
                  Use vector databases to provide personalized search results. By analyzing user behavior and
                  preferences as vectors, search engines can suggest results that are likely to interest the user.
                  [^1][^2]
                </p>
                <div className="h-40 rounded-md bg-muted flex items-center justify-center">
                  <Search className="h-12 w-12 text-primary/40" />
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold mb-2">Image and Video Retrieval</h3>
                <p className="text-muted-foreground mb-4">
                  Use vector databases in image and video retrieval systems. They can quickly find images or videos
                  similar to a given input by comparing embeddings that represent visual content. [^1][^2]
                </p>
                <div className="h-40 rounded-md bg-muted flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 p-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="aspect-square rounded bg-primary/20" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold mb-2">Recommendation Systems</h3>
                <p className="text-muted-foreground mb-4">
                  Use vector databases in e-commerce apps and streaming services to help power recommendation systems.
                  By analyzing user behavior, preferences, and item characteristics as vectors, these systems can
                  suggest products, movies, or articles that are likely to interest the user. [^1][^2]
                </p>
                <div className="h-40 rounded-md bg-muted flex items-center justify-center">
                  <div className="flex space-x-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="w-16 h-24 rounded bg-primary/20" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold mb-2">AI-Powered Chatbots</h3>
                <p className="text-muted-foreground mb-4">
                  Enhance chatbots with vector databases to retrieve relevant information and provide more accurate,
                  contextual responses to user queries.
                </p>
                <div className="h-40 rounded-md bg-muted flex items-center justify-center p-4">
                  <div className="w-full space-y-2">
                    <div className="bg-primary/10 p-2 rounded-lg rounded-bl-none max-w-[80%]">
                      How do vector databases work?
                    </div>
                    <div className="bg-primary/20 p-2 rounded-lg rounded-br-none max-w-[80%] ml-auto">
                      Vector databases store data as mathematical vectors, allowing for similarity searches...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your business. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
              {/* Free Tier */}
              <Card className="flex flex-col border-primary">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>Perfect for personal projects and experimentation</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Up to 1M vectors</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>5 QPS limit</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Community support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Basic analytics</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Pro Tier */}
              <Card className="flex flex-col border-primary">
                <CardHeader className="rounded-t-lg">
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For growing and innovative applications and businesses</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$49</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Up to 10M vectors</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>50 QPS limit</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Email support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Multiple indexes</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>API key management</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Free Trial</Button>
                </CardFooter>
              </Card>

              {/* Enterprise Tier */}
              <Card className="flex flex-col border-primary">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large-scale applications and organizations</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">Custom</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Unlimited vectors</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Custom QPS limits</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Enterprise analytics</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>SLA guarantees</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>On-premise deployment option</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about VectorDB and our services.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 mt-8">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-bold mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-muted-foreground">
                  Yes, you can change your plan at any time. Changes take effect at the start of the next billing cycle.
                  There are no penalties for changing plans.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-bold mb-2">What happens if I exceed my vector limit?</h3>
                <p className="text-muted-foreground">
                  You'll receive a notification when you reach 80% of your limit. You can upgrade your plan or contact
                  us for temporary extensions to avoid any service interruptions.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-bold mb-2">Do you offer academic or non-profit discounts?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer special pricing for academic institutions and non-profit organizations. Contact our
                  sales team for details and eligibility requirements.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and wire transfers for Enterprise plans. All payments are
                  processed securely through our payment providers.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-bold mb-2">Is there a free trial available?</h3>
                <p className="text-muted-foreground">
                  Yes, all paid plans include a 14-day free trial. You can test all features without any commitment, and
                  no credit card is required for the free tier.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-bold mb-2">How secure is my data?</h3>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your data. All data is encrypted at rest
                  and in transit, and we regularly perform security audits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Transform Your AI Applications Today
                </h2>
                <p className="text-primary-foreground/90 md:text-xl">
                  Join thousands of companies using VectorDB to power their semantic search, recommendation systems, and
                  AI applications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
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
                      className="h-5 w-5 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Free tier with up to 1 million vectors</span>
                  </li>
                  <li className="flex items-center">
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
                      className="h-5 w-5 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Simple API with client libraries for all major languages</span>
                  </li>
                  <li className="flex items-center">
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
                      className="h-5 w-5 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Dedicated support from our expert team</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
                <p className="mb-6 text-primary-foreground/90">
                  Create your account in minutes and start building with VectorDB today.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-primary hover:bg-white/90">Sign Up Free</Button>
                  <Button className="w-full border-white text-white hover:bg-white/10">
                    Start Free Trial
                  </Button>
                  <p className="text-xs text-center text-primary-foreground/80 mt-4">
                    No credit card required for free tier. Upgrade anytime.
                  </p>
                </div>
              </div>
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
