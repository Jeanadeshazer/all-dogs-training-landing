"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function PhotoGrid() {
  const photos = [
    { // Change picture
      src: "/images/home-page-photo-grid-tall.jpg",
      alt: "Beautiful red and white pit bull sitting in grass with professional training collar",
      className: "col-span-2 row-span-2",
    },
    {
      src: "/images/trainer-silhouette.jpeg",
      alt: "Professional dog trainer working with dog at golden hour in training field",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/golden-dog-steps.jpeg",
      alt: "Happy golden mixed breed dog sitting on stone steps after successful training session",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/beach-sunset-dog.jpeg",
      alt: "Dog enjoying off-leash freedom on beach at sunset - result of advanced training",
      className: "col-span-2 row-span-1",
    }
  ]

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">See the difference in your relationship.</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            From everyday manners to exciting off-leash adventures, our training builds trust, deepens your bond, and makes every moment together more enjoyable.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-4 grid-rows-2 gap-4 max-w-6xl mx-auto h-[600px] md:h-[800px]">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`${photo.className} relative overflow-hidden rounded-2xl group cursor-pointer`}
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
