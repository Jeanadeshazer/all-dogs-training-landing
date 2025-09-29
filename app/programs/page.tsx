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
      image: "/images/puppy-shot.jpeg", //Change image
      duration: "2 weeks",
      price: "$1,950",
      includes: "1 go-home lesson and 4 follow up lessons to be used by 6 months old inclusive",
      features: [
        "Learning HOW to learn through markers",
        "Crate and house manners",
        "Name recognition",
        "Leash training",
        "Proper social skills with people and other dogs",
        "Beginning basic obedience",
        "5 lessons included",
      ],
      icon: <Target className="h-8 w-8" />,
      color: "bg-blue-500",
    },
    {
      title: "VIP Raise and Train (Houston Only)",
      subtitle: "Ages 6 months and under",
      description:
        "This is the gold standard in puppy raising. Your puppy will live with a professional trainer and be raised just like one of our dogs. They will learn how to live as a calm, confident, obedient member of the family with full stability and reliability. Your puppy will go where we go and be a part of everything, and everything is an immersive training opportunity. They will learn to socialize properly with our dogs, with people, and be exposed to various distractions for which they'll learn neutrality. This is the most comprehensive path from puppyhood to a perfect adult companion.",
      image: "/images/puppy-bench.jpeg",
      duration: "12 weeks",
      price: "Get a Quote by calling us at\n(713) 909-7968",
      includes: "",
      features: [
        'Professional training',
        'Socialization opportunities',
        'Comprehensive training curriculum',
        'Equipment is included'
      ],
      icon: <Users className="h-8 w-8"/>,
      color: "bg-green-500"
    },
    {
      title: "Urban Dog Program",
      subtitle: "Ages 6 months and up",
      description:
        "This program provides full reliability in all on-leash training. Perfect for dogs that live in apartments, suburbs, metro lifestyles, and/or are mostly in leashed environments.\n\n This course provides on-leash reliability for all of the basic commands.",
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
      color: "bg-blue-500",
    },
    {
      title: "Adventure Dog Program",
      subtitle: "6 months and up",
      description: 
        "Do you live an outdoorsy lifestyle and want the perfect off-roading companion? Is the farm/ranch lifestyle your passion? Want your dog to ride shotgun on the golf cart with you? Hiking? RV road warrior? Then this program is for you! ADVENTURE DOG is the ultimate lifestyle based program. It's a 100% holistic, nose to tail approach to training, on and off-leash, out in public, and based on your unique lifestyle. The end result is a dog that can go anywhere with you and be your perfect sidekick!\n\nYour dog will stay with us for a 3-4 week board and train (length dependent on each individual dog) for a total mental reset, to learn to live calmly, impulse control and solid reliability in all areas of training.\n\nOff-Leash in all basics, as well as training custom to your lifestyle.",
      image: "/images/off-leash-image.jpg",
      duration: "3-4 weeks",
      price: "$4,950",
      includes: "5 follow up lessons AND e-collar included",
      features: [
        "Sit/stay",
        "Down/stay",
        "Stay on place",
        "Off-leash walking",
        "Distance recall",
        "Down at a distance",
        "Thresholds",
        "Manners",
        "E-collar conditioning included",
        "5 follow-up lessons and lifetime support",
      ],
      icon: <Target className="w-8 h-8"/>,
      color: "bg-green-500",
    }
  ]

  return (
    <main className="min-h-screen">

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
                  <span className="font-semibold">Houston:</span>
                  <a href="tel:7139097968" className="text-lg font-bold text-accent hover:text-accent/80">
                    (713) 909-7968
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
              We cover everything from puppy foundational work, to standard obedience training, to behavioral issues, as well as advanced
              obedience. Our training approach is very results oriented through proven balanced methods which transfer seamlessly to the owners.
              Good behaviors are rewarded, increased, and made reliable, while bad behaviors are eliminated. Our unique relationship based training
              allows dogs and owners to have a complete reset and start over together. {/* Change Blurb to what's on pages */}
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
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{program.description}</p>
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
                          <div className="text-3xl font-bold text-accent whitespace-pre-line">{program.price}</div>
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

            {/* Doggie Day School Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-accent-foreground bg-accent">
              Doggie Day School
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">Doggie Day School Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Structured day training programs that combine socialization, exercise, and focused training sessions.
              Perfect for busy owners who want their dogs to receive professional training during the day while they
              work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Doggie Day School */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-accent border-accent">
                    Training Program
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold">Doggie Day School for all ages (Available in Houston Only)</CardTitle>
                <p className="text-xl text-accent font-semibold">Structured Day Training</p>
                <p className="text-muted-foreground leading-relaxed">
                  Our Day School program is the perfect option for professional obedience training while still having your dog home every night. 
                  Let your dog spend the work day with us in a safe, calm environment of structured learning and safe play. Drop off and pick up 
                  at our Cypress area location.
                  <br/>
                  *not suitable for dogs with serious behavior issues
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {/* 5 Visits Package */}
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">5 Visits Package</h4>
                      <div className="text-2xl font-bold text-accent">$750</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Foundation Skills Program</p>
                    <div className="space-y-2">
                      {["Leash Skills", "Recall Training", "Place Command"].map((skill, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 14 Visits Package */}
                  <div className="border rounded-lg p-4 bg-accent/5 border-accent/20">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">14 Visits Package</h4>
                      <div className="text-2xl font-bold text-accent">$1,950</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Complete Core Commands Program</p>
                    <div className="space-y-2">
                      {["All Core Commands", "Advanced Obedience", "Behavioral Refinement", "Socialization Skills"].map(
                        (skill, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{skill}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">VIP Unlimited Monthly Membership</h4>
                      <div className="text-2xl font-bold text-accent">$3,500</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Foundation Skills Program</p>
                    <div className="space-y-2">
                      {["All Core Commands", "Conditioning", "Foundation"].map((skill, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/contact">
                      Enroll in Day School
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Doggie Day School Tune-Ups */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Maintenance Program
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold">Day School Tune-Ups (Available in all locations)</CardTitle>
                <p className="text-xl text-green-600 font-semibold">Ongoing Maintenance</p>
                <p className="text-muted-foreground leading-relaxed">
                  For dogs and puppies that have already gone through one of our programs, this is a great option to keep reinforcing training, as
                  well as provide mental and physical enrichment. It's the perfect continuation of all our board and train programs!
                  <br/>
                  *Only for dogs that have been through one of our programs already
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {/* Daily Rate */}
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">Daily Rate</h4>
                      <div className="text-2xl font-bold text-green-600">$50</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Per Day Training Session</p>
                    <div className="space-y-2">
                      {["Skill Reinforcement", "Behavioral Maintenance", "Exercise & Socialization"].map(
                        (benefit, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Monthly Unlimited */}
                  <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">Monthly Unlimited</h4>
                      <div className="text-2xl font-bold text-green-600">$1,000</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Unlimited Monthly Visits</p>
                    <div className="space-y-2">
                      {[
                        "Unlimited Day School Access",
                        "Continuous Skill Development",
                        "Priority Scheduling",
                        "Progress Monitoring",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/contact">
                      Start Tune-Ups
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                <span className="hidden sm:inline">Schedule Your Complimentary Consultation</span>
                <span className="sm:hidden">Schedule Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
                  href="tel:7139097968"
                  className="flex items-center justify-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">Houston:</span>
                  <span className="text-lg font-bold">(713) 909-7968</span>
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
