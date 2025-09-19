"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    dogName: "",
    dogAge: "",
    dogBreed: "",
    trainingType: "",
    issues: [] as string[],
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleIssueChange = (issue: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      issues: checked ? [...prev.issues, issue] : prev.issues.filter((i) => i !== issue),
    }))
  }

  const behaviorIssues = [
    "Leash pulling",
    "Jumping on people",
    "Excessive barking",
    "Aggression",
    "Anxiety/Fear",
    "House training",
    "Destructive behavior",
    "Not coming when called",
    "Resource guarding",
    "Reactivity to other dogs",
  ]

  if (isSubmitted) {
    return (
      <Card className="border-accent/20 bg-accent/5">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            We've received your consultation request and will contact you within 24 hours to schedule your free
            consultation.
          </p>
          <p className="text-sm text-muted-foreground">
            For immediate assistance, please call us at{" "}
            <a href="tel:7139097968" className="text-accent font-semibold">
              (713) 909-7968
            </a>{" "}
            (Houston) or{" "}
            <a href="tel:5126484510" className="text-accent font-semibold">
              (512) 648-4510
            </a>{" "}
            (Austin).
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="shadow-xl shadow-accent/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Schedule Your Free Consultation</CardTitle>
        <p className="text-muted-foreground text-center">
          Tell us about your dog and we'll create a customized training plan just for you.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="mb-2 block">
                Your Name *
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Smith"
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="mb-2 block">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(713) 555-0123"
              />
            </div>
            <div>
              <Label htmlFor="location" className="mb-2 block">
                Preferred Location *
              </Label>
              <Select
                value={formData.location}
                onValueChange={(value) => setFormData({ ...formData, location: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="houston">Houston</SelectItem>
                  <SelectItem value="austin">Austin</SelectItem>
                  <SelectItem value="either">Either Location</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Dog Information */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">About Your Dog</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="dogName" className="mb-2 block">
                  Dog's Name *
                </Label>
                <Input
                  id="dogName"
                  required
                  value={formData.dogName}
                  onChange={(e) => setFormData({ ...formData, dogName: e.target.value })}
                  placeholder="Buddy"
                />
              </div>
              <div>
                <Label htmlFor="dogAge" className="mb-2 block">
                  Age *
                </Label>
                <Input
                  id="dogAge"
                  required
                  value={formData.dogAge}
                  onChange={(e) => setFormData({ ...formData, dogAge: e.target.value })}
                  placeholder="2 years"
                />
              </div>
              <div>
                <Label htmlFor="dogBreed" className="mb-2 block">
                  Breed *
                </Label>
                <Input
                  id="dogBreed"
                  required
                  value={formData.dogBreed}
                  onChange={(e) => setFormData({ ...formData, dogBreed: e.target.value })}
                  placeholder="Golden Retriever"
                />
              </div>
            </div>
          </div>

          {/* Training Type */}
          <div>
            <Label htmlFor="trainingType" className="mb-2 block">
              Type of Training Needed *
            </Label>
            <Select
              value={formData.trainingType}
              onValueChange={(value) => setFormData({ ...formData, trainingType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select training type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="puppy">Puppy Training</SelectItem>
                <SelectItem value="obedience">Adult Dog Obedience</SelectItem>
                <SelectItem value="behavioral">Behavioral Modification</SelectItem>
                <SelectItem value="private">Private Training</SelectItem>
                <SelectItem value="unsure">Not Sure - Need Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Behavioral Issues */}
          <div>
            <Label className="text-base font-medium mb-3 block">Current Behavioral Issues (check all that apply)</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {behaviorIssues.map((issue) => (
                <div key={issue} className="flex items-center space-x-2">
                  <Checkbox
                    id={issue}
                    checked={formData.issues.includes(issue)}
                    onCheckedChange={(checked) => handleIssueChange(issue, checked as boolean)}
                  />
                  <Label htmlFor={issue} className="text-sm font-normal">
                    {issue}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="mb-2 block">
              Additional Information
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us more about your dog's specific challenges or any questions you have..."
              rows={4}
            />
          </div>

          {/* Newsletter */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
            />
            <Label htmlFor="newsletter" className="text-sm">
              I'd like to receive training tips and updates via email
            </Label>
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full bg-zinc-300 hover:bg-zinc-300/90">
            <Send className="mr-2 h-5 w-5" />
            Schedule Free Consultation
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to be contacted by All Dogs Training Co regarding your training needs. We
            respect your privacy and will never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
