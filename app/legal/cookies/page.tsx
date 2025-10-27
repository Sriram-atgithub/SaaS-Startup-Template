import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Cookie Policy | StreamLine",
  description: "StreamLine Cookie Policy",
}

export default function CookiesPage() {
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">Cookie Policy</h1>
            <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. What Are Cookies?</h2>
                <p>
                  Cookies are small pieces of text stored on your browser or device. They are widely used to remember
                  login information, personal preferences, and to track website analytics. Our use of cookies is to
                  enhance your experience on StreamLine.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. Types of Cookies We Use</h2>
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Essential Cookies:</h3>
                <p>
                  These cookies are necessary for the website to function properly. They allow you to navigate the site
                  and use essential features.
                </p>
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Analytics Cookies:</h3>
                <p>
                  We use these cookies to understand how you use StreamLine and to improve our service based on that
                  information.
                </p>
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Marketing Cookies:</h3>
                <p>These cookies are used to track your activity and show you targeted advertising.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. How to Control Cookies</h2>
                <p>
                  You can control and manage cookies in your browser settings. Most browsers allow you to refuse cookies
                  or alert you when cookies are being sent. For more information about managing cookies, visit your
                  browser's help section or www.allaboutcookies.org.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">4. Contact Us</h2>
                <p>If you have questions about our use of cookies, please contact us at cookies@streamline.io.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
