"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  Clock,
  Globe,
} from "lucide-react";
import { toast } from "sonner";

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
];

const availabilitySlots = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM UTC+1" },
  { day: "Saturday", time: "10:00 AM - 2:00 PM UTC+1" },
  { day: "Sunday", time: "By appointment only" },
];

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const lastSentRef = useRef<number | null>(null);
  const cooldown = 60 * 1000; // 60 seconds cooldown

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (lastSentRef.current && now - lastSentRef.current < cooldown) {
      toast.error("Please wait a minute before sending another message.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
    const publicKeyy = process.env.NEXT_PUBLIC_KEY || "";

    if (form.current) {
      setIsSending(true);
      try {
        await emailjs.sendForm(serviceId, templateId, form.current, {
          publicKey: publicKeyy,
        });
        lastSentRef.current = now;
        toast.success("Mail sent successfully");
        form.current.reset();
      } catch (error) {
        toast.error("Error while sending the mail");
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-14 lg:py-16 space-y-8 sm:space-y-10"
    >
      {/* Section Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
          <MessageSquare className="w-4 h-4 text-[#3d98f4] animate-pulse" />
          <span className="text-[#9cabba] text-sm font-medium">
            Get In Touch
          </span>
        </div>
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Let&apos;s Work Together
        </h2>
        <p className="text-[#9cabba] text-base sm:text-lg max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I&apos;d love to
          hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
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
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-[#9cabba] text-xs font-medium">
                            {info.label}
                          </p>
                          <p className="text-white font-semibold group-hover:text-[#3d98f4] transition-colors text-sm">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
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
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-[#9cabba] text-sm">{slot.day}</span>
                      <Badge
                        variant="outline"
                        className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs"
                      >
                        {slot.time}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-[#3b4754]">
                  <p className="text-[#9cabba] text-xs">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="rounded-lg bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754]">
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-xl sm:text-2xl font-bold text-[#3d98f4]">
                      24h
                    </div>
                    <div className="text-[#9cabba] text-xs">Response Time</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xl sm:text-2xl font-bold text-[#10b981]">
                      100%
                    </div>
                    <div className="text-[#9cabba] text-xs">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="rounded-lg bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754] overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  {/* Form Header */}
                  <div className="space-y-2">
                    <h3 className="text-white text-lg sm:text-xl font-semibold">
                      Send me a message
                    </h3>
                    <p className="text-[#9cabba] text-sm">
                      Fill out the form below and I&apos;ll get back to you as soon
                      as possible.
                    </p>
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-white text-sm font-medium flex items-center gap-2"
                      >
                        <User className="w-4 h-4" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Enter your full name"
                        className={`rounded-lg bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4] focus:ring-[#3d98f4] transition-colors`}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-white text-sm font-medium flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email address"
                        className={`rounded-lg bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4] focus:ring-[#3d98f4] transition-colors`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-white text-sm font-medium flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="What's this about?"
                      className={`rounded-lg bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4] focus:ring-[#3d98f4] transition-colors`}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-white text-sm font-medium flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      className={`rounded-lg bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4] focus:ring-[#3d98f4] transition-colors resize-none`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-gradient-to-r from-[#3d98f4] to-[#2563eb] hover:from-[#2d7bd4] hover:to-[#1d4ed8] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        {isSending ? "Sending...." : "Send Message"}
                      </div>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-8 sm:mt-12 text-center space-y-4">
          <p className="text-[#9cabba] text-sm">
            Prefer a different way to connect? You can also reach me through:
          </p>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="bg-[#1b2127] rounded-lg border-[#3b4754] text-white hover:bg-[#283039] hover:border-[#3d98f4]"
            >
              <a
                href="https://linkedin.com/in/yessine-agrebi"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-[#1b2127] rounded-lg border-[#3b4754] text-white hover:bg-[#283039] hover:border-[#3d98f4]"
            >
              <a
                href="https://github.com/yessine-agrebi"
                target="_blank"
                rel="noopener noreferrer"
              >
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
  );
}
