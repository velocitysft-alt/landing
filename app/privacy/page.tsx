import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Velocity Software",
}

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-16 sm:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>
      <p className="mb-8 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
          <p className="mb-4 text-muted-foreground">
            Velocity Software ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">2. Information We Collect</h2>
          <h3 className="mb-3 text-xl font-semibold">2.1 Personal Information</h3>
          <p className="mb-4 text-muted-foreground">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Register for an account</li>
            <li>Contact us through our contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Request information about our services</li>
          </ul>
          <p className="mb-4 text-muted-foreground">
            This information may include your name, email address, phone number, company name, and any other information you choose to provide.
          </p>

          <h3 className="mb-3 text-xl font-semibold">2.2 Automatically Collected Information</h3>
          <p className="mb-4 text-muted-foreground">
            We may automatically collect certain information about your device and how you interact with our website, including:
          </p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">3. How We Use Your Information</h2>
          <p className="mb-4 text-muted-foreground">We use the information we collect to:</p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze usage patterns and trends</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">4. Information Sharing and Disclosure</h2>
          <p className="mb-4 text-muted-foreground">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>With service providers who assist us in operating our website and conducting our business</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer or merger</li>
            <li>With your explicit consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">5. Data Security</h2>
          <p className="mb-4 text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">6. Your Rights</h2>
          <p className="mb-4 text-muted-foreground">Depending on your location, you may have the following rights:</p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal information</li>
            <li>Objection to processing of your information</li>
            <li>Data portability</li>
            <li>Withdrawal of consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">7. Cookies</h2>
          <p className="mb-4 text-muted-foreground">
            We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. For more information, please see our Cookie Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">8. Changes to This Privacy Policy</h2>
          <p className="mb-4 text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">9. Contact Us</h2>
          <p className="mb-4 text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us through our contact form or at the email address provided on our website.
          </p>
        </section>
      </div>
    </div>
  )
}

