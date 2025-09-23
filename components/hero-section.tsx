"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, MapPin } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30 md:pt-25">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-dog.jpeg"
          alt="Professional dog training in Houston"
          fill
          className="object-cover object-[center_20%]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight animate-fade-in-up">
            Does your dog <span className="text-accent">ignore you?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-balance text-white/90 leading-relaxed animate-fade-in-up">
            Are you tired of leash pulling, jumping, reactivity?
            <br />
            <strong className="text-white">Our proven programs can train any dog!</strong>
          </p>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Serving Houston & Austin</span>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-2 mb-8 animate-fade-in-up">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white/90 font-medium">
              Trusted by <AnimatedCounter end={500} suffix="+" className="inline font-bold text-accent" /> Texas
              families
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-transparent hover:scale-105 transition-all duration-300"
            >
              <Link href="/programs">View Programs</Link>
            </Button>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90 animate-fade-in-up">
            <a
              href="tel:5126484510"
              className="flex items-center space-x-2 hover:text-accent transition-colors hover:scale-105 transform duration-200"
            >
              <span className="font-semibold">Austin:</span>
              <span className="text-xl font-bold">(512) 648-4510</span>
            </a>
            <a
              href="tel:7139097968"
              className="flex items-center space-x-2 hover:text-accent transition-colors hover:scale-105 transform duration-200"
            >
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
