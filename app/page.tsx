"use client"

import { CardFooter } from "@/components/ui/card"
import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Shield, Gauge, Users, Globe, Check, Moon, Sun, Star } from "lucide-react"
import Link from "next/link"
import { getTranslations, type Locale } from "@/lib/i18n"
import { ContactForm } from "@/components/contact-form"

export default function Page() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [locale, setLocale] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  const t = useMemo(() => getTranslations(locale), [locale])

  useEffect(() => {
    setMounted(true)
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
    
    // Asegurar que el tema inicial sea light si no hay clase dark
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 z-[100] h-1 w-full bg-muted/30" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-accent via-accent/80 to-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {/* Navigation */}
      <header className="fixed top-2 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-4 sm:top-4 ">
        <nav 
          className="justify-around flex items-center gap-1 rounded-full border border-border/40 bg-background/80 px-2 py-2 backdrop-blur-xl shadow-lg"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link href="/" className="flex items-center gap-2 px-2 sm:px-4" aria-label="Velocity Home">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg overflow-hidden sm:h-7 sm:w-7">
              <img 
                src="/apple-icon.svg" 
                alt="Velocity" 
                className="h-full w-full object-contain"
                aria-hidden="true"
              />
            </div>
            <span className="text-base font-bold sm:text-lg">Velocity </span>
          </Link>
          <div className="mx-1 h-4 w-px bg-border/50 sm:mx-2 sm:h-6" aria-hidden="true" />
          <div className="hidden items-center gap-1 sm:flex">
            <Link
              href="#features"
              className="rounded-full px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-4 sm:text-sm"
            >
              {t.common.features}
            </Link>
            <Link
              href="#pricing"
              className="rounded-full px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-4 sm:text-sm"
            >
              {t.common.pricing}
            </Link>
            <Link
              href="#contact"
              className="rounded-full px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-4 sm:text-sm"
            >
              Contact
            </Link>
            <Link
              href="#docs"
              className="rounded-full px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-4 sm:text-sm"
            >
              {t.common.docs}
            </Link>
          </div>
          <div className="mx-1 h-4 w-px bg-border/50 sm:mx-2 sm:h-6" aria-hidden="true" />
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-full p-2" 
            onClick={toggleTheme} 
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button 
            size="sm" 
            className="rounded-full bg-accent px-3 text-xs text-accent-foreground hover:bg-accent/90 sm:px-4 sm:text-sm"
            asChild
          >
            <Link href="#contact">{t.common.getStarted}</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="container relative flex flex-col items-center gap-6 py-16 pt-10 text-center sm:gap-8 sm:py-24 sm:pt-32 md:gap-10 md:py-36 md:pt-44 lg:py-44 lg:pt-20"
          aria-labelledby="hero-title"
        >
          <Badge variant="secondary" className="mb-2 border border-border/50 bg-muted/50 text-foreground">
            <Sparkles className="mr-1 h-3 w-3" aria-hidden="true" />
            {t.hero.badge}
          </Badge>
          <h1 id="hero-title" className="max-w-5xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {t.hero.title} <span className="text-accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            {t.hero.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button onClick={() => window.location.href = "/#contact"} size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              {t.hero.ctaPrimary}
            </Button>
            <Button  onClick={() => window.location.href = "/#features"} size="lg" variant="outline" className="w-full sm:w-auto">
              {t.hero.ctaSecondary}
            </Button>
          </div>
          <div className="mt-8 text-xs text-muted-foreground sm:mt-12 sm:text-sm">
            {t.hero.trustedBy}
          </div>
          <div className="mt-8 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-1000 sm:mt-12">
            <div className="relative aspect-video overflow-hidden rounded-xl border-2 border-border/50 bg-gradient-to-br from-accent/10 via-background to-background shadow-2xl sm:rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
                alt="Velocity Platform Dashboard showing analytics and metrics"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="border-y bg-muted/30 py-12 sm:py-16 md:py-24" aria-labelledby="social-proof-title">
          <div className="container">
            <h2 id="social-proof-title" className="sr-only">Social Proof and Statistics</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
              <div className="flex flex-col gap-2 border-b border-border/50 pb-6 sm:border-b-0 sm:border-r sm:pr-8 sm:pb-0 md:last:border-r-0">
                <div className="text-2xl font-bold sm:text-3xl">{t.socialProof.netflix.stat}</div>
                <div className="text-xs text-muted-foreground sm:text-sm">{t.socialProof.netflix.description}</div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs">{t.socialProof.netflix.company}</div>
              </div>
              <div className="flex flex-col gap-2 border-b border-border/50 pb-6 sm:border-b-0 sm:border-r sm:pr-8 sm:pb-0 md:last:border-r-0">
                <div className="text-2xl font-bold sm:text-3xl">{t.socialProof.tripadvisor.stat}</div>
                <div className="text-xs text-muted-foreground sm:text-sm">{t.socialProof.tripadvisor.description}</div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs">{t.socialProof.tripadvisor.company}</div>
              </div>
              <div className="flex flex-col gap-2 border-b border-border/50 pb-6 sm:border-b-0 sm:border-r sm:pr-8 sm:pb-0 md:last:border-r-0">
                <div className="text-2xl font-bold sm:text-3xl">{t.socialProof.box.stat}</div>
                <div className="text-xs text-muted-foreground sm:text-sm">{t.socialProof.box.description}</div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs">{t.socialProof.box.company}</div>
              </div>
              <div className="flex flex-col gap-2 sm:border-r-0 sm:pr-0">
                <div className="text-2xl font-bold sm:text-3xl">{t.socialProof.ebay.stat}</div>
                <div className="text-xs text-muted-foreground sm:text-sm">{t.socialProof.ebay.description}</div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs">{t.socialProof.ebay.company}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlight Section */}
        <section className="py-16 sm:py-24 md:py-32" aria-labelledby="collaboration-title">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col justify-center">
                <Badge variant="outline" className="mb-4 w-fit border-accent/50 text-accent">
                  <Zap className="mr-1 h-3 w-3" aria-hidden="true" />
                  {t.features.collaboration.badge}
                </Badge>
                <h2 id="collaboration-title" className="mb-4 text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  {t.features.collaboration.title}
                </h2>
                <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
                  {t.features.collaboration.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3 w-3 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-medium">{t.features.collaboration.items.collaboration.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.features.collaboration.items.collaboration.description}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3 w-3 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-medium">{t.features.collaboration.items.deployments.title}</div>
                      <div className="text-sm text-muted-foreground">{t.features.collaboration.items.deployments.description}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3 w-3 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-medium">{t.features.collaboration.items.analytics.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.features.collaboration.items.analytics.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full animate-in fade-in slide-in-from-right-8 duration-1000">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/20 to-transparent blur-3xl" aria-hidden="true" />
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                    alt="Team collaboration workspace interface"
                    className="w-full rounded-xl border-2 border-border/50 shadow-2xl sm:rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section id="features" className="border-t bg-muted/30 py-16 sm:py-24 md:py-32" aria-labelledby="features-title">
          <div className="container">
            <div className="mb-12 text-center sm:mb-16 md:mb-20">
              <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
                {t.common.features}
              </Badge>
              <h2 id="features-title" className="mb-4 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">
                {t.features.grid.title}
              </h2>
              <p className="text-pretty text-base text-muted-foreground sm:text-lg">
                {t.features.grid.description}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              <Card className="border-2 transition-all hover:border-accent/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{t.features.grid.items.ai.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm sm:text-base">
                    {t.features.grid.items.ai.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 transition-all hover:border-accent/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Zap className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{t.features.grid.items.fast.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm sm:text-base">
                    {t.features.grid.items.fast.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 transition-all hover:border-accent/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Shield className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{t.features.grid.items.security.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm sm:text-base">
                    {t.features.grid.items.security.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 transition-all hover:border-accent/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Globe className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{t.features.grid.items.global.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm sm:text-base">
                    {t.features.grid.items.global.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 transition-all hover:border-accent/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Gauge className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{t.features.grid.items.analytics.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm sm:text-base">
                    {t.features.grid.items.analytics.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 transition-all hover:border-accent/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{t.features.grid.items.team.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm sm:text-base">
                    {t.features.grid.items.team.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Feature Sections */}
        <section className="border-t py-16 sm:py-24 md:py-32">
          <div className="container">
            <div className="grid gap-16 lg:gap-32">
              {/* Analytics Feature */}
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                <div className="order-2 lg:order-1">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-border/50 shadow-2xl sm:rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                      alt="Real-time analytics dashboard with graphs and charts"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="order-1 flex flex-col justify-center lg:order-2">
                  <Badge variant="outline" className="mb-4 w-fit border-accent/50 text-accent">
                    <Gauge className="mr-1 h-3 w-3" aria-hidden="true" />
                    {t.features.analytics.badge}
                  </Badge>
                  <h3 className="mb-4 text-balance text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                    {t.features.analytics.title}
                  </h3>
                  <p className="mb-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {t.features.analytics.description}
                  </p>
                  <Button className="w-fit gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                    {t.features.analytics.cta}
                  </Button>
                </div>
              </div>

              {/* Security Feature */}
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                <div className="flex flex-col justify-center">
                  <Badge variant="outline" className="mb-4 w-fit border-accent/50 text-accent">
                    <Shield className="mr-1 h-3 w-3" aria-hidden="true" />
                    {t.features.security.badge}
                  </Badge>
                  <h3 className="mb-4 text-balance text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                    {t.features.security.title}
                  </h3>
                  <p className="mb-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {t.features.security.description}
                  </p>
                  <Button className="w-fit gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                    {t.features.security.cta}
                  </Button>
                </div>
                <div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-border/50 shadow-2xl sm:rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80"
                      alt="Enterprise security with encryption and protection"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Global Scale Feature */}
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                <div className="order-2 lg:order-1">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-border/50 shadow-2xl sm:rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80" 
                      alt="Global network map showing worldwide connections" 
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="order-1 flex flex-col justify-center lg:order-2">
                  <Badge variant="outline" className="mb-4 w-fit border-accent/50 text-accent">
                    <Globe className="mr-1 h-3 w-3" aria-hidden="true" />
                    {t.features.scale.badge}
                  </Badge>
                  <h3 className="mb-4 text-balance text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                    {t.features.scale.title}
                  </h3>
                  <p className="mb-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {t.features.scale.description}
                  </p>
                  <Button className="w-fit gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                    {t.features.scale.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="border-t py-16 sm:py-24 md:py-30" aria-labelledby="pricing-title">
          <div className="container">
            <div className="mb-12 text-center sm:mb-16 md:mb-20">
              <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
                {t.common.pricing}
              </Badge>
              <h2 id="pricing-title" className="mb-4 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">
                {t.pricing.title}
              </h2>
              <p className="text-pretty text-base text-muted-foreground sm:text-lg">
                {t.pricing.description}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              <Card className="flex flex-col border-2">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">{t.pricing.plans.starter.title}</CardTitle>
                  <CardDescription>{t.pricing.plans.starter.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold sm:text-5xl">{t.pricing.plans.starter.price}</span>
                    <span className="text-muted-foreground">{t.pricing.plans.starter.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.starter.features.projects}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.starter.features.bandwidth}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.starter.features.support}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.starter.features.analytics}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="#contact">{t.pricing.plans.starter.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col border-2 border-accent shadow-2xl ring-2 ring-accent/20">
                <CardHeader>
                  <Badge className="mb-2 w-fit bg-accent text-accent-foreground">{t.pricing.plans.pro.badge}</Badge>
                  <CardTitle className="text-xl sm:text-2xl">{t.pricing.plans.pro.title}</CardTitle>
                  <CardDescription>{t.pricing.plans.pro.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold sm:text-5xl">{t.pricing.plans.pro.price}</span>
                    <span className="text-muted-foreground">{t.pricing.plans.pro.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.pro.features.projects}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.pro.features.bandwidth}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.pro.features.support}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.pro.features.analytics}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.pro.features.ai}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.pro.features.collaboration}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <Link href="#contact">{t.pricing.plans.pro.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col border-2">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">{t.pricing.plans.enterprise.title}</CardTitle>
                  <CardDescription>{t.pricing.plans.enterprise.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold sm:text-5xl">{t.pricing.plans.enterprise.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.enterprise.features.everything}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.enterprise.features.bandwidth}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.enterprise.features.support}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.enterprise.features.integrations}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.enterprise.features.sla}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm">{t.pricing.plans.enterprise.features.security}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="#contact">{t.pricing.plans.enterprise.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t bg-muted/30 py-12 sm:py-16 md:py-20" aria-labelledby="contact-title">
          <div className="container">
            <div className="text-center sm:mb-8 md:mb-12">
              <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
                Contact Us
              </Badge>
              <h2 id="contact-title" className="mb-4 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">
                Let's Talk
              </h2>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                Have questions? We're here to help. Get in touch and we'll respond as soon as possible.
              </p>
            </div>
            <div className="mx-auto max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="border-t bg-accent py-16 text-accent-foreground sm:py-24 md:py-32" aria-labelledby="cta-title">
          <div className="container text-center">
            <h2 id="cta-title" className="mb-4 text-balance text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mb-8 text-pretty text-base opacity-90 sm:mb-10 sm:text-lg md:text-xl">
              {t.cta.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                {t.cta.primary}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-accent-foreground/20 hover:bg-accent-foreground/10 bg-transparent w-full sm:w-auto"
              >
                {t.cta.secondary}
              </Button>
            </div>
            <p className="mt-6 text-xs opacity-75 sm:mt-8 sm:text-sm">{t.cta.disclaimer}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 sm:py-16" role="contentinfo">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
                  <img 
                    src="/icon.svg" 
                    alt="Velocity" 
                    className="h-full w-full object-contain"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-lg font-bold sm:text-xl">Velocity </span>
              </div>
              <p className="mb-4 max-w-sm text-xs leading-relaxed text-muted-foreground sm:mb-6 sm:text-sm">
                {t.footer.description}
              </p>
              <div className="flex items-center gap-2">
                <Shield className="h-3 w-3 text-muted-foreground sm:h-4 sm:w-4" aria-hidden="true" />
                <span className="text-[10px] text-muted-foreground sm:text-xs">{t.footer.certifications}</span>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold sm:mb-4">{t.footer.links.product.title}</h3>
              <ul className="space-y-2 text-xs text-muted-foreground sm:space-y-3 sm:text-sm">
                <li>
                  <Link href="#features" className="transition-colors hover:text-foreground">
                    {t.footer.links.product.features}
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="transition-colors hover:text-foreground">
                    {t.footer.links.product.pricing}
                  </Link>
                </li>
                <li>
                  <Link href="#docs" className="transition-colors hover:text-foreground">
                    {t.footer.links.product.documentation}
                  </Link>
                </li>
                <li>
                  <Link href="#api" className="transition-colors hover:text-foreground">
                    {t.footer.links.product.api}
                  </Link>
                </li>
                <li>
                  <Link href="#changelog" className="transition-colors hover:text-foreground">
                    {t.footer.links.product.changelog}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold sm:mb-4">{t.footer.links.company.title}</h3>
              <ul className="space-y-2 text-xs text-muted-foreground sm:space-y-3 sm:text-sm">
                <li>
                  <Link href="/about" className="transition-colors hover:text-foreground">
                    {t.footer.links.company.about}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="transition-colors hover:text-foreground">
                    {t.footer.links.company.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold sm:mb-4">{t.footer.links.legal.title}</h3>
              <ul className="space-y-2 text-xs text-muted-foreground sm:space-y-3 sm:text-sm">
                <li>
                  <Link href="/privacy" className="transition-colors hover:text-foreground">
                    {t.footer.links.legal.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="transition-colors hover:text-foreground">
                    {t.footer.links.legal.terms}
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="transition-colors hover:text-foreground">
                    {t.footer.links.legal.cookies}
                  </Link>
                </li>
                <li>
                  <Link href="/acceptable-use" className="transition-colors hover:text-foreground">
                    {t.footer.links.legal.acceptable}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground sm:mt-12 sm:pt-8 sm:text-sm">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

