import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - All Dogs Training Co | Dog Training austin TX",
  description:
    "Contact All Dogs Training Co for professional dog training in austin and Austin. Schedule your free consultation today. Call (713) 909-7968 Houston or (512) 648-4510 Austin.",
  keywords:
    "contact dog trainer austin, dog training consultation austin, schedule dog training austin, dog trainer phone number austin, dog training contact austin tx",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Austin Location",
      details: ["(512) 648-4510", "Available 7 days a week"],
      action: "tel:5126484510",
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email Us",
      details: ["info@alldogstrainingco.com", "Response within 24 hours"],
      action: "mailto:info@alldogstrainingco.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Business Hours",
      details: ["Monday - Saturday", "7:00 AM - 8:00 PM"],
      action: null,
    },
  ];

  const serviceAreas = [
    "Houston, TX",
    "Austin, TX",
    "Cypress",
    "Cedar Park",
    "Katy",
    "Round Rock",
    "The Woodlands",
    "Bastrop",
    "And all surrounding areas",
    "And all surrounding areas",
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 text-accent-foreground bg-accent"
            >
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Ready to Transform Your{" "}
              <span className="text-accent">Dog's Behavior?</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Schedule your free consultation today and take the first step
              toward a better relationship with your dog.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  {info.action ? (
                    <a
                      href={info.action}
                      className="block space-y-1 hover:text-accent transition-colors"
                    >
                      {info.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className={
                            detailIndex === 0
                              ? "font-semibold text-lg break-words" // Added break-words to prevent email overflow
                              : "text-sm text-muted-foreground"
                          }
                        >
                          {detail}
                        </div>
                      ))}
                    </a>
                  ) : (
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className={
                            detailIndex === 0
                              ? "font-semibold text-lg break-words" // Added break-words for consistency
                              : "text-sm text-muted-foreground"
                          }
                        >
                          {detail}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <iframe
    src="https://api.leadconnectorhq.com/widget/form/zWWHDMwl1ysH4xeDlleP"
    style={{width: '100%', height: '100%', border:'none', borderRadius:'3px'}}
    id="inline-zWWHDMwl1ysH4xeDlleP" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Austin Website Form"
    data-height="1090"
    data-layout-iframe-id="inline-zWWHDMwl1ysH4xeDlleP"
    data-form-id="zWWHDMwl1ysH4xeDlleP"
    title="Austin Website Form"
        >
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <MessageCircle className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-semibold">
                      Need Immediate Help?
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    For urgent behavioral issues or immediate questions, call us
                    directly:
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:5126484510"
                      className="block p-3 bg-accent text-accent-foreground rounded-lg text-center font-semibold hover:bg-accent/90 transition-colors"
                    >
                      Austin: (512) 648-4510
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-semibold">Service Areas</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We proudly serve the following areas:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div
                        key={index}
                        className="text-sm text-muted-foreground"
                      >
                        • {area}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Don't see your area listed? Contact us - we may still be
                    able to help!
                  </p>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <div className="font-medium">Free Consultation</div>
                        <div className="text-sm text-muted-foreground">
                          We'll assess your dog's needs and discuss training
                          options.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <div className="font-medium">Custom Plan</div>
                        <div className="text-sm text-muted-foreground">
                          We'll create a personalized training program for your
                          dog.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <div className="font-medium">Start Training</div>
                        <div className="text-sm text-muted-foreground">
                          Begin your journey to a well-behaved, happy dog!
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
