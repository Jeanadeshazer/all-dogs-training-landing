import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, Target } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ServicesPreview() {
  const services = [
    {
      title: "Puppy Training",
      description: "Start your puppy off right with foundational training and socialization.",
      image: "/images/puppy-outdoor.jpeg",
      features: ["Basic Commands", "House Training", "Socialization", "Bite Inhibition"],
      icon: <Target className="h-6 w-6" />,
      duration: "6-8 weeks",
    },
    {
      title: "Obedience Training",
      description: "Comprehensive training for dogs of all ages to master essential commands.",
      image: "/images/puppy-bench.jpeg",
      features: ["Sit, Stay, Come", "Leash Training", "Impulse Control", "Focus Training"],
      icon: <Users className="h-6 w-6" />,
      duration: "8-12 weeks",
    },
    {
      title: "Behavioral Modification",
      description: "Address specific behavioral issues with customized training solutions.",
      image: "/images/running-dog.jpeg",
      features: ["Aggression Issues", "Anxiety & Fear", "Excessive Barking", "Destructive Behavior"],
      icon: <Clock className="h-6 w-6" />,
      duration: "Varies",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-accent-foreground bg-accent">
            Our Programs
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Professional Dog Training Programs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Customized training solutions for every dog and every behavioral challenge. Our proven methods work for dogs
            of all ages, breeds, and temperaments.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg overflow-hidden hover:scale-105 h-[590px] md:h-[630px] lg:h-[660px] flex flex-col py-0 pb-6">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} - Professional dog training program at All Dogs Training Co Houston facility`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-accent text-accent-foreground p-2 rounded-lg">{service.icon}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {service.duration}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1">
                    <div className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex-shrink-0">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full group bg-transparent hover:bg-accent hover:text-accent-foreground"
                      >
                        <Link href="/programs">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mb-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Train at Our Professional Facility</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our Houston facility provides the perfect environment for effective dog training with specialized
                equipment and spacious areas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/facility-training-area.jpeg"
                  alt="Professional dog training equipment and covered area at All Dogs Training Co Houston facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Training Equipment</h4>
                </div>
              </div>

              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/facility-fields.jpeg"
                  alt="Large outdoor training fields for dog obedience and recall training in Houston"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Open Fields</h4>
                </div>
              </div>

              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/facility-covered-area.jpeg"
                  alt="Weather-protected covered training area for year-round dog training programs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">All-Weather Training</h4>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/facility">
                  Tour Our Facility
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gray-500 hover:bg-gray-300/90 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            <Link href="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
