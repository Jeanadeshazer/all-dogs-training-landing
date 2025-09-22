import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Target, CheckCircle, ArrowRight, Star, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Board and Train Programs for Off-Leash Dog Training | Lifetime Support | All Dogs Training Co.",
  description:
    "Leash pulling? Lack of obedience? Behavior issues? Social issues? Reactivity? We can help with that! All of our programs are customized to bring out the very best in your dog. All programs come with follow-up lessons and lifetime support for continued success.",
  keywords:
    "board and train houston, off-leash dog training houston, puppy training houston, obedience training houston, behavioral modification houston, dog training services houston tx, professional dog training houston",
}

export default function ProgramsPage() {
  const boardTrainPrograms = [
    {
      title: "Puppy Foundations Program",
      subtitle: "Ages 8 weeks - 5 months",
      description:
        "Set your puppy up for success and let us help you give them the best start possible! This is a 2 week long board and train in which your puppy will live with us in a structured home environment to lay the foundation for learning HOW to learn through markers, crate and house manners, name recognition, leash training, proper social skills with people and other dogs, and beginning basic obedience.",
      image: "/images/golden-dog-steps.jpeg",
      duration: "2 weeks",
      price: "$1,950",
      includes: "Full lesson program included",
      features: [
        "Learning HOW to learn through markers",
        "Crate and house manners",
        "Name recognition",
        "Leash training",
        "Proper social skills with people and other dogs",
        "Beginning basic obedience",
        "One go-home private lesson",
        "4 week lesson program enrollment included",
      ],
      icon: <Target className="h-8 w-8" />,
      color: "bg-blue-500",
    },
    {
      title: "2 Week On-Leash Hybrid Board and Train",
      subtitle: "Ages 6 months and up",
      description:
        "Our 2 week hybrid board and train is the easiest way to get the perfectly behaved pet you've always wanted! Your dog stays with us for 2 weeks for a mental and behavioral reset, and we really dial in their on-leash obedience commands. Leash pulling, jumping, impulse control, hyperactivity, and mild reactivity will all be addressed.",
      image: "/images/red-pitbull-portrait.jpeg",
      duration: "2 weeks",
      price: "$2,450",
      includes: "Includes 5 follow-up lessons AND e-collar",
      features: [
        "Sit/stay",
        "Down/stay",
        "Stay on place",
        "Short distance recall",
        "Loose leash walking",
        "Interior manners",
        "Crate training",
        "Threshold work",
        "Neutrality with people and other dogs",
        "E-collar training included",
        "Go-home lesson + 4 follow-up lessons",
      ],
      icon: <Users className="h-8 w-8" />,
      color: "bg-green-500",
    },
  ]

  const lessonPrograms = [
    {
      title: "Puppy Grow and Learn",
      subtitle: "8 weeks through 5 months",
      description:
        "Perfect for owners who want to be part of every step of the training process, and keep their dog at home through training. We coach you, and you are in charge of your dogs progress!",
      image: "/images/golden-dog-steps.jpeg",
      features: [
        "Teach focus on you through luring and rewards",
        "Socialization and exposure",
        "Neutrality",
        "Basic Obedience Commands",
      ],
      icon: <Target className="h-8 w-8" />,
      color: "bg-blue-500",
    },
    {
      title: "Adult Obedience Foundations",
      subtitle: "6 Months and up",
      description:
        "Level 1 foundation training for adult dogs focusing on essential obedience skills and communication.",
      image: "/images/red-pitbull-portrait.jpeg",
      features: [
        "Learning Foundation (Marker Training)",
        "Loose Leash Walking",
        "Stationary Commands Through Luring, Hand Cues, Verbal Cues (Sit/Stay and Down/Stay)",
        "Come When Called! Taught through fun games using markers and rewards",
        "Place Command- Go to place and settle with distance and duration",
      ],
      icon: <Users className="h-8 w-8" />,
      color: "bg-green-500",
    },
    {
      title: "Off-Leash Foundation",
      subtitle: "Prerequisite Level 1",
      description: "Advanced training building towards reliable off-leash control and emergency commands.",
      image: "/images/trainer-silhouette.jpeg",
      features: [
        "E-Collar Foundation for off-leash reliability",
        "Work Towards a Bombproof Recall in All Situations",
        "Emergency Down",
        "Solid Heel On-Leash and Work Towards Off-Leash",
      ],
      icon: <Clock className="h-8 w-8" />,
      color: "bg-purple-500",
    },
    {
      title: "Advanced Off-Leash",
      subtitle: "Prerequisite Level 1 & 2",
      description: "The ultimate in off-leash reliability with comprehensive proofing under all distractions.",
      image: "/images/beach-sunset-dog.jpeg",
      features: [
        "PROOF PROOF PROOF Everything!",
        "Reliable Off-Leash Commands Under Distraction",
        "Off-Leash Heel",
        "Proofing Behavior Modification",
      ],
      icon: <Star className="h-8 w-8" />,
      color: "bg-orange-500",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-accent-foreground bg-accent">
              Board and Train Programs
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Dog Training <span className="text-accent">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed mb-8">
              Leash pulling? Lack of obedience? Behavior issues? Social issues? Reactivity? We can help with that! All
              of our programs are customized to bring out the very best in your dog. All programs come with follow-up
              lessons and lifetime support for continued success.
            </p>

            <div className="bg-accent/10 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-accent">Need Help Now?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Austin:</span>
                  <a href="tel:5126484510" className="text-lg font-bold text-accent hover:text-accent/80">
                    (512) 648-4510
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Call/Text or fill out the form below to get in touch with us ASAP
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Hybrid Board & Train Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Our hybrid board and train begins with a short board and train to really make the most progress in the
              shortest amount of time. Once the board and train is complete, you receive complimentary enrollment in our
              lesson program. This ensures that not only are you fully trained in what we taught your dog, but we train
              you how to continue training your dog.
            </p>
          </div>

          <div className="space-y-20">
            {boardTrainPrograms.map((program, index) => (
              <div
                key={index}
                className={`${index % 2 === 1 ? "lg:flex-row-reverse" : ""} flex flex-col lg:flex-row gap-12 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={`${program.title} - Professional dog training program at All Dogs Training Co Houston facility`}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className={`absolute -top-4 -right-4 ${program.color} text-white p-4 rounded-2xl shadow-xl`}>
                      {program.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-accent border-accent">
                          {program.duration}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-3xl font-bold">{program.title}</CardTitle>
                      <p className="text-xl text-accent font-semibold">{program.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                    </CardHeader>

                    <CardContent>
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">What's Included:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {program.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-bold text-accent">{program.price}</div>
                          <div className="text-sm text-muted-foreground">{program.includes}</div>
                        </div>
                        <Button asChild className="bg-accent hover:bg-accent/90">
                          <Link href="/contact">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-accent-foreground bg-accent">
              Lesson Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              5 Week Lesson Program Tiers
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Let us train you how to train your dog! These programs are perfect for owners who want to be part of every
              step of the training process, and keep their dog at home through training. We coach you, and you are in
              charge of your dogs progress!
            </p>
            <div className="mt-8 p-6 bg-accent/10 rounded-2xl inline-block">
              <div className="text-3xl font-bold text-accent">$750</div>
              <div className="text-lg font-semibold">5 Week Lesson Program</div>
              <div className="text-sm text-muted-foreground">
                Each of our Board and Trains is followed by enrollment in the appropriate Level lesson program, at no
                extra cost.
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {lessonPrograms.map((program, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={`${program.title} - Professional dog training lesson program`}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className={`absolute top-4 right-4 ${program.color} text-white p-3 rounded-xl shadow-lg`}>
                    {program.icon}
                  </div>
                  <div className="absolute top-4 left-4 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{program.title}</CardTitle>
                  <p className="text-lg text-accent font-semibold">{program.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Schedule Your Complimentary Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Adventure Programs Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-accent-foreground bg-accent">
              Adventure Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Off-Leash Adventure Training
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Take your dog's training to the next level with our specialized adventure programs. Build confidence,
              strengthen bonds, and enjoy real-world off-leash freedom in safe, controlled environments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <Image
                src="/images/beach-sunset-dog.jpeg"
                alt="Dog enjoying off-leash freedom on beach at sunset - result of advanced adventure training program"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">Beach</div>
                  <div className="text-sm font-medium">Adventures</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Beach & Water Training</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Experience the ultimate freedom with your dog through our beach adventure training program. Perfect for
                dogs who have mastered basic obedience and are ready for real-world challenges.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Advanced off-leash recall training",
                  "Water safety and swimming confidence",
                  "Distraction-proofing with wildlife and people",
                  "Emergency response commands",
                  "Beach etiquette and environmental awareness",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <Link href="/contact">
                  Join Beach Adventures
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <Image
                src="/images/dogs-adventure-rocks.jpeg"
                alt="Multiple dogs exploring rocky terrain during adventure training program in natural outdoor setting"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Hiking & Trail Adventures</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Build your dog's confidence and physical fitness through challenging terrain and natural obstacles. Our
                hiking adventures combine training with exploration for the ultimate bonding experience.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Trail navigation and terrain confidence",
                  "Pack behavior and group dynamics",
                  "Wildlife encounter protocols",
                  "Physical conditioning and endurance",
                  "Leave No Trace outdoor ethics",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <Link href="/contact">
                  Explore Trail Training
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Train at Our Professional Facility</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Our Houston facility provides the perfect environment for effective dog training with both indoor and
              outdoor spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image
                src="/images/facility-training-area.jpeg"
                alt="Professional dog training equipment and covered training area at All Dogs Training Co Houston facility"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Training Equipment</h3>
                <p className="text-sm opacity-90">Professional grade equipment</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image
                src="/images/facility-fields.jpeg"
                alt="Large outdoor training fields for dog obedience and recall training in Houston"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Open Fields</h3>
                <p className="text-sm opacity-90">Spacious training areas</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image
                src="/images/facility-covered-area.jpeg"
                alt="Weather-protected covered training area for year-round dog training programs"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Covered Areas</h3>
                <p className="text-sm opacity-90">All-weather training</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image
                src="/images/facility-evening.jpeg"
                alt="Evening view of All Dogs Training Co Houston facility with welcoming atmosphere and professional lighting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Evening Classes</h3>
                <p className="text-sm opacity-90">Flexible scheduling</p>
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
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              We offer specialized training services to meet your unique needs. Contact us to discuss custom training
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">{/* Additional Services content here */}</div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Discuss Custom Training
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Off-Leash Raise and Train CTA */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-accent/20 bg-accent/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want the Ultimate Off-Leash Training Experience?</h2>
              <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                Do you want the ultimate off-leash training experience? Do you wish you could take your dog anywhere and
                have reliable control with all commands on-leash AND off-leash?
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 mb-6">
                <Link href="/off-leash-raise-and-train">
                  Learn About Our Off-Leash Raise and Train Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-lg font-semibold text-accent">
                Every dog is a good dog, let us help make your dog a great dog!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-accent/20 bg-accent/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Wait, Unleash Your Dog's Potential Today!</h2>
              <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                All board and train programs are fully customized to your individual dogs needs and your goals. Programs
                can be extended in length if needed, to address more serious behavior issues, or add obedience
                reliability. E-Collar training for added reliability, distance work, and impeccable communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:5126484510"
                  className="flex items-center justify-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">Austin:</span>
                  <span className="text-lg font-bold">(512) 648-4510</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
