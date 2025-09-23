import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProblemSolution } from "@/components/problem-solution"
import { ServicesPreview } from "@/components/services-preview"
import { PhotoGrid } from "@/components/photo-grid"
import { Footer } from "@/components/footer"
import { FloatingActionButton } from "@/components/floating-action-button"
import TrainerTabsSection from '@/components/trainer-tabs-section'


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
