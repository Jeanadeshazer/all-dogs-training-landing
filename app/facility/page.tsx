import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Clock, Users, Award } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata = {
  title: "Our Training Facility | All Dogs Training Co - Houston & Austin",
  description:
    "Tour our state-of-the-art dog training facility in Houston. Professional indoor and outdoor training areas designed for effective dog training programs.",
  keywords:
    "dog training facility Houston, dog training center Houston, professional dog training facility, Houston dog training location",
}

export default function FacilityPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Link
                href="/about"
                className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to About Us
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Our Training <span className="text-accent">Facility</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Our ranchette style training facility was designed for you and your dogs peace of mind.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/facility-building.jpeg"
                  alt="All Dogs Training Co main facility building in Houston"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Professionally Managed Home Environment</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our Houston facility features both indoor and outdoor training areas designed to provide the optimal
                  environment for dog training. With spacious fields, covered training areas, and specialized equipment,
                  we create the perfect setting for your dog's learning journey.
                  <br/>
                  <br/>
                  Whether your dog stays at our facility or in-home with a trainer, they have 24/7 supervision and a fully immersive
                  training experience.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="font-medium">Houston Location</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span className="font-medium">Flexible Hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-accent" />
                    <span className="font-medium">24/7 Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="font-medium">Certified Trainers</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Training Areas Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Training Areas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse training environments designed to accommodate dogs of all sizes and training needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/facility-fields.jpeg"
                    alt="Large outdoor training fields for dog training in Houston"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Open Training Fields</h3>
                  <p className="text-muted-foreground">
                    Spacious outdoor areas perfect for recall training, agility work, and group classes.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/facility-covered-area.jpeg"
                    alt="Covered training area for all-weather dog training"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Covered and Indoor Training Area</h3>
                  <p className="text-muted-foreground">
                    Weather-protected and climate controlled space for year-round training with specialized equipment.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/facility-training-area.jpeg"
                    alt="Specialized training equipment area for dog behavior modification"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Lifestyle Based Training</h3>
                  <p className="text-muted-foreground">
                    A home environment provides lifestyle based training tailored to you and your dog.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Evening Ambiance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Welcoming Environment</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our facility is designed to be a comfortable, stress-free environment for both dogs and their owners.
                  With beautiful lighting, secure fencing, and thoughtful landscaping, we've created a space where
                  learning happens naturally.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  From our welcoming entrance to our spacious training areas, every detail has been considered to ensure
                  the best possible training experience for you and your dog.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">Schedule a Facility Tour</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/facility-evening.jpeg"
                  alt="Evening view of All Dogs Training Co facility with beautiful lighting"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Facility Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything we need to provide comprehensive dog training services
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src="/images/facility-entrance.jpeg"
                    alt="Secure entrance gate to dog training facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-2">Secure Entrance</h3>
                <p className="text-sm text-muted-foreground">
                  Gated facility with secure entry for safety and peace of mind
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src="/images/facility-gates.jpeg"
                    alt="Training area gates and fencing for dog safety"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-2">Safety Fencing</h3>
                <p className="text-sm text-muted-foreground">
                  Professional-grade fencing throughout all training areas
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src="/images/facility-porch.jpeg"
                    alt="Comfortable waiting area for dog owners"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-2">Comfortable Seating</h3>
                <p className="text-sm text-muted-foreground">Covered areas for owners to observe training sessions</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="text-center">
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src="/images/dachshund-bench.jpeg"
                    alt="Dog-friendly amenities at training facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-2">Dog-Friendly Design</h3>
                <p className="text-sm text-muted-foreground">Thoughtful amenities designed with dogs in mind</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Visit Our Facility?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Schedule a phone consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Schedule Tour</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-gray-800 transition-colors"
                >
                  <Link href="/programs">View Programs</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
