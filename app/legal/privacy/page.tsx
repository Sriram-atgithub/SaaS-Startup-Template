import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | StreamLine",
  description: "StreamLine Privacy Policy",
}

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">Privacy Policy</h1>
            <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. Introduction</h2>
                <p>
                  StreamLine ("we" or "us" or "our") operates the StreamLine application. This page informs you of our
                  policies regarding the collection, use, and disclosure of personal data when you use our service and
                  the choices you have associated with that data.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. Information Collection and Use</h2>
                <p>
                  We collect several different types of information for various purposes to provide and improve our
                  service to you.
                </p>
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal data such as Email address, Name, Phone number</li>
                  <li>Usage data including browser type, IP address, pages visited, time and date of visits</li>
                  <li>Device information such as device type, operating system, unique identifiers</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. Use of Data</h2>
                <p>StreamLine uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To allow you to participate in interactive features of our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our service</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">4. Security of Data</h2>
                <p>
                  The security of your data is important to us but remember that no method of transmission over the
                  Internet or method of electronic storage is 100% secure. While we strive to use commercially
                  acceptable means to protect your personal data, we cannot guarantee its absolute security.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@streamline.io.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
