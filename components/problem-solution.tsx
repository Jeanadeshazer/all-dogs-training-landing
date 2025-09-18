import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, CheckCircle } from "lucide-react"

export function ProblemSolution() {
  const problems = [
    "Pull on the leash?",
    "Jump on you and guests?",
    "Have anxiety and impulse control issues?",
    "Only listen when he wants to?",
    "Chew? Nuisance bark?",
    "Have reactivity issues?",
    "Embarrass you in public?",
    "Do you have a puppy that's keeping you up at night and stressing you out?",
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-accent-foreground bg-accent">
            Common Problems
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Are you struggling with your dog?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">Does your dog...</p>
        </div>

        {/* Problems List */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <Card key={index} className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-foreground font-medium">{problem}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-accent/20 bg-accent/5">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <CheckCircle className="h-8 w-8 text-accent" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">We Can Fix That!</h3>
              </div>
              <p className="text-lg md:text-xl text-foreground mb-6 text-balance leading-relaxed">
                Our training programs will help you transform your dog into a well-behaved member of your family. We'll
                teach you the skills and techniques needed to address these issues permanently.
              </p>
              <p className="text-xl font-semibold text-foreground">Ready to enjoy life with your dog again?</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
