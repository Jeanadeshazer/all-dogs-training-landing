import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProblemSolution } from "@/components/problem-solution"
import { ServicesPreview } from "@/components/services-preview"
import { PhotoGrid } from "@/components/photo-grid"
import { Footer } from "@/components/footer"
import { FloatingActionButton } from "@/components/floating-action-button"
import TrainerTabsSection from '@/components/trainer-tabs-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
      title: "All Dogs Training Co. - Atlanta Georgia Homepage",
      description: "This is the homepage for All Dogs Training Co., Atlanta GA, where you'll find everything you need about dog training straight from professional dog trainers.",
      keywords: "dog training atlanta, dog trainer atlanta, dog training atlanta texas, best dog trainer atlanta, best dog training atlanta, best dog training atlanta tx, train dog atlanta, dog training service atlanta, puppy training atlanta, obedience training atlanta",
}


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolution />
      <WhyChooseUs />
      <TrainerTabsSection />
      <PhotoGrid />
      <ServicesPreview />
      <Footer />
      <FloatingActionButton />
    </main>
  )
}
