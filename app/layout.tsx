import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from 'next/script'
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
    siteName: "All Dogs Training Co - Austin, TX",
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
          }}
        />
         <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GADS_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GADS_ID}');
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
