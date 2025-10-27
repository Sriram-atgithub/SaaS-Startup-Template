import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft, CheckCircle, Clock, Users, Shield } from "lucide-react"

export const metadata = {
  title: "Features | StreamLine",
  description: "Explore all the powerful features that StreamLine has to offer for your team.",
}

export default function FeaturesPage() {
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
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Powerful Features for Every Team</h1>
              <p className="text-xl text-muted-foreground mb-8">
                StreamLine is packed with everything you need to manage projects, collaborate with your team, and
                deliver results faster.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-lg border bg-background p-8">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-800/30 p-3">
                  <Clock className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Time Tracking</h3>
                <p className="text-muted-foreground mb-4">
                  Automatically track time spent on tasks and projects with precision. Get detailed insights into how
                  your team spends their time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Real-time tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Billable hours management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Timer management</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="rounded-lg border bg-background p-8">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-800/30 p-3">
                  <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground mb-4">
                  Foster seamless collaboration with real-time updates, comments, and shared workspaces. Keep everyone
                  on the same page.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Real-time collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Comment threads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Shared workspaces</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="rounded-lg border bg-background p-8">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-800/30 p-3">
                  <BarChart2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Gain valuable insights with comprehensive analytics and customizable reports. Make data-driven
                  decisions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Custom dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Performance reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Export capabilities</span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="rounded-lg border bg-background p-8">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-800/30 p-3">
                  <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground mb-4">
                  Rest easy knowing your data is protected with enterprise-grade security features and compliance
                  standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">End-to-end encryption</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">SSO & SAML</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Compliance certified</span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="rounded-lg border bg-background p-8">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-800/30 p-3">
                  <Clock className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Automated Workflows</h3>
                <p className="text-muted-foreground mb-4">
                  Automate repetitive tasks and workflows to save time and reduce manual errors across your
                  organization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Task automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Workflow triggers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="rounded-lg border bg-background p-8">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-800/30 p-3">
                  <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Mobile App</h3>
                <p className="text-muted-foreground mb-4">
                  Access StreamLine on the go with our native mobile apps for iOS and Android. Stay productive anywhere.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">iOS app</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Android app</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Offline mode</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to get started?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Try StreamLine free for 14 days. No credit card required.
              </p>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8">Start Free Trial</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
