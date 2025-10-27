import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Careers | StreamLine",
  description: "Join the StreamLine team and help us build the future of productivity.",
}

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Product Manager",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      title: "Full Stack Engineer",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Design Lead",
      location: "New York, NY",
      type: "Full-time",
    },
    {
      title: "Customer Success Manager",
      location: "Remote",
      type: "Full-time",
    },
  ]

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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Careers at StreamLine</h1>
              <p className="text-xl text-muted-foreground">
                Join our team and help us build the future of productivity.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Why Join StreamLine?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Competitive Compensation</h3>
                <p className="text-muted-foreground">We offer competitive salaries, equity, and benefits.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Remote Work</h3>
                <p className="text-muted-foreground">Work from anywhere. We believe in flexibility.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">Unlimited professional development and learning opportunities.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Great Team</h3>
                <p className="text-muted-foreground">Work with talented, passionate individuals who care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <div key={idx} className="rounded-lg border p-6 hover:border-emerald-500 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.location}</p>
                  <Button className="bg-emerald-500 hover:bg-emerald-600">Apply Now</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
