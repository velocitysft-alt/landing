import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://velocity.example.com"),
  title: {
    default: "Velocity - Custom Software Development & Software Factory",
    template: "%s | Velocity",
  },
  description:
    "Transform your ideas into powerful digital solutions. Custom software development, web applications, and digital transformation services. Trusted by startups and enterprises worldwide.",
  keywords: [
    "software factory",
    "custom software development",
    "web development",
    "mobile app development",
    "software outsourcing",
    "agile development",
    "full stack development",
    "cloud solutions",
    "digital transformation",
    "software consulting",
  ],
  authors: [{ name: "Velocity Software Team" }],
  creator: "Velocity Software",
  publisher: "Velocity Software",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Velocity Software",
    title: "Velocity - Custom Software Development & Software Factory",
    description:
      "Transform your ideas into powerful digital solutions. Custom software development, web applications, and digital transformation services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Velocity Software Factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocity - Custom Software Development & Software Factory",
    description:
      "Transform your ideas into powerful digital solutions. Custom software development, web applications, and digital transformation services.",
    images: ["/og-image.jpg"],
    creator: "@velocitysoftware",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/icon-dark.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "es-ES": "/es",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

