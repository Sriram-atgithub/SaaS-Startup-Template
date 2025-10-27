import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Pricing | StreamLine",
  description: "Simple, transparent pricing plans for every team size.",
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <BarChart2 className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">StreamLine</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button className="bg-emerald-500 hover:bg-emerald-600">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl text-center mx-auto mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Simple, Transparent Pricing</h1>
              <p className="text-xl text-muted-foreground">
                Choose the perfect plan for your team. All plans include a 14-day free trial with full access.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid gap-8 md:grid-cols-3 lg:gap-12 mb-12">
              {/* Starter */}
              <div className="rounded-lg border bg-background p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-muted-foreground mb-6">Perfect for small teams</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$12</span>
                  <span className="text-muted-foreground">/user/month</span>
                </div>
                <Button className="w-full mb-8 bg-emerald-500 hover:bg-emerald-600">Get Started</Button>
                <ul className="space-y-4 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Basic time tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Simple reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>2GB storage</span>
                  </li>
                </ul>
              </div>

              {/* Pro - Most Popular */}
              <div className="rounded-lg border bg-background p-8 flex flex-col relative ring-2 ring-emerald-500">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-muted-foreground mb-6">For growing teams</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/user/month</span>
                </div>
                <Button className="w-full mb-8 bg-emerald-500 hover:bg-emerald-600">Get Started</Button>
                <ul className="space-y-4 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Advanced time tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Custom reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>100GB storage</span>
                  </li>
                </ul>
              </div>

              {/* Enterprise */}
              <div className="rounded-lg border bg-background p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-6">For large organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground">/user/month</span>
                </div>
                <Button className="w-full mb-8 bg-emerald-500 hover:bg-emerald-600">Contact Sales</Button>
                <ul className="space-y-4 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Enterprise SSO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Advanced security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Unlimited storage</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Can I change my plan anytime?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is there a long-term contract?</h3>
                  <p className="text-muted-foreground">
                    No, we offer month-to-month billing with no long-term contracts required.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, wire transfers, and can arrange custom billing for enterprise
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
