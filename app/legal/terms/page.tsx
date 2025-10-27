import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service | StreamLine",
  description: "StreamLine Terms of Service",
}

export default function TermsPage() {
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
        {/* Content */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-3xl">
            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">Terms of Service</h1>
            <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. Agreement to Terms</h2>
                <p>
                  By accessing and using StreamLine, you accept and agree to be bound by the terms and provision of this
                  agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on
                  StreamLine for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                  transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on StreamLine</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. Disclaimer</h2>
                <p>
                  The materials on StreamLine are provided on an 'as is' basis. StreamLine makes no warranties,
                  expressed or implied, and hereby disclaims and negates all other warranties including, without
                  limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">4. Limitations</h2>
                <p>
                  In no event shall StreamLine or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on StreamLine.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on StreamLine could include technical, typographical, or photographic errors.
                  StreamLine does not warrant that any of the materials on StreamLine are accurate, complete, or
                  current.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
