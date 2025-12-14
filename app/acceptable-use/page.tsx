import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Acceptable Use Policy for Velocity Software",
}

export default function AcceptableUsePage() {
  return (
    <div className="container max-w-4xl py-16 sm:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <h1 className="mb-6 text-4xl font-bold">Acceptable Use Policy</h1>
      <p className="mb-8 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
          <p className="mb-4 text-muted-foreground">
            This Acceptable Use Policy ("Policy") sets forth the terms and conditions for using the services provided by Velocity Software. By using our services, you agree to comply with this Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">2. Prohibited Activities</h2>
          <p className="mb-4 text-muted-foreground">You may not use our services to:</p>
          
          <h3 className="mb-3 text-xl font-semibold">2.1 Illegal Activities</h3>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon intellectual property rights</li>
            <li>Engage in fraudulent or deceptive practices</li>
            <li>Distribute malware, viruses, or harmful code</li>
          </ul>

          <h3 className="mb-3 text-xl font-semibold">2.2 Harmful Content</h3>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Transmit or store content that is defamatory, harassing, or threatening</li>
            <li>Distribute obscene, pornographic, or offensive material</li>
            <li>Promote violence or hate speech</li>
            <li>Violate privacy rights of others</li>
          </ul>

          <h3 className="mb-3 text-xl font-semibold">2.3 System Abuse</h3>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Attempt to gain unauthorized access to systems or networks</li>
            <li>Interfere with or disrupt our services or servers</li>
            <li>Use automated systems to access our services without permission</li>
            <li>Overload our infrastructure with excessive requests</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">3. Content Standards</h2>
          <p className="mb-4 text-muted-foreground">
            All content submitted through our services must:
          </p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Be accurate and truthful</li>
            <li>Comply with all applicable laws</li>
            <li>Not infringe on third-party rights</li>
            <li>Be appropriate for a professional business environment</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">4. Security</h2>
          <p className="mb-4 text-muted-foreground">
            You are responsible for maintaining the security of your account and any content you submit. You must:
          </p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Keep your account credentials confidential</li>
            <li>Notify us immediately of any unauthorized access</li>
            <li>Use strong passwords and security practices</li>
            <li>Not share your account with others</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">5. Enforcement</h2>
          <p className="mb-4 text-muted-foreground">
            We reserve the right to:
          </p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Monitor usage of our services</li>
            <li>Investigate violations of this Policy</li>
            <li>Remove or disable access to content that violates this Policy</li>
            <li>Suspend or terminate accounts that violate this Policy</li>
            <li>Take legal action when necessary</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">6. Reporting Violations</h2>
          <p className="mb-4 text-muted-foreground">
            If you become aware of any violation of this Policy, please report it to us immediately through our contact form. We will investigate all reports and take appropriate action.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">7. Changes to This Policy</h2>
          <p className="mb-4 text-muted-foreground">
            We may update this Acceptable Use Policy from time to time. We will notify users of any material changes by posting the updated policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">8. Contact Information</h2>
          <p className="mb-4 text-muted-foreground">
            If you have any questions about this Acceptable Use Policy, please contact us through our contact form or at the email address provided on our website.
          </p>
        </section>
      </div>
    </div>
  )
}

