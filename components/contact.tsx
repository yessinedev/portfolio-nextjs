"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  MessageSquare,
  User,
  Clock,
  Globe,
} from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yessine.ag@gmail.com",
    href: "mailto:yessine.ag@gmail.com",
    color: "from-[#3d98f4] to-[#2563eb]",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+216 28 288 256",
    href: "tel:+21628288256",
    color: "from-[#10b981] to-[#059669]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sfax, Tunisia",
    href: "https://maps.google.com/?q=Sfax,TN",
    color: "from-[#f59e0b] to-[#d97706]",
  },
  {
    icon: Globe,
    label: "Timezone",
    value: "UTC+1",
    href: "#",
    color: "from-[#8b5cf6] to-[#7c3aed]",
  },
]

const availabilitySlots = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM UTC+1" },
  { day: "Saturday", time: "10:00 AM - 2:00 PM UTC+1" },
  { day: "Sunday", time: "By appointment only" },
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate success/error randomly for demo
      if (Math.random() > 0.2) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-14 lg:py-16 space-y-8 sm:space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
          <MessageSquare className="w-4 h-4 text-[#3d98f4] animate-pulse" />
          <span className="text-[#9cabba] text-sm font-medium">Get In Touch</span>
        </div>
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">Let's Work Together</h2>
        <p className="text-[#9cabba] text-base sm:text-lg max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card
                    key={info.label}
                    className="rounded-lg bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754] hover:border-[#3d98f4]/50 transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-3 sm:p-4">
                      <a
                        href={info.href}
                        className="flex items-center gap-3 text-decoration-none"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-[#9cabba] text-xs font-medium">{info.label}</p>
                          <p className="text-white font-semibold group-hover:text-[#3d98f4] transition-colors text-sm">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Availability */}
            <Card className="rounded-lg bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754]">
              <CardContent className="p-4 sm:p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#10b981]" />
                  <h3 className="text-white font-semibold">Availability</h3>
                </div>
                <div className="space-y-3">
                  {availabilitySlots.map((slot, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-[#9cabba] text-sm">{slot.day}</span>
                      <Badge variant="outline" className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs">
                        {slot.time}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-[#3b4754]">
                  <p className="text-[#9cabba] text-xs">Response time: Usually within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="rounded-lg bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754]">
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-xl sm:text-2xl font-bold text-[#3d98f4]">24h</div>
                    <div className="text-[#9cabba] text-xs">Response Time</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xl sm:text-2xl font-bold text-[#10b981]">100%</div>
                    <div className="text-[#9cabba] text-xs">Client Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="rounded-lg bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754] overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Form Header */}
                  <div className="space-y-2">
                    <h3 className="text-white text-lg sm:text-xl font-semibold">Send me a message</h3>
                    <p className="text-[#9cabba] text-sm">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`rounded-lg bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4] focus:ring-[#3d98f4] transition-colors ${
                          errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1 text-red-400 text-xs">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white text-sm font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        className={`rounded-lg bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4] focus:ring-[#3d98f4] transition-colors ${
                          errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 text-red-400 text-xs">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`rounded-lg bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4] focus:ring-[#3d98f4] transition-colors ${
                        errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    {errors.subject && (
                      <div className="flex items-center gap-1 text-red-400 text-xs">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`rounded-lg bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4] focus:ring-[#3d98f4] transition-colors resize-none ${
                        errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    <div className="flex justify-between items-center">
                      {errors.message ? (
                        <div className="flex items-center gap-1 text-red-400 text-xs">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </div>
                      ) : (
                        <div></div>
                      )}
                      <span className="text-[#9cabba] text-xs">{formData.message.length}/500</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#3d98f4] to-[#2563eb] hover:from-[#2d7bd4] hover:to-[#1d4ed8] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-green-400 font-medium">Message sent successfully!</p>
                        <p className="text-green-400/80 text-sm">I'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="text-red-400 font-medium">Failed to send message</p>
                        <p className="text-red-400/80 text-sm">Please try again or contact me directly.</p>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-8 sm:mt-12 text-center space-y-4">
          <p className="text-[#9cabba] text-sm">Prefer a different way to connect? You can also reach me through:</p>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="bg-[#1b2127] rounded-lg border-[#3b4754] text-white hover:bg-[#283039] hover:border-[#3d98f4]"
            >
              <a href="https://linkedin.com/in/yessine-agrebi" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-[#1b2127] rounded-lg border-[#3b4754] text-white hover:bg-[#283039] hover:border-[#3d98f4]"
            >
              <a href="https://github.com/yessine-agrebi" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-[#1b2127] rounded-lg border-[#3b4754] text-white hover:bg-[#283039] hover:border-[#3d98f4]"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
