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
  title: "FAQ - All Dogs Training Co | Dog Training Questions Houston TX",
  description:
    "Frequently asked questions about dog training services in Houston TX. Get answers about our training programs, pricing, and methods from professional dog trainers.",
  keywords:
    "dog training FAQ houston, dog training questions houston, dog trainer FAQ houston tx, dog training cost houston, how long dog training houston",
}

export default function FAQPage() {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "How long does dog training take?",
          answer:
            "The duration depends on your dog's age, current behavior, and the specific issues being addressed. Puppy training typically takes 6-8 weeks, while adult obedience training takes 8-12 weeks. Behavioral modification programs vary based on the complexity of the issues. We'll provide a realistic timeline during your free consultation.",
        },
        {
          question: "What makes All Dogs Training Co different from other trainers?",
          answer:
            "We're locally owned and operated by actual dog trainers, not a corporate franchise. We have decades of experience and focus on training YOU how to train your dog, ensuring lasting results. Our small class sizes and personalized approach set us apart from big box training companies.",
        },
        {
          question: "Do you offer a guarantee?",
          answer:
            "Yes! We're so confident in our methods that we offer a satisfaction guarantee. If you're not seeing results, we'll work with you until you do. Our goal is your success, and we stand behind our training programs 100%.",
        },
        {
          question: "What training methods do you use?",
          answer:
            "We use positive reinforcement-based training methods that are both effective and humane. Our approach focuses on building a strong relationship between you and your dog while addressing behavioral issues in a way that's enjoyable for both of you.",
        },
      ],
    },
    {
      category: "Training Programs",
      questions: [
        {
          question: "What's included in the puppy training program?",
          answer:
            "Our puppy program covers basic commands (sit, stay, come, down), house training, crate training, proper socialization, bite inhibition, leash walking basics, and problem prevention strategies. We also provide ongoing support and guidance throughout the program.",
        },
        {
          question: "Can you help with aggressive dogs?",
          answer:
            "Yes, we specialize in behavioral modification including aggression issues. However, we require an initial assessment to determine the best approach for your dog's specific situation. Safety is our top priority, and we'll create a customized plan to address aggressive behaviors effectively.",
        },
        {
          question: "Do you offer private training sessions?",
          answer:
            "We offer private in-home training sessions for dogs that need individual attention or have specific behavioral issues that are better addressed one-on-one. Private sessions can be more intensive and tailored to your dog's unique needs.",
        },
        {
          question: "What if my dog doesn't get along with other dogs?",
          answer:
            "We can work with reactive or dog-aggressive dogs through our behavioral modification program. We'll start with private sessions to address the underlying issues before gradually introducing controlled socialization if appropriate for your dog.",
        },
      ],
    },
    {
      category: "Logistics & Pricing",
      questions: [
        {
          question: "How much does training cost?",
          answer:
            "Our puppy training starts at $299, adult obedience training starts at $399, and behavioral modification starts at $599. We also offer payment plans to make training affordable for every family. The exact cost depends on your dog's specific needs, which we'll discuss during your free consultation.",
        },
        {
          question: "Do you serve areas outside Houston and Austin?",
          answer:
            "Yes! We serve the greater Houston and Austin metropolitan areas, including Katy, Sugar Land, The Woodlands, Pearland, Round Rock, Cedar Park, and surrounding communities. Contact us to confirm we serve your specific area.",
        },
        {
          question: "What should I bring to the first session?",
          answer:
            "Bring your dog on a leash, some high-value treats your dog loves, any training equipment you currently use, and a list of specific behaviors you'd like to address. We'll provide additional guidance when you schedule your consultation.",
        },
        {
          question: "Can I start training if my dog isn't fully vaccinated?",
          answer:
            "For puppies under 16 weeks who aren't fully vaccinated, we can start with private sessions or controlled environments. Once your puppy is fully vaccinated, they can join group classes. We prioritize your puppy's health and safety while ensuring they get the early training they need.",
        },
      ],
    },
    {
      category: "Results & Expectations",
      questions: [
        {
          question: "How quickly will I see results?",
          answer:
            "Many clients see improvements within the first few sessions, but lasting behavioral change takes time and consistency. Simple commands can be learned quickly, while complex behavioral issues may take several weeks to months. We'll set realistic expectations during your consultation.",
        },
        {
          question: "What if my dog is older? Is it too late to train?",
          answer:
            "It's never too late to train a dog! While puppies may learn faster, adult and senior dogs can absolutely learn new behaviors and overcome bad habits. We've successfully trained dogs of all ages, from 8-week-old puppies to 12-year-old seniors.",
        },
        {
          question: "Will the training work if I have multiple dogs?",
          answer:
            "Yes! We can work with multiple dogs, though the approach may vary depending on their individual needs and how they interact with each other. Sometimes we train dogs separately initially, then work on group dynamics. We'll assess your specific situation during the consultation.",
        },
        {
          question: "What happens after the training program ends?",
          answer:
            "We provide lifetime support for all our clients! You can contact us anytime with questions or if you need refresher sessions. We also offer advanced training programs and ongoing group classes to continue your dog's education.",
        },
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
