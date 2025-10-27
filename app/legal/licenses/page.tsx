import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart2, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Licenses | StreamLine",
  description: "Open source licenses used in StreamLine",
}

export default function LicensesPage() {
  const licenses = [
    {
      name: "React",
      version: "19.0.0",
      license: "MIT",
    },
    {
      name: "Next.js",
      version: "15.2.4",
      license: "MIT",
    },
    {
      name: "Tailwind CSS",
      version: "3.4.17",
      license: "MIT",
    },
    {
      name: "shadcn/ui",
      version: "Latest",
      license: "MIT",
    },
    {
      name: "Lucide Icons",
      version: "0.454.0",
      license: "ISC",
    },
    {
      name: "Class Variance Authority",
      version: "0.7.1",
      license: "Apache 2.0",
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
        {/* Content */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-3xl">
            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Open Source Licenses</h1>
            <p className="text-lg text-muted-foreground mb-8">
              StreamLine is built with amazing open source projects. Here are the licenses for the packages we use.
            </p>

            {/* Licenses Table */}
            <div className="rounded-lg border overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-slate-900">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Package</th>
                    <th className="px-6 py-3 text-left font-semibold">Version</th>
                    <th className="px-6 py-3 text-left font-semibold">License</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {licenses.map((pkg, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="px-6 py-3">{pkg.name}</td>
                      <td className="px-6 py-3 text-muted-foreground">{pkg.version}</td>
                      <td className="px-6 py-3">
                        <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
                          {pkg.license}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* License Text */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">MIT License</h2>
              <p className="text-sm text-muted-foreground mb-4 whitespace-pre-wrap">
                {`Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.`}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
