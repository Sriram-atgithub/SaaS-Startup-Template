import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Integrations | StreamLine",
  description: "Connect StreamLine with your favorite tools and services.",
}

export default function IntegrationsPage() {
  const integrations = [
    { name: "Slack", category: "Communication" },
    { name: "Microsoft Teams", category: "Communication" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Jira", category: "Project Management" },
    { name: "Asana", category: "Project Management" },
    { name: "Monday.com", category: "Project Management" },
    { name: "Zapier", category: "Automation" },
    { name: "Webhooks", category: "Automation" },
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
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
            <div className="max-w-3xl text-center mx-auto mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Connect with Your Favorite Tools</h1>
              <p className="text-xl text-muted-foreground">
                StreamLine integrates with the tools you already use. Automate workflows and streamline your processes.
              </p>
            </div>

            {/* Integrations Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="rounded-lg border bg-background p-6 hover:border-emerald-500 transition-colors"
                >
                  <div className="h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800 mb-4" />
                  <h3 className="text-lg font-semibold mb-1">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{integration.category}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800 p-8 text-center mb-12">
              <h3 className="text-lg font-semibold mb-2">More Integrations Coming Soon</h3>
              <p className="text-muted-foreground">
                We're constantly adding new integrations. Can't find what you need? Let us know!
              </p>
              <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600">Request Integration</Button>
            </div>

            {/* API Section */}
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Build Your Own Integration</h2>
              <p className="text-muted-foreground mb-6">
                Don't see your tool? Use our comprehensive API to build custom integrations tailored to your specific
                needs.
              </p>
              <Button variant="outline" className="w-full md:w-auto bg-transparent">
                View API Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
