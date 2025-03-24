import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import SimpleFooter from "@/components/simplefooter"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl text-sm text-muted-foreground">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Terms of Service</h1>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
            <p className="mb-4">
              Welcome to VectoBase. These Terms of Service govern your use of our website, products, and services. By
              accessing or using VectoBase, you agree to be bound by these Terms. If you disagree with any part of the
              terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current
              at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
              termination of your account.
            </p>
            <p className="mb-4">
              You are responsible for safeguarding the password that you use to access the service and for any
              activities or actions under your password. You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of security or unauthorized use of your
              account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Intellectual Property</h2>
            <p className="mb-4">
              The service and its original content, features, and functionality are and will remain the exclusive
              property of VectoBase and its licensors. The service is protected by copyright, trademark, and other laws
              of both the United States and foreign countries. Our trademarks and trade dress may not be used in
              connection with any product or service without the prior written consent of VectoBase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. User Content</h2>
            <p className="mb-4">
              Our service allows you to post, link, store, share and otherwise make available certain information, text,
              graphics, videos, or other material. You are responsible for the content that you post to the service,
              including its legality, reliability, and appropriateness.
            </p>
            <p className="mb-4">
              By posting content to the service, you grant us the right to use, modify, publicly perform, publicly
              display, reproduce, and distribute such content on and through the service. You retain any and all of your
              rights to any content you submit, post or display on or through the service and you are responsible for
              protecting those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall VectoBase, nor its directors, employees, partners, agents, suppliers, or affiliates, be
              liable for any indirect, incidental, special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the
              service will immediately cease. If you wish to terminate your account, you may simply discontinue using
              the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of the United States, without
              regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms
              will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material we will try to provide at least 30 days notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at privacy@vectobase.com.
            </p>
          </section>
        </div>
        <div className="mt-12 text-center">
          <Link href="/privacy" className="mr-4">
            View our Privacy Policy
          </Link>
          <Link href="/terms">
            View our Cookie Policy
          </Link>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

