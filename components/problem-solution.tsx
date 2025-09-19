import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, CheckCircle, CircleCheckBig } from "lucide-react"

export function ProblemSolution() {
  const problems = [
    'Walking side by side without pulling',
    'Greeting guests with calm excitement',
    'Building confidence and focus',
    'Easing anxiety and big feelings',
    'Reducing barking, chewing, or reactivity',
    'Enjoying outings without stress',
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
            Do you dream of a calmer, happier life with your dog?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">Together we can work on goals like:</p>
        </div>

        {/* Problems List */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <Card key={index} className="border-emerald-500/20 bg-green-400/5">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    {/*<X className="h-5 w-5 text-destructive flex-shrink-0" />*/}
                    <CircleCheckBig className="h-5 w-5 text-green-600 flex-shrink-0" />
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
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">We can help you and your dog shine.</h3>
              </div>
              <p className="text-lg md:text-xl text-foreground mb-6 text-balance leading-relaxed">
                Our training strengthens your bond, turning challenges into opportunities for growth. 
                With the right tools and guidance, you’ll enjoy a lifelong partnership full of trust and joy.
              </p>
              <p className="text-xl font-semibold text-foreground">Ready to enjoy life with your dog again?</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
