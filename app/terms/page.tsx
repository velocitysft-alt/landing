import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Velocity Software",
}

export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-16 sm:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <h1 className="mb-6 text-4xl font-bold">Terms of Service</h1>
      <p className="mb-8 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">1. Agreement to Terms</h2>
          <p className="mb-4 text-muted-foreground">
            By accessing or using the services provided by Velocity Software ("we", "us", or "our"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">2. Services</h2>
          <p className="mb-4 text-muted-foreground">
            Velocity Software provides custom software development, web development, mobile app development, and related technology services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">3. User Responsibilities</h2>
          <p className="mb-4 text-muted-foreground">You agree to:</p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Provide accurate and complete information when using our services</li>
            <li>Maintain the security of your account credentials</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not interfere with or disrupt our services</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">4. Intellectual Property</h2>
          <p className="mb-4 text-muted-foreground">
            All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of Velocity Software or its licensors and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p className="mb-4 text-muted-foreground">
            Custom software developed for clients will be subject to the terms specified in individual service agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">5. Payment Terms</h2>
          <p className="mb-4 text-muted-foreground">
            Payment terms will be specified in individual service agreements. Unless otherwise agreed:
          </p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Invoices are due within the timeframe specified in the agreement</li>
            <li>Late payments may incur interest charges</li>
            <li>We reserve the right to suspend services for non-payment</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">6. Limitation of Liability</h2>
          <p className="mb-4 text-muted-foreground">
            To the maximum extent permitted by law, Velocity Software shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">7. Warranty Disclaimer</h2>
          <p className="mb-4 text-muted-foreground">
            Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">8. Indemnification</h2>
          <p className="mb-4 text-muted-foreground">
            You agree to indemnify and hold harmless Velocity Software, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of our services or violation of these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">9. Termination</h2>
          <p className="mb-4 text-muted-foreground">
            We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">10. Governing Law</h2>
          <p className="mb-4 text-muted-foreground">
            These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">11. Changes to Terms</h2>
          <p className="mb-4 text-muted-foreground">
            We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">12. Contact Information</h2>
          <p className="mb-4 text-muted-foreground">
            If you have any questions about these Terms of Service, please contact us through our contact form or at the email address provided on our website.
          </p>
        </section>
      </div>
    </div>
  )
}

