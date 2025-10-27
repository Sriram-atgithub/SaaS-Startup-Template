import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft, Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact Us | StreamLine",
  description: "Get in touch with the StreamLine team.",
}

export default function ContactPage() {
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">Have questions? We'd love to hear from you.</p>
            </div>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 max-w-4xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">support@streamline.io</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Innovation Way
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-lg border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      className="w-full rounded-lg border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:outline-none min-h-[120px]"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
