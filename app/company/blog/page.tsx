import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Blog | StreamLine",
  description: "Articles and insights about productivity and team management.",
}

export default function BlogPage() {
  const posts = [
    {
      title: "10 Tips for Better Team Collaboration",
      date: "March 20, 2024",
      excerpt: "Learn proven strategies to improve communication and collaboration within your team.",
      category: "Productivity",
    },
    {
      title: "How to Measure Team Productivity",
      date: "March 15, 2024",
      excerpt: "Discover metrics and tools that help you understand and improve your team's performance.",
      category: "Analytics",
    },
    {
      title: "Remote Work Best Practices",
      date: "March 10, 2024",
      excerpt: "Essential tips and strategies for managing remote teams effectively.",
      category: "Remote Work",
    },
    {
      title: "Automating Your Workflow",
      date: "March 5, 2024",
      excerpt: "Explore how automation can save time and reduce errors in your daily operations.",
      category: "Automation",
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Blog</h1>
              <p className="text-xl text-muted-foreground">
                Insights, tips, and best practices for productivity and team management.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl">
            <div className="space-y-8">
              {posts.map((post, idx) => (
                <article
                  key={idx}
                  className="rounded-lg border p-6 hover:border-emerald-500 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
