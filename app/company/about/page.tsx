import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "About Us | StreamLine",
  description: "Learn about StreamLine's mission and team.",
}

export default function AboutPage() {
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">About StreamLine</h1>
              <p className="text-xl text-muted-foreground">
                We're on a mission to help teams work smarter, not harder.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                StreamLine was founded in 2020 by a group of software engineers frustrated with the complexity of
                existing project management tools. We believed there had to be a better way for teams to collaborate and
                manage their work.
              </p>
              <p>
                What started as a simple time tracking tool evolved into a comprehensive platform that helps thousands
                of teams worldwide streamline their workflows and boost productivity.
              </p>
              <p>
                Today, StreamLine is used by startups, agencies, and enterprises across the globe. We're proud to have
                helped our customers save millions of hours and millions of dollars in wasted time.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12">Our Values</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
                <p className="text-muted-foreground">
                  We believe great software should be intuitive and easy to use. We obsess over simplicity in every
                  design decision.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  Your data is important. We build with reliability and security as first-class citizens.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                <p className="text-muted-foreground">
                  We listen to our customers and let their feedback drive our product development.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We're committed to staying at the forefront of technology and continuously improving our platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-muted-foreground mb-6">
              We're looking for talented individuals who are passionate about building great software. Check out our
              careers page to see open positions.
            </p>
            <Link href="/company/careers">
              <Button className="bg-emerald-500 hover:bg-emerald-600">View Careers</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
