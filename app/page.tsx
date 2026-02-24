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
  title: "All Dogs Training Co - Professional Dog Training in Houston & Austin, Texas",
  description: "Professional dog training in Houston and Austin, Texas. Expert trainers offering obedience training, behavioral modification, and puppy training.",
  keywords: "dog training houston, dog training austin, dog trainer texas, best dog training houston, best dog training austin, puppy training texas, obedience training houston, obedience training austin, behavioral modification houston, behavioral modification austin",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
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
