import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "All Dogs Training Co - Best Dog Training Houston TX | Professional Dog Trainer",
  description:
    "Professional dog training services in Houston, Texas. Expert dog trainers offering obedience training, behavioral modification, and puppy training. Locally owned and operated with proven results.",
  keywords:
    "dog training houston, dog trainer houston, dog training houston texas, best dog trainer houston, best dog training houston, best dog training houston tx, train dog houston, dog training service houston, puppy training houston, obedience training houston",
  authors: [{ name: "All Dogs Training Co" }],
  creator: "All Dogs Training Co",
  publisher: "All Dogs Training Co",
  robots: "index, follow",
  openGraph: {
    title: "All Dogs Training Co - Best Dog Training Houston TX",
    description: "Professional dog training services in Houston, Texas. Expert dog trainers with proven results.",
    url: "https://alldogstrainingco.com",
    siteName: "All Dogs Training Co, Houston TX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Dogs Training Co - Best Dog Training Houston TX",
    description: "Professional dog training services in Houston, Texas. Expert dog trainers with proven results.",
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
      <head>
        
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        {/* Load GA script */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
      </body>
    </html>
  )
}
