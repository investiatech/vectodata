import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import SimpleFooter from "@/components/simplefooter"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl text-sm text-muted-foreground">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Privacy Policy</h1>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
            <p className="mb-4">
              At VectoBase, we respect your privacy and are committed to protecting your personal data. This privacy
              policy will inform you about how we look after your personal data when you visit our website and tell you
              about your privacy rights and how the law protects you.
            </p>
            <p className="mb-4">
              This privacy policy applies to all information collected through our website, as well as any related
              services, sales, marketing, or events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Information We Collect</h2>
            <p className="mb-4">
              We collect several different types of information for various purposes to provide and improve our service
              to you:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Personal Data:</strong> While using our service, we may ask you to provide us with certain
                personally identifiable information that can be used to contact or identify you. This may include, but
                is not limited to, your email address, name, phone number, and address.
              </li>
              <li>
                <strong>Usage Data:</strong> We may also collect information on how the service is accessed and used.
                This may include information such as your computer's Internet Protocol address, browser type, browser
                version, the pages of our service that you visit, the time and date of your visit, the time spent on
                those pages, unique device identifiers, and other diagnostic data.
              </li>
              <li>
                <strong>Tracking & Cookies Data:</strong> We use cookies and similar tracking technologies to track the
                activity on our service and hold certain information. Cookies are files with a small amount of data
                which may include an anonymous unique identifier.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. How We Use Your Information</h2>
            <p className="mb-4">VectoBase uses the collected data for various purposes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>
                To provide you with news, special offers and general information about other goods, services and events
                which we offer
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Data Security</h2>
            <p className="mb-4">
              The security of your data is important to us, but remember that no method of transmission over the
              Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Third-Party Services</h2>
            <p className="mb-4">
              We may employ third-party companies and individuals to facilitate our service, to provide the service on
              our behalf, to perform service-related services or to assist us in analyzing how our service is used.
              These third parties have access to your personal data only to perform these tasks on our behalf and are
              obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Analytics</h2>
            <p className="mb-4">
              We may use third-party service providers to monitor and analyze the use of our service.
            </p>
            <p className="mb-4">
              <strong>Google Analytics:</strong> Google Analytics is a web analytics service offered by Google that
              tracks and reports website traffic. Google uses the data collected to track and monitor the use of our
              service. This data is shared with other Google services. Google may use the collected data to
              contextualize and personalize the ads of its own advertising network.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Your Data Protection Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The right to access, update or delete the information we have on you</li>
              <li>
                The right of rectification - the right to have your information corrected if it is inaccurate or
                incomplete
              </li>
              <li>The right to object - the right to object to our processing of your personal data</li>
              <li>
                The right of restriction - the right to request that we restrict the processing of your personal
                information
              </li>
              <li>
                The right to data portability - the right to be provided with a copy of the information we have on you
                in a structured, machine-readable and commonly used format
              </li>
              <li>
                The right to withdraw consent - the right to withdraw your consent at any time where we relied on your
                consent to process your personal information
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page. We will let you know via email and/or a prominent notice on our service,
              prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
            </p>
            <p className="mb-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>
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
          <Link href="/cookie">
            View our Cookie Policy
          </Link>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

