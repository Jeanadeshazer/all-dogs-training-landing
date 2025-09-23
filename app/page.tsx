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
  title: "All Dogs Training Co. Austin TX - Home Page",
  description: "This is the homepage for All Dogs Training Co., where you can find everything you need about dog training from professional dog trainers and learn about our amazing packages.",
  keywords: 
    "dog training austin, dog trainer austin, dog training austin texas, best dog trainer austin, best dog training austin, best dog training austin tx, train dog austin, dog training service austin, puppy training austin, obedience training austin",
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
