import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Award, Users, Heart, Target, ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - All Dogs Training Co | Professional Dog Trainers Houston TX",
  description:
    "Learn about All Dogs Training Co's experienced dog trainers in Houston and Austin. Locally owned with decades of professional training experience and proven results.",
  keywords:
    "about dog trainer houston, professional dog trainer houston tx, experienced dog training houston, local dog trainer houston, dog training company houston",
}

export default function AboutPage() {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Locally Owned & Operated",
      description:
        "Community-focused, and committed to your success. Relationship based training for a changed state of mind.",
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Decades of Experience",
      description:
        "Our trainers have unparalleled professional training and coaching experience with pets and their owners.",
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Genuine Care",
      description: "We truly care about your success and building a lasting relationship between you and your dog.",
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Proven Results",
      description:
        "Countless success stories from satisfied customers across Houston and Austin prove our methods work.",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Families" },
    { number: "15+", label: "Years Experience" },
    { number: "2", label: "Texas Locations" },
    { number: "100%", label: "Success Rate" },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-accent-foreground bg-accent">
              About All Dogs Training Co
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              We're Not Your Typical <span className="text-accent">Dog Training</span> Company
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Founded by actual dog trainers, not corporate executives. We're locally owned, community-focused, and
              committed to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                {/* Copy paste from current website */}
                <p>                 
                  All Dogs Training Co. was founded with the simple philosophy of providing lifestyle based training resources
                  to dogs and their owners. We want to make training simple, and give you and your dog more freedom. Our programs 
                  are very results oriented and geared to maximum efficiency in the shortest amount of time. Our programs are all 
                  relationship based and uniquely structured for a total reset between you and your dog. We focus on building a 
                  strong connection, a healthier relationship, and a calmer state of mind for your dog.
                </p>
                <p>
                  With decades of combined experience in sport competition, protection training, competition obedience, tracking, 
                  behavior modification, and lots and lots of pet dog training... we are centered around clear, simplified, balanced 
                  training to help you enjoy YOUR dog in YOUR life. All Dogs Training Co. exists to help dogs and their owners. 
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/facility">
                    Tour Our Facility
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image //Change image to what she sent
                src="/images/group-training.jpeg"
                alt="Professional dog training session with multiple dogs and owners at All Dogs Training Co Houston facility"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              We're not just another dog training company. Here's what makes All Dogs Training Co different from the
              rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-accent/10 rounded-xl">{value.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/images/facility-evening.jpeg"
                alt="Evening view of All Dogs Training Co facility in Houston with beautiful lighting and welcoming atmosphere"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/images/facility-training-area.jpeg"
                alt="Professional dog training equipment and covered training area at Houston facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/images/facility-fields.jpeg"
                alt="Spacious outdoor training fields for dog training programs in Houston"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-8 md:p-12 text-center">
                <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Promise to You</h2>
                <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                  We don't just train your dog - we train YOU how to train your dog. This ensures a lasting and stable relationship 
                  with your dog that continues long after our sessions end. We're committed to your success 
                  and will work with you until you achieve the relationship with your dog that you've always wanted.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <Link href="/contact">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/programs">View Our Programs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
