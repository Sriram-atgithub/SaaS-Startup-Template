import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Changelog | StreamLine",
  description: "Latest updates and improvements to StreamLine.",
}

export default function ChangelogPage() {
  const updates = [
    {
      version: "v2.5.0",
      date: "March 15, 2024",
      items: ["New dark mode support", "Improved performance", "Bug fixes"],
    },
    {
      version: "v2.4.0",
      date: "March 1, 2024",
      items: ["Added mobile app support", "New analytics dashboard", "Enhanced security"],
    },
    {
      version: "v2.3.0",
      date: "February 15, 2024",
      items: ["Real-time collaboration", "Custom reporting", "API improvements"],
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Product Changelog</h1>
              <p className="text-xl text-muted-foreground">
                Stay up to date with the latest features, improvements, and fixes to StreamLine.
              </p>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl">
            <div className="space-y-12">
              {updates.map((update) => (
                <div key={update.version} className="border-l-2 border-emerald-500 pl-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-semibold -ml-12">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{update.version}</h3>
                      <p className="text-sm text-muted-foreground">{update.date}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {update.items.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
