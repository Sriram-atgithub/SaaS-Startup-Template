import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  ArrowRight,
  BarChart2,
  Clock,
  Users,
  Shield,
  Twitter,
  Linkedin,
  Github,
  Facebook,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">StreamLine</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Sign In
            </Link>
            <Button className="bg-emerald-500 hover:bg-emerald-600">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Workflow, Amplify Your Productivity
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The all-in-one platform that helps teams collaborate, manage projects, and deliver results faster
                    than ever before.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-emerald-500 hover:bg-emerald-600">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Watch Demo</Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Dashboard Preview"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-800/30 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-300">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to boost productivity
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our platform offers powerful tools designed to streamline your workflow and help your team achieve
                  more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-emerald-100 dark:bg-emerald-800/30 p-1 rounded-full">
                    <Clock className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Time Tracking</h3>
                    <p className="text-muted-foreground">
                      Effortlessly track time spent on tasks and projects with our intuitive time tracking system.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-emerald-100 dark:bg-emerald-800/30 p-1 rounded-full">
                    <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Team Collaboration</h3>
                    <p className="text-muted-foreground">
                      Foster seamless collaboration with real-time updates, comments, and shared workspaces.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-emerald-100 dark:bg-emerald-800/30 p-1 rounded-full">
                    <BarChart2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Advanced Analytics</h3>
                    <p className="text-muted-foreground">
                      Gain valuable insights with comprehensive analytics and customizable reports.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-emerald-100 dark:bg-emerald-800/30 p-1 rounded-full">
                    <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Enterprise Security</h3>
                    <p className="text-muted-foreground">
                      Rest easy knowing your data is protected with enterprise-grade security features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-800/30 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-300">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Trusted by thousands of teams worldwide
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our customers have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 fill-emerald-500 text-emerald-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "StreamLine has completely transformed how our team works. We've increased productivity by 35% since
                    implementing it."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted h-10 w-10" />
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 fill-emerald-500 text-emerald-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The analytics features alone are worth the investment. We now have clear insights into our team's
                    performance."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted h-10 w-10" />
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">Product Manager, InnovateCo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 fill-emerald-500 text-emerald-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Customer support is exceptional. Any time we've had questions, the team has been quick to respond
                    and helpful."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted h-10 w-10" />
                    <div>
                      <p className="font-medium">Emily Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Operations Director, GrowthLabs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-800/30 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-300">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your team. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {/* Starter Plan */}
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">Perfect for small teams just getting started.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$12</span>
                    <span className="text-muted-foreground">/ user / month</span>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Up to 5 team members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Basic time tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Simple reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Email support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Get Started</Button>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-4 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">Ideal for growing teams that need more features.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$29</span>
                    <span className="text-muted-foreground">/ user / month</span>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Unlimited team members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Advanced time tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Custom reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Team analytics</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Get Started</Button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">For large organizations with specific needs.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$49</span>
                    <span className="text-muted-foreground">/ user / month</span>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Enterprise SSO</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Advanced security</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Custom integrations</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Contact Sales</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to streamline your workflow?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join thousands of teams already using StreamLine to boost their productivity.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-emerald-500 hover:bg-emerald-600">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Schedule a Demo</Button>
              </div>
              <p className="text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BarChart2 className="h-6 w-6 text-emerald-500" />
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <p className="text-sm text-muted-foreground">Streamline your workflow, amplify your productivity.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Product</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Company</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Legal</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} StreamLine. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-4 md:mt-0">Designed and built with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
