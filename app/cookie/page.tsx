import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import SimpleFooter from "@/components/simplefooter"

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl text-sm text-muted-foreground">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Cookie Policy</h1>

                <div className="space-y-8 text-gray-700">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
                        <p className="mb-4">
                            This Cookie Policy explains how VectoBase ("we", "us", or "our") uses cookies and similar technologies to
                            recognize you when you visit our website. It explains what these technologies are and why we use them, as
                            well as your rights to control our use of them.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. What Are Cookies?</h2>
                        <p className="mb-4">
                            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                            Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
                            well as to provide reporting information.
                        </p>
                        <p>
                            Cookies set by the website owner (in this case, VectoBase) are called "first-party cookies". Cookies set by
                            parties other than the website owner are called "third-party cookies". Third-party cookies enable
                            third-party features or functionality to be provided on or through the website (e.g., advertising,
                            interactive content, and analytics).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Types of Cookies We Use</h2>
                        <p className="mb-4">These cookies are necessary for the website to function and cannot be switched off in our systems.
                            They are usually only set in response to actions made by you which amount to a request for services,
                            such as setting your privacy preferences, logging in, or filling in forms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Performance Cookies</h2>
                        <p className="mb-4">
                            These cookies allow us to count visits and traffic sources so we can measure and improve the
                            performance of our site. They help us to know which pages are the most and least popular and see how
                            visitors move around the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Functional Cookies</h2>
                        <p className="mb-4">
                            These cookies enable the website to provide enhanced functionality and personalization. They may be
                            set by us or by third-party providers whose services we have added to our pages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Targeting Cookies</h2>
                        <p className="mb-4">
                            These cookies may be set through our site by our advertising partners. They may be used by those
                            companies to build a profile of your interests and show you relevant advertisements on other sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. How Can You Control Cookies?</h2>
                        <p className="mb-4">
                            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject
                            cookies, you may still use our website though your access to some functionality and areas of our website
                            may be restricted.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Browser-Specific Instructions:</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                            </li>
                            <li>
                                <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                            </li>
                            <li>
                                <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
                            </li>
                            <li>
                                <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at privacy@vectobase.com.
                        </p>
                    </section>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/terms" className="mr-4">
                        View our Terms of Service
                    </Link>
                    <Link href="/privacy">
                        View our Privacy Policy
                    </Link>
                </div>
            </main>

            <SimpleFooter />
        </div>
    )
}