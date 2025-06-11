import { Inter } from 'next/font/google'
import { Providers } from './providers'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Solid Foundation Mudjacking - Professional Concrete Lifting Services',
  description: 'Professional mudjacking and concrete lifting services in your local area. Fast, affordable foundation repair with guaranteed results. Licensed & insured with 15+ years experience.',
  keywords: 'mudjacking, concrete lifting, foundation repair, slab jacking, local contractor, concrete settlement, driveway repair',
  openGraph: {
    title: 'Solid Foundation Mudjacking - Professional Concrete Lifting Services',
    description: 'Professional mudjacking and concrete lifting services. Fast, affordable foundation repair with guaranteed results.',
    url: 'https://solidfoundationmudjacking.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solid Foundation Mudjacking - Professional Concrete Lifting Services',
    description: 'Professional mudjacking and concrete lifting services. Fast, affordable foundation repair with guaranteed results.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Solid Foundation Mudjacking",
              "description": "Professional mudjacking and concrete lifting services",
              "telephone": "(555) 123-4567",
              "email": "info@solidfoundation.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Your City",
                "addressRegion": "State",
                "postalCode": "12345"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.7128",
                "longitude": "-74.0060"
              },
              "openingHours": "Mo-Sa 08:00-18:00",
              "priceRange": "$$",
              "url": "https://solidfoundationmudjacking.com",
              "areaServed": "Local Area",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Mudjacking Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Mudjacking"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Concrete Lifting"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Foundation Repair"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}