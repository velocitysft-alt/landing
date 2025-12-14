import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Velocity Software",
}

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-16 sm:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <h1 className="mb-6 text-4xl font-bold">About Us</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Who We Are</h2>
          <p className="mb-4 text-muted-foreground">
            Velocity Software is a custom software development company dedicated to transforming ideas into powerful digital solutions. We specialize in building scalable, high-performance applications that drive business growth.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
          <p className="mb-4 text-muted-foreground">
            Our mission is to deliver exceptional software solutions that help businesses achieve their goals. We combine technical expertise with a deep understanding of business needs to create products that make a real impact.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">What We Do</h2>
          <p className="mb-4 text-muted-foreground">We offer a comprehensive range of software development services:</p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Custom web application development</li>
            <li>Mobile app development (iOS and Android)</li>
            <li>Cloud solutions and infrastructure</li>
            <li>API development and integration</li>
            <li>Software maintenance and support</li>
            <li>Digital transformation consulting</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Our Approach</h2>
          <p className="mb-4 text-muted-foreground">
            We follow agile methodologies to ensure rapid delivery and continuous improvement. Our team works closely with clients to understand their vision and bring it to life with cutting-edge technology.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Why Choose Us</h2>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Experienced team of developers and designers</li>
            <li>Modern technology stack</li>
            <li>Transparent communication and project management</li>
            <li>Commitment to quality and best practices</li>
            <li>Flexible engagement models</li>
            <li>Dedicated support and maintenance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
          <p className="mb-4 text-muted-foreground">
            Ready to start your project? <Link href="/#contact" className="text-accent hover:underline">Contact us</Link> today to discuss how we can help bring your ideas to life.
          </p>
        </section>
      </div>
    </div>
  )
}

