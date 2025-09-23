import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { ArrowRight, HelpCircle, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - All Dogs Training Co | Dog Training Questions Austin TX",
  description:
    "Frequently asked questions about dog training services in Austin TX. Get answers about our training programs, pricing, and methods from professional dog trainers.",
  keywords:
    "dog training FAQ austin, dog training questions austin, dog trainer FAQ austin tx, dog training cost austin, how long dog training austin",
}

export default function FAQPage() {
const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What makes All Dogs Training Co different?",
          answer:
            "We are not a franchise with cookie cutter methods that don't work. We customize training to each individual dog and owner, and focus on creating a relationship based on connection and communication. Our training process is made to transfer easily to the owner, and we provide multiple follow up lessons to ensure lasting success.",
        },
        {
          question: "Do you offer a guarantee?",
          answer:
            "We guarantee the dog is trained within the parameters we have set. But training only works if the owners are consistent and follow through with what we teach them when the dog goes home. That’s why we provide multiple follow up lessons and lifetime support to help owners maintain lasting results. ",
        },
        {
          question: "What training methods do you use?",
          answer:
            "We use whatever works on each dog! Dogs are like people, in that they are not one size fits all. We use various balanced methods including food, toys, play, e-collars, and all 4 quadrants of training (positive/negative reinforcement, positive/negative punishment).",
        },
      ],
    },
    {
      category: "Training Programs",
      questions: [
        {
          question: "Can you help with aggressive dogs?",
          answer:
            "Yes, we specialize in behavioral modification including aggression issues. As long as the dog is able to be safely handled by us, we can work with various aggression and reactivity concerns. Safety, doing whats best for the dog, and positive progress are our top priorities. ",
        },
        {
          question: "Do you offer private training sessions?",
          answer:
            "Private sessions are included in all our board and train programs, as well as our day school program. The path to the best, and fastest, results is when we get the dog where he needs to be first, and then transfer that to the owners through lessons. ",
        },
        {
          question: "What if my dog doesn't get along with other dogs?",
          answer:
            "No problem! That does not effect whether or not we can take them into our programs. They will not be allowed freedom with other dogs, and everyone's safety is our number one priority.",
        },
      ],
    },
    {
      category: "Logistics & Pricing",
      questions: [
        {
          question: "How much does training cost?",
          answer:
            "The exact cost depends on which program fits your needs. Our Day School packages start at $750 and our Board and Trains start at $1,950 and include all equipment and lessons.",
        },
        {
          question: "Where are you located?",
          answer:
            "Our Texas training locations are in Austin and Houston. We serve all surrounding areas as well.\n\nOur Georgia training locations are in Villa Rica and Fayetteville. We serve all surrounding areas including Atlanta metro area.",
        },
        {
          question: "What should I bring with my dog?",
          answer: 
            "Bring your dog on a leash, enough food for his stay, and any meds he needs while with us. We provide everything else!"
        },
      ],
    },
    {
      category: "Results & Expectations",
      questions: [
         {
          question: "What if my dog is older? Is it too late to train?",
          answer:
            "It's never too late to train a dog! While puppies may learn faster, adult and senior dogs can absolutely learn new behaviors and overcome bad habits. We've successfully trained dogs of all ages, from 8-week-old puppies to 12-year-old seniors.",
        },
        {
          question: "What happens after the training program ends?",
          answer:
            "We provide lifetime support for all our clients! You can contact us anytime with questions or if you need refresher sessions.",
        },
        {
          question: "Will the training work if I have multiple dogs?",
          answer:
            "Yes! We can work with multiple dogs, though the approach may vary depending on their individual needs and how they interact with each other. Sometimes we train dogs separately initially, then work on group dynamics. We'll assess your specific situation during the consultation.",
        },
        {
          question: "What should I expect while my dog is gone?",
          answer:
            "24 hours after drop off you’ll receive a picture and a quick update on how your pup is settling in. We’ll spend the next few days bonding with your dog and starting the training foundation. By the end of the first week you’ll receive your first video progress report. We spend the next week addressing problem behaviors, adding distractions, proofing behaviors, and continue proper e-collar conditioning as a reinforcer. You’ll receive 1-2 more video progress reports during this time. If your dog is staying for the 3-4 week program this is when you’ll come for a visit/lesson so we can begin working with you also. Following that, we’ll start proofing off-leash work and continue proofing obedience with more difficult distractions.You’ll receive 1-2 more videos during this time."
        }
      ],
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
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Got Questions About <span className="text-accent">Dog Training?</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Find answers to the most common questions about our training programs, methods, and what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center space-x-2 mb-6">
                  <HelpCircle className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl md:text-3xl font-bold">{category.category}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-accent/20 bg-accent/5">
            <CardContent className="p-8 md:p-12 text-center">
              <HelpCircle className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                Don't see your question answered here? We're here to help! Contact us for personalized answers about
                your dog's specific training needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-accent" />
                  <span>Or call us directly:</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:7139097968"
                    className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors font-semibold"
                  >
                    <span>Austin: (512) 648-4510</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
