import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Award, Heart } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"

export function WhyChooseUs() {
  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Locally Owned & Operated",
      description: "Founded by actual dog trainers, not a big box franchise. We care about your success.",
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Decades of Experience",
      description: "Unparalleled professional training and coaching experience with pets and their owners.",
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Proven Success Stories",
      description: "Countless success stories from satisfied customers across Houston and Austin.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "100% Lasting Results",
      description: "We train you how to train your dog for permanent, lasting behavioral changes.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-accent-foreground bg-accent">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">Because your relationship matters.</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            We’re here for you with personalized guidance, ongoing support, and a compassionate approach that big-box programs can’t match. 
            You and your dog deserve training that feels like teamwork.
          </p>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <Image
                src="/images/trainer-matt.jpeg"
                alt="Professional dog trainer Matt working with German Shepherd during training session"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 right-3 md:-right-6  bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-sm font-medium">Happy Families</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="right">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-accent/10 rounded-lg">{benefit.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <ScrollReveal className="text-center mt-16">
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            All of our locations privately owned, founded by, and run by a nationally-titled and recognized trainer.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            We have decades of unparalleled professional training and coaching experience with pets and their owners,
            and countless success stories.
          </p>
          <p className="text-xl font-bold text-gray-500 mt-6">
            Let us train you to communicate with your dog for 100% lasting success!
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
