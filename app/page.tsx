import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProblemSolution } from "@/components/problem-solution"
import { ServicesPreview } from "@/components/services-preview"
import { PhotoGrid } from "@/components/photo-grid"
import { Footer } from "@/components/footer"
import { FloatingActionButton } from "@/components/floating-action-button"
import TrainerTabsSection from '@/components/trainer-tabs-section'
import TransferModal from "@/components/transfer-modal"
import type { Metadata } from 'next'

export const metadata: Metadata = {
      title: "All Dogs Training Co. - Houston Texas Homepage",
      description: "This is the homepage for All Dogs Training Co., Houston TX, where you'll find everything you need about dog training straight from professional dog trainers.",
      keywords: "dog training houston, dog trainer houston, dog training houston texas, best dog trainer houston, best dog training houston, best dog training houston tx, train dog houston, dog training service houston, puppy training houston, obedience training houston",
}


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TransferModal />
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
