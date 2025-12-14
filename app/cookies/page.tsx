import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Velocity Software",
}

export default function CookiesPage() {
  return (
    <div className="container max-w-4xl py-16 sm:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <h1 className="mb-6 text-4xl font-bold">Cookie Policy</h1>
      <p className="mb-8 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">1. What Are Cookies</h2>
          <p className="mb-4 text-muted-foreground">
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">2. How We Use Cookies</h2>
          <p className="mb-4 text-muted-foreground">We use cookies for the following purposes:</p>
          
          <h3 className="mb-3 text-xl font-semibold">2.1 Essential Cookies</h3>
          <p className="mb-4 text-muted-foreground">
            These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
          </p>

          <h3 className="mb-3 text-xl font-semibold">2.2 Analytics Cookies</h3>
          <p className="mb-4 text-muted-foreground">
            We use analytics cookies to understand how visitors interact with our website. This helps us improve our website and services.
          </p>

          <h3 className="mb-3 text-xl font-semibold">2.3 Preference Cookies</h3>
          <p className="mb-4 text-muted-foreground">
            These cookies allow our website to remember information that changes the way the website behaves or looks, such as your preferred language or region.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">3. Types of Cookies We Use</h2>
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">Session Cookies</h3>
            <p className="mb-4 text-muted-foreground">
              These are temporary cookies that are deleted when you close your browser. They help us maintain your session while you navigate our website.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">Persistent Cookies</h3>
            <p className="mb-4 text-muted-foreground">
              These cookies remain on your device for a set period or until you delete them. They help us remember your preferences and improve your experience.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">4. Third-Party Cookies</h2>
          <p className="mb-4 text-muted-foreground">
            We may also use third-party cookies from trusted partners for analytics and marketing purposes. These cookies are subject to the respective third parties' privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">5. Managing Cookies</h2>
          <p className="mb-4 text-muted-foreground">
            You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
          </p>
          <h3 className="mb-3 text-xl font-semibold">Browser Settings</h3>
          <p className="mb-4 text-muted-foreground">
            Most browsers allow you to refuse or accept cookies. You can also set your browser to notify you when cookies are being sent. Here are links to cookie settings for popular browsers:
          </p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Apple Safari</li>
            <li>Microsoft Edge</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">6. Cookie Consent</h2>
          <p className="mb-4 text-muted-foreground">
            By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, you should set your browser settings accordingly or not use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">7. Updates to This Policy</h2>
          <p className="mb-4 text-muted-foreground">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">8. Contact Us</h2>
          <p className="mb-4 text-muted-foreground">
            If you have any questions about our use of cookies, please contact us through our contact form or at the email address provided on our website.
          </p>
        </section>
      </div>
    </div>
  )
}

