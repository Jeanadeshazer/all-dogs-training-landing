import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "All Dogs Training Co - Best Dog Training Austin TX | Professional Dog Trainer",
  description:
    "Professional dog training services in Austin, Texas. Expert dog trainers offering obedience training, behavioral modification, and puppy training. Locally owned and operated with proven results.",
  keywords:
    "dog training austin, dog trainer austin, dog training austin texas, best dog trainer austin, best dog training austin, best dog training austin tx, train dog austin, dog training service austin, puppy training austin, obedience training austin",
  authors: [{ name: "All Dogs Training Co" }],
  creator: "All Dogs Training Co",
  publisher: "All Dogs Training Co",
  robots: "index, follow",
  openGraph: {
    title: "All Dogs Training Co - Best Dog Training Austin TX",
    description: "Professional dog training services in Austin, Texas. Expert dog trainers with proven results.",
    url: "https://alldogstrainingco.com",
    siteName: "All Dogs Training Co",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Dogs Training Co - Best Dog Training austin TX",
    description: "Professional dog training services in Austin, Texas. Expert dog trainers with proven results.",
  },
  alternates: {
    canonical: "https://alldogstrainingco.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
